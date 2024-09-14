'use clielnt';

import { Control, FieldValues, Path } from 'react-hook-form';

import { PLACEHOLDER } from '@/lib/const/auth-message';
import { validatePassword } from '@/lib/validate/auth-validate';

import AuthFormItem from '../AuthFormItem';
import ControlInput from '../ControlInput';

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T, unknown>;
  validate?: (value: string) => string | undefined;
}

type Placeholder = keyof typeof PLACEHOLDER;

const label = {
  email: '아이디(이메일)',
  nickname: '닉네임',
  password: '비밀번호',
  passwordConfirm: '비밀번호 확인',
};

const PasswordInput = <T extends FieldValues>({
  name,
  control,
  validate,
}: Props<T>) => (
  <AuthFormItem control={control} name={name}>
    <ControlInput
      label={label[name as Placeholder]}
      name={name}
      control={control}
      placeholder={PLACEHOLDER[name as Placeholder]}
      type="password"
      rules={{
        validate: (value) => {
          const result = validatePassword(value, name as Placeholder);

          if (typeof result !== 'boolean') return result;

          return validate?.(value);
        },
      }}
    />
  </AuthFormItem>
);

export default PasswordInput;
