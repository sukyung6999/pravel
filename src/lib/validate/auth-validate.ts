import { ERROR_MESSAGE, PLACEHOLDER } from '../const/auth-message';

export const validateId = (id: string = '') => {
  if (!id.trim()) {
    return ERROR_MESSAGE.required.email;
  }

  if (id.includes(' ')) {
    return ERROR_MESSAGE.empty;
  }

  if (!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/g.test(id)) {
    return ERROR_MESSAGE.reg.email;
  }

  return true;
};

export const validateNickname = (nickname: string = '') => {
  if (!nickname.trim()) {
    return ERROR_MESSAGE.required.nickname;
  }

  if (nickname.includes(' ')) {
    return ERROR_MESSAGE.empty;
  }

  if (!/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/g.test(nickname)) {
    return ERROR_MESSAGE.reg.nickname;
  }

  return true;
};

export const validatePasswordByType = (
  password: string = '',
  type: keyof typeof PLACEHOLDER = 'password',
) => {
  if (!password.trim()) {
    return ERROR_MESSAGE.required[type];
  }

  if (!/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g.test(password)) {
    return ERROR_MESSAGE.reg[type];
  }

  return true;
};

export const validatePassword = (password: string = '') => {
  return validatePasswordByType(password, 'password');
};

export const validatePasswordConfirm = (password: string = '') => {
  return validatePasswordByType(password, 'passwordConfirm');
};
