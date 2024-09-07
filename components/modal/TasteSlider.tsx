'use client';

import { useState } from 'react';
import Slider from '../common/Slider';

export default function TasteSlider() {
  const [sliderValues, setSliderValues] = useState({
    body: 50,
    tannin: 50,
    sweetness: 50,
    acidity: 50,
  });

  const handleSliderChange = (key: string, value: number) => {
    setSliderValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="w-15 flex-shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-500">
          바디감
        </p>
        <p className="mx-[2px] flex-grow text-lg font-medium">가벼워요</p>
        <Slider
          value={sliderValues.body}
          mode="interactive"
          onChange={(value) => handleSliderChange('body', value)}
          width="100%"
        />
        <p className="w-24 flex-shrink-0 text-lg font-medium">진해요</p>
      </div>

      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="w-15 flex-shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-500">
          타닌
        </div>
        <div className="flex-grow text-lg font-medium">부드러워요</div>
        <Slider
          value={sliderValues.tannin}
          mode="interactive"
          onChange={(value) => handleSliderChange('tannin', value)}
          width="100%"
        />
        <div className="w-24 flex-shrink-0 text-lg font-medium">떫어요</div>
      </div>

      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="w-15 flex-shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-500">
          당도
        </p>
        <p className="flex-grow text-lg font-medium">드라이해요</p>
        <Slider
          value={sliderValues.sweetness}
          mode="interactive"
          onChange={(value) => handleSliderChange('sweetness', value)}
          width="100%"
        />
        <p className="w-24 flex-shrink-0 text-lg font-medium">달아요</p>
      </div>

      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="w-15 flex-shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-500">
          산미
        </p>
        <p className="mx-[14px] flex-shrink-0 text-lg font-medium">안셔요</p>
        <Slider
          value={sliderValues.acidity}
          mode="interactive"
          onChange={(value) => handleSliderChange('acidity', value)}
          width="100%"
        />
        <p className="w-24 flex-shrink-0 text-lg font-medium">많이셔요</p>
      </div>
    </section>
  );
}
