import * as yup from 'yup';

export const expertStoryValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  sales_manager_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
