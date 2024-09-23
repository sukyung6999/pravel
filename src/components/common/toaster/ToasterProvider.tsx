import { cookies } from 'next/headers';

import Toaster, { MessageType } from './Toaster';

interface SetToastParams {
  type: MessageType;
  message: string;
}

export const setToast = (value: SetToastParams) => {
  cookies().set('toast', JSON.stringify(value), {
    path: '/',
    expires: new Date(Date.now() + 1000),
  });
};

const ToasterProvider = () => {
  try {
    const toast = JSON.parse(
      cookies().get('toast')?.value || '',
    ) as SetToastParams;

    return <Toaster time={new Date().getTime()} {...toast} />;
  } catch {
    return null;
  }
};

export default ToasterProvider;
