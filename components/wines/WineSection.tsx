'use client';

import Button from '@/components/common/Button';
import SearchInput from '@/components/common/SearchInput';
import AddWineModal from '@/components/modal/AddWineModal';
import ConfirmModal from '@/components/modal/ConfirmModal';
import FilteringModal from '@/components/wines/FilteringModal';
import FilteringOpenButton from '@/components/wines/FilteringOpenButton';
import WineCardGallery from '@/components/wines/WineCardGallery';
import useLoginConfirmModal from '@/hooks/modal/useLoginConfirmModal';
import { useAuthStore } from '@/providers/auth';
import { useWineList } from '@/queries/wines.queries';
import { debounce } from '@/utils/debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

const initialFormValue = {
  id: 0,
  name: '',
  price: 0,
  origin: '',
  region: '',
  type: '',
  imgFile: null,
  image: '',
};

export default function WineSection() {
  const [isFilteringOpen, setIsFilteringOpen] = useState<boolean>(false);
  const [isAddWineModalOpen, setIsAddWineModalOpen] = useState<boolean>(false);

  // 필터 객체로 상태 관리
  const [filters, setFilters] = useState<{
    type: 'RED' | 'WHITE' | 'SPARKLING' | undefined;
    priceRange: [number, number];
    rating: number | undefined;
    name: string;
    limit: number;
  }>({
    type: undefined,
    priceRange: [0, 200000], // 기본 가격 범위
    rating: undefined,
    name: '',
    limit: 5, // 기본 limit 값
  });

  // API 요청을 위한 필터 객체 정리
  const cleanFilters = {
    ...(filters.type && { type: filters.type }),
    minPrice: filters.priceRange[0],
    maxPrice:
      filters.priceRange[1] === 200000 ? 10000000 : filters.priceRange[1], // maxPrice가 200000일 경우 모든 가격을 불러옴
    ...(filters.rating && { rating: filters.rating }),
    ...(filters.name.trim() && { name: filters.name.trim() }),
    limit: filters.limit,
  };

  // useWineList 훅을 사용해 데이터 페칭
  const {
    data: wineListPages,
    error: wineListError,
    isLoading: isWineListLoading,
    isFetching: isWineListFetching,
    fetchNextPage, // 추가로 데이터를 가져오는 함수
    hasNextPage, // 다음 페이지가 있는지 여부
  } = useWineList(cleanFilters);

  // 필터 변경 핸들러
  const handleFilterChange = (updatedFilters: Partial<typeof filters>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...updatedFilters,
    }));
  };

  // 검색어 변경 처리 (디바운싱 적용)
  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      handleFilterChange({ name: searchTerm });
    }, 300),
    [handleFilterChange]
  );

  // 무한 스크롤을 위한 로딩 트리거 요소 참조
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver를 사용하여 무한 스크롤 구현
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // 로딩 트리거 요소가 화면에 나타나고 다음 페이지가 있으며, 현재 페칭 중이 아닐 때
        if (entry.isIntersecting && hasNextPage && !isWineListFetching) {
          fetchNextPage(); // 다음 페이지 데이터 가져오기
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    observer.observe(loadMoreRef.current);

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasNextPage, isWineListFetching, fetchNextPage]);

  // 무한 스크롤 데이터를 결합하여 와인 목록을 렌더링
  const wineList = wineListPages?.pages.flatMap((page) => page.list) ?? [];

  // 로그인 상태 및 ConfirmModal 훅 사용
  const user = useAuthStore((state) => state.user);
  const {
    isConfirmOpen,
    setIsConfirmOpen,
    handleConfirmClick,
    handleConfirmOpenClick,
  } = useLoginConfirmModal();

  // 와인 등록 버튼 클릭 핸들러
  const handleAddWineClick = () => {
    // 유저 로그인 검증
    if (user) {
      setIsAddWineModalOpen(true);
    } else {
      setIsConfirmOpen(true);
    }
  };

  return (
    <>
      <section className="flex w-full max-w-[1140px] gap-[60px]">
        {/* PC: 필터링 기능 및 와인 등록하기 버튼 */}
        <div className="tab:hidden">
          <div className="pt-[110px]" />
          <FilteringModal
            isModal={false}
            onClick={() => setIsFilteringOpen(false)}
            onChange={handleFilterChange}
            filters={filters}
          />
          <Button
            buttonStyle="box"
            buttonColor="purple"
            buttonWidth="fitToParent"
            textColor="white"
            style={{ marginTop: '40px' }}
            onClick={handleAddWineClick}
          >
            와인 등록하기
          </Button>
        </div>

        {/* 검색 및 와인 목록 */}
        <div className="flex w-full flex-col gap-[60px]">
          <div className="flex h-auto gap-[20px]">
            <FilteringOpenButton
              className="hidden tab:flex"
              onClick={() => setIsFilteringOpen(!isFilteringOpen)}
            />
            <SearchInput
              placeholder="와인을 검색해 보세요"
              className="flex-grow"
              onChange={(e) => debouncedSearch(e.target.value)}
            />
            <Button
              buttonStyle="box"
              buttonColor="purple"
              buttonWidth="fitToChildren"
              textColor="white"
              className="h-[48px] w-[220px] mob:hidden"
              onClick={handleAddWineClick}
            >
              와인 등록하기
            </Button>
          </div>

          {/* 와인 목록 출력 */}
          {wineListError && (
            <div className="text-red-500">
              와인 데이터를 가져오는 중 에러가 발생했습니다:{' '}
              {wineListError.message}
            </div>
          )}
          <WineCardGallery wineList={wineList} />

          {/* 로딩 상태 또는 로딩 트리거 요소 */}
          {isWineListFetching && !isWineListLoading && (
            <div>추가 로딩 중...</div>
          )}
          <div ref={loadMoreRef} style={{ height: '1px' }} />
        </div>

        {/* MOB: 등록 모달 팝업 버튼 */}
        <div className="z-1 hidden w-full mob:fixed mob:bottom-[30px] mob:left-0 mob:right-0 mob:flex mob:justify-center mob:p-4">
          <Button
            buttonStyle="box"
            buttonColor="purple"
            buttonWidth="fitToParent"
            textColor="white"
            className="h-[48px] w-[343px] shadow-xl"
            onClick={handleAddWineClick}
          >
            와인 등록하기
          </Button>
        </div>
      </section>

      {/* 와인 등록 모달 */}
      {isAddWineModalOpen && (
        <AddWineModal
          isOpen={isAddWineModalOpen}
          onClick={() => setIsAddWineModalOpen(false)}
          initialFormValue={initialFormValue}
          mode="add"
        />
      )}

      {/* MOB/TAB: 필터링 모달 */}
      {isFilteringOpen && (
        <FilteringModal
          isModal
          isOpen={isFilteringOpen}
          onClick={() => setIsFilteringOpen(false)}
          onChange={handleFilterChange}
          filters={filters}
        />
      )}

      {/* 로그인 확인 모달 */}
      <ConfirmModal
        isOpen={isConfirmOpen}
        confirmMessage="로그인이 필요한 서비스입니다."
        label="로그인"
        onConfirm={handleConfirmClick}
        onCancel={handleConfirmOpenClick}
        isOnlyConfirm
      />
    </>
  );
}
