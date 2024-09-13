import FilterIcon from '@/assets/icons/iconFilter.svg';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type FilteringOpenButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function FilteringOpenButton({
  className,
  ...props
}: FilteringOpenButtonProps) {
  return (
    <button
      className={clsx(
        'h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white opacity-80 hover:bg-gray-100 active:bg-gray-200',
        className
      )}
      type="button"
      aria-label="필터 열기"
      {...props}
    >
      <FilterIcon className="relative h-[26px] w-[26px]" />
    </button>
  );
}
