import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rent_start: yup.date().required(),
  rent_end: yup.date().required(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
