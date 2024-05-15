import axios from 'axios';

const getVerifyCode = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

const login = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

const registerEmail = async () => {
};

export {
  getVerifyCode,
  login,
  registerEmail,
};
