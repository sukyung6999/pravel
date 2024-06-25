'use clielnt';

import { Control, FieldValues, Path } from 'react-hook-form';
import AuthFormItem from '../AuthFormItem';
import ControlInput from '../ControlInput';
import { ERROR_MESSAGE, PLACEHOLDER } from '@/lib/const/auth-message';

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T, any>;
  validate?: (value: string) => string | undefined;
}

type Placeholder = keyof typeof PLACEHOLDER;

const PasswordInput = <T extends FieldValues>({
  name,
  control,
  validate,
}: Props<T>) => (
  <AuthFormItem control={control} name={name}>
    <ControlInput
      name={name}
      control={control}
      placeholder={PLACEHOLDER[name as Placeholder]}
      type="password"
      rules={{
        validate: (value) => {
          if (!value.trim()) {
            return ERROR_MESSAGE.required[name as Placeholder];
          }

          if (
            !/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g.test(value)
          ) {
            return ERROR_MESSAGE.reg[name as Placeholder];
          }

          return validate?.(value);
        },
      }}
    />
  </AuthFormItem>
);

export default PasswordInput;
