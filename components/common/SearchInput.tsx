'use client'
import { CommonTypes } from '@/types/common.types';
import Image from 'next/image';
import { forwardRef, InputHTMLAttributes } from 'react';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<Pick<CommonTypes, 'label' | 'errorMessage'>>;

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <div
          className={`inline-flex w-full shrink-0 flex-col items-start gap-3`}
        >
          <div className={`relative w-full`}>
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-5">
              <Image
                src={`/icons/iconSearch.svg`}
                alt="검색 아이콘"
                width={20}
                height={20}
              />
            </div>
            <input
              className={`flex w-full flex-shrink-0 items-center rounded-full border-[1px] border-gray-300 bg-white px-5 py-[0.88rem] pl-14 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-100`}
              ref={ref}
              {...props}
            />
          </div>
        </div>
      </>
    );
  }
);

export default SearchInput;
