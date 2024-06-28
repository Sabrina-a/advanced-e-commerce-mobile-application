import * as yup from 'yup';

//==========================
//register new customer
//==========================
export const registerSchema = t => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .email(t('Invalid Email'))
      .required(t('Required*')),
    name: yup.string().trim().required(t('Required*')),
    phone: yup.string().trim().required(t('Required*')),
    password: yup.string().trim().required(t('Required*')),
    address: yup.object().shape({
      country: yup.string().trim().required(t('Required')),
      city: yup.string().trim().required(t('Required')),
      street: yup.string().trim().required(t('Required')),
    }),
  
  });
};

//==========================
//login new customer
//==========================
export const loginSchema = t => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .email(t('Invalid Email'))
      .required(t('Required*')),
    password: yup.string().trim().required(t('Required*')),
  });
};

//==========================
//Update UserInfo
//==========================
export const nameValidation = t => {
  return yup.object().shape({
    name: yup.string().trim().required(t('Required*')),
  });
};
export const emailValidation = t => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .email(t('Invalid Email'))
      .required(t('Required*')),
  });
};
export const passwordValidation = t => {
  return yup.object().shape({
    password: yup.string().trim().required(t('Required*')),
  });
};
export const phoneValidation = t => {
  return yup.object().shape({
    phone: yup.string().trim().required(t('Required*')),
  });
};

