import { FC } from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

type TextInputProps = {
  id: string;
  isRequired?: boolean;
  label: string;
  name: string;
};

const TextInput: FC<TextInputProps> = ({ id, isRequired = false, label, name }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl id={id} isInvalid={meta.touched && !!meta.error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input {...field} type='text' />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
