'use client';

import { useReviewModalStore } from '@/store/useReviewModalStore';
import Slider from '../../common/Slider';

const sliderData = [
  { label: '바디감', descriptions: ['가벼워요', '진해요'] },
  { label: '타닌', descriptions: ['부드러워요', '떫어요'] },
  { label: '당도', descriptions: ['드라이해요', '달아요'] },
  { label: '산미', descriptions: ['안셔요', '많이셔요'] },
];

export default function TasteSlider() {
  const { tasteValues, setTasteValues } = useReviewModalStore();

  // 슬라이더 값이 변경되었을 때 상태 업데이트
  const handleSliderChange = (index: number, value: number) => {
    const newTasteValues = [...tasteValues];
    newTasteValues[index] = value;
    setTasteValues(newTasteValues);
  };

  return (
    <section className="whitespace-nowrap">
      {sliderData.map((slider, index) => (
        <div
          key={slider.label}
          className="mb-3 flex items-center justify-between gap-3"
        >
          <p className="w-[50px] flex-shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-center text-sm font-semibold text-gray-500 mob:w-[40px] mob:px-1 mob:py-0.5 mob:text-xs">
            {slider.label}
          </p>
          <p className="w-[75px] flex-shrink-0 text-lg font-medium mob:w-[60px] mob:text-md">
            {slider.descriptions[0]}
          </p>
          <Slider
            value={tasteValues[index]}
            mode="interactive"
            onChange={(value) => handleSliderChange(index, value)}
            width="100%"
          />
          <p className="w-[75px] flex-shrink-0 text-lg font-medium mob:w-[45px] mob:text-md">
            {slider.descriptions[1]}
          </p>
        </div>
      ))}
    </section>
  );
}
