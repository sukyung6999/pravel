'use client';

import { useFormState } from 'react-dom';
import Image from 'next/image';

import { updateNicknameAction } from '@/lib/actions/auth-action';

import LabelInput from './input/LabelInput';
import CancelButton from './CancelButton';
import ConfirmButton from './ConfirmButton';
import ModalContainer from './ModalContainer';

interface UserUpdateModalProps {
  nickname: string;
}

const UserUpdateModal = ({ nickname }: UserUpdateModalProps) => {
  const [error, updateAction] = useFormState(updateNicknameAction, '');

  return (
    <ModalContainer title="프로필 / 닉네임 수정">
      <form action={updateAction}>
        <div className="px-8 pb-9">
          <div className="relative w-[126px] h-[126px] mx-auto">
            <Image src="/mypage/Ellipse 522.png" alt="profile" fill priority />
          </div>
          <p className="mt-[25px] font-semibold text-[14px] text-center text-gray-700">
            praveler@naver.com
          </p>
          <LabelInput
            className="mt-[25px]"
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            name="nickname"
            value={nickname}
            error={error}
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

export default UserUpdateModal;
