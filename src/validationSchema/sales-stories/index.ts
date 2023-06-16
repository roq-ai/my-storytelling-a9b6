import * as yup from 'yup';

export const salesStoryValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  status: yup.string().required(),
  author_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
