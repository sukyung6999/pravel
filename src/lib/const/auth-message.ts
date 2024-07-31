export enum PLACEHOLDER {
  email = '아이디를 입력해주세요.',
  nickname = '닉네임을 입력해주세요.',
  password = '비밀번호를 입력해주세요.',
  passwordConfirm = '비밀번호를 한번 더 입력해주세요.',
}

export const ERROR_MESSAGE = {
  required: {
    email: PLACEHOLDER.email,
    nickname: PLACEHOLDER.nickname,
    password: PLACEHOLDER.password,
    passwordConfirm: PLACEHOLDER.passwordConfirm,
  },
  empty: '공백은 입력할 수 없습니다.',
  reg: {
    email: '이메일 형식이 올바르지 않습니다.',
    nickname: '닉네임 형식이 올바르지 않습니다.',
    password: '영문, 숫자, 특수문자 1개 이상을 포함한 8자 이상',
    passwordConfirm: '비밀번호가 일치하지 않습니다.',
  },
  checkId: '아이디 중복확인을 해주세요.',
};
