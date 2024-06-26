'use client';

import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>(
  (props: React.InputHTMLAttributes<HTMLInputElement>, ref) => {
    return (
      <input
        ref={ref}
        className="text-sm ps-3 w-full max-w-80 h-14 border-solid border-[1px] rounded-[4px] outline-none focus:border-[#a1a1a1] transition-all duration-300"
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
