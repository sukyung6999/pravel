'use client';

import React from "react";
import { DefaultValues, FieldValues, Control, useForm } from "react-hook-form";

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
    <form 
      className="w-full max-w-80 m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-fields flex flex-col gap-3">
        {render(control)}
      </div>
      <div className="form-buttons mt-5 flex flex-col gap-3">
        {buttons}
      </div>
    </form>
  )
};

export default InputForm;
