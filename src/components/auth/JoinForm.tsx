'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useDuplicateId, useJoin } from '@/hook/useAuth';
import { ERROR_MESSAGE, PLACEHOLDER } from '@/lib/const/auth-message';
import { JoinForm as JoinFormType } from '@/types/auth.type';

import Button from '../button/Button';
import InputForm from '../form/InputForm';

import PasswordInput from './input/PasswordInput';
import AuthFormItem from './AuthFormItem';
import ControlInput from './ControlInput';

const data: JoinFormType = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const JoinForm = () => {
  const router = useRouter();
  const join = useJoin();
  const duplicateId = useDuplicateId();

  const [checkId, setCheckId] = useState(false);

  const onSubmit = useCallback(
    async (form: JoinFormType) => {
      try {
        if (!checkId) {
          alert(ERROR_MESSAGE.checkId);
          return;
        }

        await join.mutateAsync(form);
        router.push('/login');
      } catch {}
    },
    [checkId, join, router],
  );

  const onDuplicateId = async (email: string) => {
    try {
      await duplicateId.mutateAsync(email);
      setCheckId(true);
    } catch {
      setCheckId(false);
    }
  };

  return (
    <InputForm
      data={data}
      buttons={
        <Button className="disabled:opacity-50" type="submit">
          회원가입
        </Button>
      }
      render={(control) => (
        <>
          <AuthFormItem control={control} name="email">
            <div className="flex gap-2">
              <ControlInput
                name="email"
                control={control}
                placeholder={PLACEHOLDER.email}
                rules={{
                  validate: (value) => {
                    if (!value.trim()) {
                      return ERROR_MESSAGE.required.email;
                    }

                    if (value.includes(' ')) {
                      return ERROR_MESSAGE.empty;
                    }

                    if (
                      !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/g.test(
                        value,
                      )
                    ) {
                      return ERROR_MESSAGE.reg.email;
                    }

                    return undefined;
                  },
                }}
              />
              <Button
                type="button"
                className="w-1/3"
                onClick={() => onDuplicateId(control._formValues.email)}
              >
                중복확인
              </Button>
            </div>
          </AuthFormItem>

          <PasswordInput
            control={control}
            name="password"
            validate={(value) => {
              const { passwordConfirm } = control._formValues;

              if (passwordConfirm && value !== passwordConfirm) {
                control.setError('passwordConfirm', {
                  type: 'reg',
                  message: ERROR_MESSAGE.reg.passwordConfirm,
                });
              }

              return undefined;
            }}
          />
          <PasswordInput
            control={control}
            name="passwordConfirm"
            validate={(value) => {
              if (value !== control._formValues.password) {
                return ERROR_MESSAGE.reg.passwordConfirm;
              }

              return undefined;
            }}
          />
        </>
      )}
      onSubmit={onSubmit}
    />
  );
};

export default JoinForm;
