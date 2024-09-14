'use client';

import { useFormState } from 'react-dom';

import { updatePasswordAction } from '@/lib/actions/auth-action';

import LabelInput from './input/LabelInput';
import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';
import ModalContainer from './ModalContainer';

const PasswordChangeModal = () => {
  const [error, updateAction] = useFormState(updatePasswordAction, {
    current: '',
    new: '',
  });

  return (
    <ModalContainer title="비밀번호 수정">
      <form action={updateAction}>
        <div className="px-8 pb-9 flex flex-col gap-[30px]">
          <LabelInput
            label="기존 비밀번호"
            placeholder="기존 비밀번호를 입력해주세요."
            name="password"
            type="password"
            error={error.current}
          />
          <LabelInput
            label="새 비밀번호"
            placeholder="새 비밀번호를 입력해주세요."
            name="new-password"
            type="password"
            error={error.new}
          />
        </div>
        <div className="flex">
          <CancelButton />
          <ConfirmButton />
        </div>
      </form>
    </ModalContainer>
  );
};

export default PasswordChangeModal;
