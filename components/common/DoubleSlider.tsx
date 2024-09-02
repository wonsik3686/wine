'use client';

import React from 'react';
import ReactSlider from 'react-slider';

/**
 * ### 더블 슬라이더 컴포넌트
 *
 * - values - 슬라이더의 **현재 값 배열** (두 개의 숫자로 구성)
 * - onChange - 슬라이더 값이 변경될 때 호출되는 **함수**
 * - width - 슬라이더의 너비 (기본값: '200px')
 *
 * 아래와 같이 사용합니다.
 * - const [sliderValues, setSliderValues] = useState<[number, number]>([20, 80]);
 * - const handleSliderChange = (values: [number, number]) => {
 * - setSliderValues(values);
 */
export default function DoubleSlider({
  values,
  onChange,
  width = '200px',
  min = 0,
  max = 100,
}: {
  values: [number, number];
  min?: number;
  max?: number;
  onChange?: (values: [number, number]) => void;
  width?: string;
}): JSX.Element {
  return (
    <div style={{ width }}>
      <ReactSlider
        className="relative w-full h-[6px] bg-gray-100 rounded-full"
        trackClassName="bg-gray-100 h-full border border-gray-300 rounded-full"
        value={values}
        onChange={onChange}
        min={min}
        max={max}
        renderThumb={(props) => (
          <div
            {...props}
            className="absolute top-[50%] transform -translate-y-1/2 h-[20px] w-[20px] bg-white rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-300 border-[1px] border-gray-300"
          />
        )}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`${
              state.index === 1 ? 'bg-purple-100' : 'bg-gray-100'
            } h-[6px] rounded-full`}
          />
        )}
      />
    </div>
  );
}
