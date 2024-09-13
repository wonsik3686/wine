'use client';

import ReactSlider from 'react-slider';

/**
 * ### 더블 슬라이더 컴포넌트
 *
 * - values - 슬라이더의 **현재 값 배열** (두 개의 숫자로 구성)
 * - onChange - 슬라이더 값이 변경될 때 호출되는 **함수**
 * - width - 슬라이더의 너비 (기본값: '200px')
 * - min - 슬라이더의 최솟값
 * - max - 슬라이더의 최댓값
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
  ...rest
}: {
  values: [number, number];
  onChange?: (sliderValue: [number, number]) => void;
  width?: string;
  min?: number;
  max?: number;
  [key: string]: any;
}): JSX.Element {
  return (
    <div style={{ width }}>
      <ReactSlider
        className="relative h-[6px] w-full rounded-full bg-gray-100"
        trackClassName="bg-gray-100 h-full border border-gray-300 rounded-full"
        value={values}
        onChange={onChange}
        min={min}
        max={max}
        {...rest}
        renderThumb={(props) => (
          <div
            {...props}
            className="absolute top-[50%] h-[20px] w-[20px] -translate-y-1/2 transform cursor-pointer rounded-full border-[1px] border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        )}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`${
              state.index === 1 ? 'bg-purple-100' : 'bg-gray-100'
            } h-[6px] cursor-pointer rounded-full hover:cursor-pointer`}
          />
        )}
      />
    </div>
  );
}
