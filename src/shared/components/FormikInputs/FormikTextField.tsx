import { useField } from 'formik';
import Input, { InputProps } from '../Input';

import type { FieldHookConfig } from 'formik';

type TextFieldProps = Pick<InputProps, 'label' | 'type'> & FieldHookConfig<string>;

export const FormikTextField = ({ label, ...props }: TextFieldProps) => {
  const [field, meta] = useField(props);

  return <Input label={label} {...field} {...meta} />;
};
