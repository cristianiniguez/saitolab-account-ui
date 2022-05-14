import { FC } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

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
  const [field] = useField(name);

  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input {...field} type='email' />
    </FormControl>
  );
};

export default EmailInput;
