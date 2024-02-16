import { object, string } from 'yup';

export const createArtcileScheme = object().shape({
  title: string().min(10).max(40).uppercase().required(),
  description: string().required(),
  cover_image: string().required(),
  content: string().required(),
  section: string().required(),
});
