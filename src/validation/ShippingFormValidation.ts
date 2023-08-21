import * as yup from 'yup';

export const ShippingFormValidation = yup.object().shape({
  email: yup.string().email('Invalid Email'),
  phone: yup
    .string()
    .min(10, 'phone number can not be less than 10 numbers')
    .max(12, 'phone number can not exceed 12 numbers')
    .required('Phone Number is Required'),
  firstName: yup
    .string()
    .min(3, 'minimum 3 characters')
    .max(15, 'maximum 15 characters')
    .required('first name is required'),
  lastName: yup
    .string()
    .min(3, 'minimum 3 characters')
    .max(15, 'maximum 15 characters')
    .required('last name is required'),
  address: yup
    .string()
    .min(15, 'minimum 15 characters')
    .required('address is required'),
  appartment: yup.string(),
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
});
