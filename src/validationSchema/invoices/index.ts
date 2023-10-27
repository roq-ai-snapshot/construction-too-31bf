import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  total_amount: yup.number().integer().required(),
  payment_status: yup.string().required(),
  rental_id: yup.string().nullable().required(),
});
