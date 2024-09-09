'use client';

import { CommonTypes } from '@/types/common.types';
import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Partial<Pick<CommonTypes, 'label' | 'errorMessage'>> & {
    labelClassNames?: string;
    inputClassNames?: string;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, labelClassNames, inputClassNames, errorMessage, ...props },
    ref
  ) => {
    return (
      <div className="inline-flex w-full shrink-0 flex-col items-start gap-3">
        {label && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            className={`font-sans text-lg font-medium text-gray-800 ${labelClassNames}`}
          >
            {label}
          </label>
        )}
        <input
          className={`flex
            w-full
            flex-shrink-0
            items-center 
            rounded-2xl 
            ${errorMessage ? 'border-2 border-purple-100' : 'border-[1px] border-gray-300'} 
            bg-white 
            px-5 
            py-[0.88rem] 
            text-gray-800 
            focus:outline-none 
            focus:ring-2 
            focus:ring-purple-100
            ${inputClassNames}
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
