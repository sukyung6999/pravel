'use client';

import { Control, FieldValues, Path, useController } from 'react-hook-form';

import ErrorMessage from '../common/message/ErrorMessage';

interface AuthFormItemProps<T extends FieldValues> {
  label?: string;
  control: Control<T, unknown>;
  name: Path<T>;
  children: React.ReactNode;
}

const AuthFormItem = <T extends FieldValues>({
  label,
  name,
  control,
  children,
}: AuthFormItemProps<T>) => {
  const {
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="flex flex-col">
      <div className="form-item flex items-center">
        {label && <label>{label}</label>}
        <div className="flex-1">{children}</div>
      </div>
      {error?.message && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default AuthFormItem;
