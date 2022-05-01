import { FC } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field } from 'formik';

type TextInputProps = {
  id: string;
  isRequired?: boolean;
  label: string;
  name: string;
};

const TextInput: FC<TextInputProps> = ({ id, isRequired = false, label, name }) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl id={id} isRequired={isRequired}>
          <FormLabel>{label}</FormLabel>
          <Input {...field} type='text' />
        </FormControl>
      )}
    </Field>
  );
};

export default TextInput;
