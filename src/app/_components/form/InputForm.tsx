'use client';

import React from "react";
import { UseFormSetError, useForm } from "react-hook-form";
import { DefaultValues, FieldValues, Control } from "react-hook-form";

interface InputFormProps<T extends FieldValues> {
  data: T;
  buttons: React.ReactNode;
  render: (control: Control<T, any>) => React.ReactNode;
  onSubmit: (data: T) => void;
}

const InputForm = <T extends FieldValues>({ 
  data,
  buttons,
  render, 
  onSubmit 
}: InputFormProps<T>) => {
  const {
    control,
    handleSubmit,
  } = useForm<T>({
    defaultValues: data as DefaultValues<T>,
    mode: 'onChange'
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-fields">
        {render(control)}
      </div>
      <div className="form-buttons">
        {buttons}
      </div>
    </form>
  )
};

export default InputForm;
