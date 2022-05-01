import { FC } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'formik';

type EmailInputProps = {
  id?: string;
  isRequired?: boolean;
  label: string;
  name?: string;
};

const EmailInput: FC<EmailInputProps> = ({
  id = 'email',
  isRequired = false,
  label,
  name = 'email',
}) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl id={id} isRequired={isRequired}>
          <FormLabel>{label}</FormLabel>
          <Input {...field} type='email' />
        </FormControl>
      )}
    </Field>
  );
};

export default EmailInput;
