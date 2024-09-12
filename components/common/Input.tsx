'use client';

import { CommonTypes } from '@/types/common.types';
import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<Pick<CommonTypes, 'label' | 'errorMessage'>> & {
    wrapClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      wrapClassName,
      labelClassName,
      inputClassName,
      errorMessage,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex w-full flex-col gap-3 ${wrapClassName}`}>
        {label && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            className={`font-sans text-lg font-medium text-gray-800 ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <input
          className={`
            rounded-2xl
            ${errorMessage ? 'border-2 border-purple-100' : 'border-[1px] border-gray-300'}
            bg-white
            px-5
            py-[0.875rem]
            text-gray-800
            focus:outline-none
            focus:ring-2
            focus:ring-purple-100
            ${inputClassName}
            `}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <p className="ml-5 font-sans text-lg font-regular text-purple-100">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
