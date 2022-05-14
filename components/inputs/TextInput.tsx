import { FC } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

type TextInputProps = {
  id: string;
  isRequired?: boolean;
  label: string;
  name: string;
};

const TextInput: FC<TextInputProps> = ({ id, isRequired = false, label, name }) => {
  const [field] = useField(name);

  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input {...field} type='text' />
    </FormControl>
  );
};

export default TextInput;
