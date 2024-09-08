'use client';

import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type ChipProps = {
  /**
   * 칩에 표시될 텍스트 라벨.
   */
  label: string;

  /**
   * 칩이 선택된 상태인지 여부를 나타냄.
   * - `true`: 칩이 선택된 상태. 보라색 배경
   * - `false`: 칩이 선택되지 않은 상태. 흰색 배경
   */
  selected?: boolean;

  /**
   * 칩이 클릭되었을 때 호출되는 함수.
   * 클릭 이벤트 핸들러로, 칩이 비활성화되지 않은 경우에만 호출.
   */
  onClick?: MouseEventHandler;

  /**
   * 칩이 비활성화된 상태인지 여부를 나타냅니다.
   * - `true`: 칩이 비활성화되어 클릭할 수 없음
   * - `false`: 칩이 활성화되어 있으며 클릭 가능
   */
  isDisabled: boolean;
};

/**
 * `Chip` 사용자 인터페이스에서 라벨을 가진 선택 가능한 요소
 * - `label`: 칩 내부에 표시될 텍스트.
 * - `selected` 상태에 따라 칩의 스타일이 변경
 * - `onClick` 핸들러를 통해 칩이 클릭되었을 때 동작을 정의할 수 있음
 * - `isDisabled`가 `true`일 경우, 칩은 클릭할 수 없고 비활성화된 상태로 표시
 *
 * @param {ChipProps} props - `Chip` 컴포넌트가 받는 props
 * @returns {JSX.Element} 렌더링된 칩 컴포넌트를 반환
 * @example import Chip from './Chip';

export default function TestComponent() {
  const TagList = { label: '체리' };
  return (
    <>
      <Chip
        label={TagList.label}
        selected
        onClick={() => console.log(`${TagList.label}`)}
      /> //selected는 클릭 핸들러에서 값을 바꿀 수 있도록 설정

      <Chip label={'Sparkling'} onClick={() => console.log('Sparkling')} />

      <Chip label={'오크'} isDisabled /> //readOnly 태그
    </>
  );
}

 */
function Chip({
  label,
  selected,
  onClick,
  isDisabled,
}: ChipProps): JSX.Element {
  return (
    <button
      className={clsx(
        'rounded-full bg-white px-3 py-2 text-sm font-medium ring-1 ring-gray-300 sm:px-4 sm:text-lg',
        {
          'cursor-pointer': !isDisabled,
          'cursor-default': isDisabled,
        }
      )}
      onClick={!isDisabled ? onClick : undefined}
      type="button"
      style={{
        backgroundColor: selected ? '#6A42DB' : 'transparent',
        color: selected ? 'white' : 'inherit',
      }}
    >
      {label}
    </button>
  );
}

export default Chip;
