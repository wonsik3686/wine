'use client';

import { getWine } from '@/api/wines.api';
import Button from '@/components/common/Button';
import SearchInput from '@/components/common/SearchInput';
import AddWineModal from '@/components/modal/AddWineModal';
import FilteringModal from '@/components/wines/FilteringModal';
import FilteringOpenButton from '@/components/wines/FilteringOpenButton';
import WineCardGallery from '@/components/wines/WineCardGallery';
import { useState } from 'react';

const initialFormValue = {
  name: '',
  price: '',
  origin: '',
  type: 'undefined',
  imgFile: null,
};

export default function WineSection() {
  const [isFilteringOpen, setIsFilteringOpen] = useState<boolean>(false);
  const [isAddWineModalOpen, setIsAddWineModalOpen] = useState<boolean>(false);

  // 필터링을 위한 상태값들
  const [type, setType] = useState<'RED' | 'WHITE' | 'SPARKLING' | undefined>(
    undefined
  );
  const [limit, setLimit] = useState<number>(10);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [rating, setRating] = useState<number>(4.5);

  const fetchWineList = async () => {
    const [minPrice, maxPrice] = priceRange;
    const wineList = await getWine({
      type,
      limit,
      minPrice,
      maxPrice,
      rating,
    });
  };

  const handleFilterChange = (updatedFilters: {
    type?: 'RED' | 'WHITE' | 'SPARKLING' | undefined; // 필터 변경에 type 추가
    limit?: number;
    priceRange?: [number, number];
    rating?: number;
  }) => {
    if (updatedFilters.type !== undefined) setType(updatedFilters.type);
    if (updatedFilters.limit !== undefined) setLimit(updatedFilters.limit);
    if (updatedFilters.priceRange !== undefined)
      setPriceRange(updatedFilters.priceRange);
    if (updatedFilters.rating !== undefined) setRating(updatedFilters.rating);
  };

  return (
    <>
      <section className="flex w-full max-w-[1140px] gap-[60px]">
        {/* PC: 필터링 기능 및 와인 등록하기 버튼 */}
        <div className="tab:hidden">
          <div className="pt-[108px]" />
          <FilteringModal
            isModal={false}
            onClick={() => setIsFilteringOpen(false)}
            onChange={handleFilterChange}
            priceRange={priceRange}
          />
          <Button
            buttonStyle="box"
            buttonColor="purple"
            buttonWidth="fitToParent"
            textColor="white"
            style={{
              marginTop: '40px',
            }}
            onClick={() => setIsAddWineModalOpen(true)} // 와인 등록 모달 열기
          >
            와인 등록하기
          </Button>
        </div>

        {/* 검색창과 와인 목록 */}
        <div className="flex w-full flex-col gap-[60px]">
          <div className="flex h-auto gap-[20px]">
            <FilteringOpenButton
              className="hidden tab:flex"
              onClick={() => setIsFilteringOpen(!isFilteringOpen)}
            />
            <SearchInput
              placeholder="와인을 검색해 보세요"
              className="flex-grow"
            />
            <Button
              buttonStyle="box"
              buttonColor="purple"
              buttonWidth="fitToChildren"
              textColor="white"
              className="h-[48px] w-[220px] mob:hidden"
              onClick={() => setIsAddWineModalOpen(true)} // 와인 등록 모달 열기
            >
              와인 등록하기
            </Button>
          </div>
          <WineCardGallery />
        </div>

        {/* 모바일: 하단 고정 Button */}
        <div className="z-1 hidden w-full mob:fixed mob:bottom-[30px] mob:left-0 mob:right-0 mob:flex mob:justify-center mob:p-4">
          <Button
            buttonStyle="box"
            buttonColor="purple"
            buttonWidth="fitToParent"
            textColor="white"
            className="h-[48px] w-[343px] shadow-xl"
            onClick={() => setIsAddWineModalOpen(true)} // 와인 등록 모달 열기
          >
            와인 등록하기
          </Button>
        </div>
      </section>
      {/* 와인 등록 모달 */}
      {isAddWineModalOpen && (
        <AddWineModal
          isOpen={isAddWineModalOpen}
          onClick={() => setIsAddWineModalOpen(false)} // 모달 닫기
          initialFormValue={initialFormValue}
        />
      )}
      {/* 와인 등록 모달 */}
      {isFilteringOpen && (
        <FilteringModal
          isModal
          isOpen={isFilteringOpen}
          onClick={() => setIsFilteringOpen(false)} // 모달 닫기
          onChange={handleFilterChange}
          priceRange={priceRange}
        />
      )}
    </>
  );
}
