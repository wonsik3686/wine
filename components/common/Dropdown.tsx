'use client';
import Image from 'next/image';
import { useState, ReactNode, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string | number) => void;
  type: 'action' | 'select';
  trigger?: ReactNode;
  initialLabel?: string;
  width?: number;
  dropdownClassName?: string;
  optionClassName?: string;
}

function Dropdown({
  options,
  onSelect,
  type,
  trigger,
  initialLabel,
  width = 126,
  dropdownClassName,
  optionClassName,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    initialLabel
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {type === 'action' ? (
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      ) : (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center cursor-pointer border rounded-[16px] px-4 py-2 ${dropdownClassName} text-gray-700 font-medium bg-white ring-1 ring-gray-300`}
          style={{ width: `${width}px` }}
        >
          <span className={`flex-1 ${isOpen ? 'text-gray-300' : ''}`}>
            {selectedLabel || initialLabel || 'Select'}
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
          className={`absolute mt-2 rounded-[16px] bg-white ring-1 ring-gray-300 ${dropdownClassName} ${styles.fadeInDown}`}
          style={{ width: `${width}px` }}
        >
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className={`block rounded-[10px] mx-auto my-[4px] px-4 py-2 font-medium text-left text-lg text-gray-800 hover:bg-purple-10 hover:text-purple-100 ${optionClassName}`}
                style={{ width: `calc(${width}px - 8px)` }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
