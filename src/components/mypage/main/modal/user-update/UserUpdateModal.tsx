'use client';

import { useFormState } from 'react-dom';
import Image, { ImageLoader } from 'next/image';

import { updateUserAction } from '@/lib/actions/auth-action';
import { User } from '@/types/auth.type';

import CancelButton from '../CancelButton';
import ConfirmButton from '../ConfirmButton';
import LabelInput from '../input/LabelInput';
import ModalContainer from '../ModalContainer';

import Profile from './Profile';

interface UserUpdateModalProps extends Omit<User, 'password'> {}

const UserUpdateModal = ({
  nickname,
  email,
  profileImg,
}: UserUpdateModalProps) => {
  const [error, updateAction] = useFormState(updateUserAction, '');

  return (
    <ModalContainer title="프로필 / 닉네임 수정">
      <form action={updateAction}>
        <div className="px-8 pb-9">
          <Profile image={profileImg} />
          <p className="mt-[25px] font-semibold text-[14px] text-center text-gray-700">
            {email}
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
