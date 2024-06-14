'use client';

import { useDuplicateId, useJoin } from "@/app/_hook/useAuth";
import { JoinForm as JoinFormType } from "@/app/_types/auth.type";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import InputForm from "../form/InputForm";
import Button from "../button/Button";
import AuthFormItem from "./AuthFormItem";
import ControlInput from "./ControlInput";
import PasswordInput from "./input/PasswordInput";
import { ERROR_MESSAGE, PLACEHOLDER } from "@/app/_lib/const/auth-message";

const data: JoinFormType = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const JoinForm = () => {
  const join = useJoin();  
  const duplicateId = useDuplicateId();  

  const [checkId, setCheckId] = useState(false);

  const onSubmit = useCallback(async (
    form: JoinFormType, 
  ) => {
    try {
      if (!checkId) {
        alert(ERROR_MESSAGE.checkId);
        return;
      }

      await join.mutateAsync(form);
      useRouter().push('/login');
    } catch {}
  }, []);

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
      buttons={<Button className="disabled:opacity-50" type="submit">회원가입</Button>}
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

                    if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g.test(value)) {
                      return ERROR_MESSAGE.reg.email;
                    }
                  }
                }}
              />
              <Button 
                type="button" 
                className="w-1/3"
                onClick={() => onDuplicateId(control._formValues.email)}
              >중복확인</Button>
            </div>
          </AuthFormItem>

          <PasswordInput
            control={control} 
            name="password"
            validate={(value) => {
              const { passwordConfirm } = control._formValues;

              if (passwordConfirm && value !== passwordConfirm) {
                control.setError('passwordConfirm', { type: 'reg', message: ERROR_MESSAGE.reg.passwordConfirm })
                return undefined;
              }
            }}
          />
          <PasswordInput 
            control={control} 
            name="passwordConfirm"
            validate={(value) => {
              if (value !== control._formValues.password) {
                return ERROR_MESSAGE.reg.passwordConfirm;
              }
            }}
          />
        </>
      )}
      onSubmit={onSubmit}
    />
  )
};

export default JoinForm;