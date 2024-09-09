'use client';

import { WineTastes } from '@/types/review.types';
import Slider from '../common/Slider';

const sliderData = [
  { label: '바디감', descriptions: ['가벼워요', '진해요'] },
  { label: '타닌', descriptions: ['부드러워요', '떫어요'] },
  { label: '당도', descriptions: ['드라이해요', '달아요'] },
  { label: '산미', descriptions: ['안셔요', '많이셔요'] },
];

type WineTasteSliderProps = WineTastes;

export default function WineTasteSlider({ ...tastes }: WineTasteSliderProps) {
  const tastesArray = [
    tastes.lightBold,
    tastes.smoothTannic,
    tastes.drySweet,
    tastes.softAcidic,
  ];

  return (
    <section className="whitespace-nowrap">
      {sliderData.map((slider, index) => (
        <div
          key={slider.label}
          className="mb-3 flex items-center justify-between gap-3"
        >
          <p className="w-[40px] flex-shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-center text-sm font-semibold text-gray-500 mob:w-[40px] mob:px-1 mob:py-0.5 mob:text-xs">
            {slider.label}
          </p>
          <p className="w-[75px] flex-shrink-0 text-lg font-medium mob:w-[60px] mob:text-md">
            {slider.descriptions[0]}
          </p>
          <Slider value={tastesArray[index]} mode="readonly" width="100%" />
          <p className="w-[75px] flex-shrink-0 text-lg font-medium mob:w-[45px] mob:text-md">
            {slider.descriptions[1]}
          </p>
        </div>
      ))}
    </section>
  );
}
