'use client';

import React from 'react';
import { Control, DefaultValues, FieldValues, useForm } from 'react-hook-form';

interface InputFormProps<T extends FieldValues> {
  data: T;
  buttons: React.ReactNode;
  render: (control: Control<T, unknown>) => React.ReactNode;
  onSubmit: (data: T) => void;
}

const InputForm = <T extends FieldValues>({
  data,
  buttons,
  render,
  onSubmit,
}: InputFormProps<T>) => {
  const { control, handleSubmit } = useForm<T>({
    defaultValues: data as DefaultValues<T>,
    mode: 'onChange',
  });

  return (
    <form
      className="w-full mx-auto flex-1 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-fields flex flex-col gap-8 flex-1 px-4">
        {render(control)}
      </div>
      <div className="form-buttons mt-5 flex flex-col gap-3">{buttons}</div>
    </form>
  );
};

export default InputForm;
