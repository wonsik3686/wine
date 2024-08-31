'use client';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  buttonStyle: 'box' | 'floating';
  buttonWidth: 'fitToChildren' | 'fitToParent';
  buttonColor: 'purple' | 'white';
  textColor: 'white' | 'gray' | 'black';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  buttonStyle = 'box',
  buttonWidth = 'fitToChildren',
  buttonColor = 'purple',
  textColor = 'white',
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={clsx({
          // buttonStyle
          [`inline-flex px-5 py-4 justify-center items-center rounded-2xl gap-3 font-sans font-semibold text-lg`]:
            buttonStyle === 'box',
          [`inline-flex px-24 py-4 justify-center items-center rounded-full gap-3 font-sans font-semibold text-lg`]:
            buttonStyle === 'floating',
          // buttonWidth
          [`flex w-full`]: buttonWidth === 'fitToParent',
          // buttonColor
          [`bg-purple-100 hover:bg-purple-800 active:bg-purple-900`]:
            buttonColor === 'purple',
          [`bg-white border-solid border-[1px] border-gray-300 hover:bg-gray-50 active:bg-gray-100`]:
            buttonColor === 'white',
          // textColor
          [`text-white`]: textColor === 'white',
          [`text-gray-500`]: textColor === 'gray',
          [`text-gray-800`]: textColor === 'black',
        })}
        {...props}
      />
    </>
  );
};

export default Button;
