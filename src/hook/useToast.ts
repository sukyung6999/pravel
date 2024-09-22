import { toast, TypeOptions } from 'react-toastify';

export const useToast = (message: string, type: TypeOptions = 'success') => {
  const start = () =>
    toast(message, {
      type,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      autoClose: 2000,
      hideProgressBar: true,
    });

  return {
    start,
  };
};
