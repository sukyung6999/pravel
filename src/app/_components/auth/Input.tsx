'use client';

import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement>((props: React.InputHTMLAttributes<HTMLInputElement>, ref) => {
  return <input ref={ref} className="" {...props} />
});

export default Input;
