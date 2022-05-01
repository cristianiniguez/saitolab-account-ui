import { FC, useState } from 'react';
import {
  Button,
  Icon,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type PasswordInputProps = {
  id?: string;
  isRequired?: boolean;
  label: string;
  name?: string;
};

const PasswordInput: FC<PasswordInputProps> = ({
  id = 'password',
  isRequired = true,
  label,
  name = 'password',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl id={id} isRequired={isRequired}>
          <FormLabel>{label}</FormLabel>
          <InputGroup>
            <Input {...field} type={showPassword ? 'text' : 'password'} />
            <InputRightElement h='full'>
              <Button
                variant='ghost'
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                <Icon as={showPassword ? FiEye : FiEyeOff} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      )}
    </Field>
  );
};

export default PasswordInput;
