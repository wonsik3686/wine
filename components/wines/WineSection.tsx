'use client';

import Button from '@/components/common/Button';
import SearchInput from '@/components/common/SearchInput';
import AddWineModal from '@/components/modal/AddWineModal';
import FilteringModal from '@/components/wines/FilteringModal';
import FilteringOpenButton from '@/components/wines/FilteringOpenButton';
import WineCardGallery from '@/components/wines/WineCardGallery';
import { useWineList } from '@/queries/wines.queries';
import { debounce } from '@/utils/debounce';
import { throttle } from '@/utils/throttle';
import { useCallback, useEffect, useState } from 'react';

const initialFormValue = {
  id: 0,
  name: '',
  price: 0,
  origin: '',
  region: '',
  type: 'RED',
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
    limit: 10, // 기본 limit 값
  });

  const cleanFilters = {
    type: filters.type,
    minPrice: filters.priceRange[0],
    maxPrice:
      filters.priceRange[1] === 200000 ? 10000000 : filters.priceRange[1], // maxPrice가 200000일 경우 10000000으로 설정
    rating: filters.rating,
    ...(filters.name && { name: filters.name }),
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
    debounce((search: string) => {
      handleFilterChange({ name: search });
    }, 300),
    [handleFilterChange]
  );

  // 무한 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 150;

      if (scrollPosition >= threshold && hasNextPage && !isWineListFetching) {
        fetchNextPage(); // 다음 페이지 데이터 가져오기
      }
    }, 500);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isWineListFetching, hasNextPage, fetchNextPage]);

  // 무한 스크롤 데이터를 결합하여 와인 목록을 렌더링
  const wineList = wineListPages?.pages.flatMap((page) => page.list) ?? [];

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
            onClick={() => setIsAddWineModalOpen(true)}
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
              onClick={() => setIsAddWineModalOpen(true)}
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
          {isWineListLoading && <div>로딩 중...</div>}
        </div>

        {/* MOB: 등록 모달 팝업 버튼 */}
        <div className="z-1 hidden w-full mob:fixed mob:bottom-[30px] mob:left-0 mob:right-0 mob:flex mob:justify-center mob:p-4">
          <Button
            buttonStyle="box"
            buttonColor="purple"
            buttonWidth="fitToParent"
            textColor="white"
            className="h-[48px] w-[343px] shadow-xl"
            onClick={() => setIsAddWineModalOpen(true)}
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
    </>
  );
}
