import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { Input, type InputProps } from '@components/ui/Input';

type FormFieldProps<TForm extends FieldValues> = Omit<InputProps, 'name'> & {
  name: FieldPath<TForm>;
  control: Control<TForm>;
};

export function FormField<TForm extends FieldValues>({
  name,
  control,
  ...rest
}: FormFieldProps<TForm>) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <Input {...field} {...rest} error={error?.message} />;
}
