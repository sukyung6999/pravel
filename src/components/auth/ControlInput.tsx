'use client';

import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import Input from './Input';

interface ControlInputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: UseControllerProps<T>['control'];
  name: UseControllerProps<T>['name'];
  rules?: UseControllerProps<T>['rules'];
  label: string;
}

const ControlInput = <T extends FieldValues>({
  name,
  control,
  rules,
  label,
  ...props
}: ControlInputProps<T>) => {
  const { field } = useController({ name, control, rules });

  return (
    <>
      <label className="block text-left font-bold text-[14px] text-gray-900 w-full">
        {label}
      </label>
      <Input {...field} {...props} />
    </>
  );
};

export default ControlInput;
