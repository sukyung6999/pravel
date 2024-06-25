'use client';

import { FieldValues, UseControllerProps, useController } from "react-hook-form";
import Input from "./Input";

interface ControlInputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement>{
  control: UseControllerProps<T>['control'];
  name: UseControllerProps<T>['name'];
  rules?: UseControllerProps<T>['rules'];
};

const ControlInput = <T extends FieldValues>({ 
  name, 
  control,
  rules,
  ...props
}: ControlInputProps<T>) => {
  const { field } = useController({ name, control, rules });
  return <Input {...field} {...props} />
};

export default ControlInput;
