import * as yup from 'yup';

export const ContactFormValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Minimum 3 letters')
    .required('Name Cannot be empty'),
  email: yup.string().email('Invalid Email').required('Email Cannot be empty'),
  subject: yup
    .string()
    .min(10, 'Minimum 10 letters')
    .max(30, 'Can not exceed 30 letters')
    .required('Subject is required'),
  message: yup
    .string()
    .min(20, 'Minimum 20 letters')
    .max(100, 'Can not exceed 100 letters')
    .required('Message is required'),
});
