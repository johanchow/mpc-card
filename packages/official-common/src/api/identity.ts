import axios from 'axios';

const getVerifyCode = async (data: Record<string, string>) => {
  console.log('start verify code: ', data);
  const resp = await axios.post('//api.onlycoin.cc/SendEmail', {
    data: {
      email: data.email,
    }
  });
  console.log('SendEmail resp: ', resp);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

const login = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

const registerEmail = async () => {
};

export {
  getVerifyCode,
  login,
  registerEmail,
};
