'use client';

import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.css';

type Option = {
  label: string;
  value: string | number;
};

type DropdownProps = {
  /**
   * 드롭다운에 표시되는 옵션 목록
   * @example [{ label: 'Red', value: 'red' }, { label: 'White', value: 'white' }]
   */
  options: Option[];

  /**
   * 각 옵션을 클릭했을 때 실행되는 액션.
   * 선택한 옵션의 값이 이 함수에 전달됩니다.
   * @param value 선택된 옵션의 값
   * @example (value) => console.log(value);
   */
  onSelect: (value: string | number) => void;

  /**
   * 드롭다운의 유형을 지정
   * - 'action': 프로필 사진이나 케밥 버튼을 눌렀을 때의 드롭다운
   * - 'select': 와인 등록하는 모달에서 와인 타입을 고르는 드롭다운
   */
  type: 'action' | 'select';

  /**
   * 드롭다운이 닫혀있을 때 표시할 컴포넌트
   * (action 타입에만 사용됨)
   * @example <button>More Actions</button>
   */
  trigger?: ReactNode;

  /**
   * 드롭다운이 닫혀있을 때 표시할 초기 텍스트
   * (select 타입에만 사용됨)
   * @example 'Select a wine type'
   */
  initialLabel?: string;

  /**
   * 드롭다운 컴포넌트의 너비를 설정
   * 기본값은 짧은 버전의 너비
   * @example 200
   */
  width?: string;

  /**
   * 드롭다운 컴포넌트 전체에 적용할 커스텀 스타일
   * @example 'bg-gray-100 border border-gray-300'
   */
  dropdownClassName?: string;

  /**
   * 옵션 버튼에 적용할 커스텀 스타일
   * @example 'text-blue-700 hover:bg-blue-200'
   */
  optionClassName?: string;
};

/**
 * ## 드롭다운 로직
 * 1. **드롭다운을 누르기 전**:
 *   - 각 타입에 맞게 `trigger`나 `initialLabel`을 표시
 *
 * 2. **드롭다운을 누른 후**:
 *   - `options`로 전달한 값들을 표시
 *   - `width`나 `dropdownClassName`, `optionClassName`을 적용할 경우 커스텀 스타일이 적용
 *
 * 3. **각 옵션을 눌렀을 때**:
 *   - `handleSelect` 함수가 실행되며 `onSelect` prop으로 넘겨준 콜백이 호출
 *   - **action 타입**: 드롭다운이 닫히며 추가 동작(이동, 모달 열기 등)이 발생
 *   - **select 타입**: 선택한 값이 드롭다운에 표시되며 드롭다운이 닫힘
 * 
 * @example   const options1 = [
  { label: 'Red', value: 'red' },
  { label: 'White', value: 'white' },
  { label: 'Sparkling', value: 'sparkling' },
];

const options2 = [
  { label: '수정하기', value: 'edit' },
  { label: '삭제하기', value: 'delete' },
];

const handleSelect = (value: string | number) => {
  console.log(`Selected value: ${value}`);
  // 여기에 원하는 액션을 추가
};

<Dropdown
        options={options1}
        onSelect={handleSelect}
        type="select"
        width={368} // 커스텀 너비
        initialLabel="Red" // 초기 레이블 설정
      />

       <Dropdown
        options={options2}
        onSelect={handleSelect}
        type="action"
        trigger={<span className="cursor-pointer">O</span>}
        optionClassName="text-center" // 옵션 항목의 스타일
      />
 */
function Dropdown({
  options,
  onSelect,
  type,
  trigger,
  initialLabel,
  width = '100%',
  dropdownClassName,
  optionClassName,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    initialLabel
  );
  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  // 클릭 외부 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // 전역 클릭 이벤트 리스너 등록
    document.addEventListener('mousedown', handleClickOutside);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: Option) => {
    onSelect(option.value);
    setSelectedLabel(option.label);
    setIsOpen(false);
  };

  return (
    <button
      className="relative block text-left"
      ref={dropdownRef}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      style={{ width }}
    >
      {type === 'action' ? (
        trigger
      ) : (
        <div
          className={`flex w-full cursor-pointer items-center rounded-[16px] border px-4 py-2 ${dropdownClassName} bg-white font-medium text-gray-700 ring-1 ring-gray-300`}
          style={{ width }}
        >
          <span className={`flex-1 ${isOpen ? 'text-gray-300' : ''}`}>
            {selectedLabel || 'Select'}
          </span>
          <span className="ml-2">
            {isOpen ? (
              <Image
                width={24}
                height={24}
                src="/dropdown_arrow_up.png"
                alt="위 방향 화살표"
              />
            ) : (
              <Image
                width={24}
                height={24}
                src="/dropdown_arrow_down.png"
                alt="아래 방향 화살표"
              />
            )}
          </span>
        </div>
      )}

      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-full rounded-[16px] bg-white px-2 ring-1 ring-gray-300 ${dropdownClassName} ${styles.fadeInDown}`}
          style={{ width }}
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handleSelect(option)}
                className={`block w-full px-6 py-2 text-left text-lg font-medium text-gray-800 hover:bg-purple-10 hover:text-purple-100 ${optionClassName}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </button>
  );
}

export default Dropdown;
