'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  buttonStyle: 'box' | 'floating';
  buttonWidth: 'fitToChildren' | 'fitToParent';
  buttonColor: 'purple' | 'white';
  textColor: 'white' | 'gray' | 'black';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  buttonStyle,
  buttonWidth,
  buttonColor,
  textColor,
  ...buttonAttributes
}: ButtonProps) {
  return (
    <button
      className={clsx({
        // buttonStyle
        'inline-flex items-center justify-center gap-3 rounded-2xl px-5 py-4 font-sans text-lg font-semibold':
          buttonStyle === 'box',
        'inline-flex items-center justify-center gap-3 rounded-full px-24 py-4 font-sans text-lg font-semibold':
          buttonStyle === 'floating',
        // buttonWidth
        'flex w-full': buttonWidth === 'fitToParent',
        // buttonColor
        'bg-purple-100 hover:bg-purple-800 active:bg-purple-900':
          buttonColor === 'purple',
        'border-[1px] border-solid border-gray-300 bg-white hover:bg-gray-50 active:bg-gray-100':
          buttonColor === 'white',
        // textColor
        'text-white': textColor === 'white',
        'text-gray-500': textColor === 'gray',
        'text-gray-800': textColor === 'black',
      })}
      {...buttonAttributes}
    />
  );
}

export default Button;
