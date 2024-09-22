'use client';

import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>(
  (props: React.InputHTMLAttributes<HTMLInputElement>, ref) => {
    return (
      <input
        ref={ref}
        className="text-sm w-full flex-1 h-[56px] border-b-2 border-b-gray-300 outline-none focus:border-[#a1a1a1] transition-all duration-300"
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
