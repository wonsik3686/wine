'use client';

import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type ChipProps = {
  label: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isDisabled?: boolean;
};

function Chip({ label, selected, onClick, isDisabled }: ChipProps) {
  return (
    <div
      className={clsx(
        'px-[10px] py-[6px] w-[fit-content] h-[36px] ring-1 ring-gray-300 rounded-full text-md font-medium sm:h-[42px] sm:px-[15px] sm:py-[8px] sm:text-lg',
        {
          'bg-purple-100 text-white': selected,
          'cursor-pointer': !isDisabled,
          'cursor-default': isDisabled,
        }
      )}
      onClick={!isDisabled ? onClick : undefined}
    >
      {label}
    </div>
  );
}

export default Chip;
