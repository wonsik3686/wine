'use client';

import React from 'react';
import ReactSlider from 'react-slider';

/**
 * ### 슬라이더 컴포넌트
 *
 * - value - 슬라이더의 **현재 값** (0에서 100 사이의 숫자)
 * - mode - 슬라이더 모드 (기본값: 'interactive') ('interactive'는 유저가 값을 조정 가능, 'readonly'는 조정 불가)
 * - onChange - 슬라이더 값이 변경될 때 호출되는 **함수**
 * - width - 슬라이더의 너비 (기본값: '200px')
 */
export default function Slider({
  value = 50,
  mode = 'interactive',
  onChange,
  width = '200px',
}: {
  value: number;
  mode: 'interactive' | 'readonly';
  onChange?: (value: number) => void;
  width?: string;
}): JSX.Element {
  return (
    <div style={{ width }}>
      <ReactSlider
        className="relative w-full h-[6px] bg-gray-200 rounded-full"
        thumbClassName={`absolute top-1/2 transform -translate-y-1/2 h-[16px] w-[16px] bg-purple-100 rounded-full cursor-pointer focus:outline-none ${
          mode === 'interactive'
            ? 'focus:outline-none focus:ring-2 focus:ring-purple-300'
            : ''
        }`}
        trackClassName="bg-gray-100 h-full border border-gray-300 rounded-full"
        value={value}
        onChange={onChange}
        disabled={mode === 'readonly'}
        renderThumb={(props) => <div {...props}></div>}
        min={0}
        max={100}
      />
    </div>
  );
}
