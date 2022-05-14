import { FC } from 'react';
import {
  Button,
  Icon,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Input,
  useBoolean,
} from '@chakra-ui/react';
import { useField } from 'formik';
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
  const [field] = useField(name);
  const [showPassword, setShowPassword] = useBoolean();

  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input {...field} type={showPassword ? 'text' : 'password'} />
        <InputRightElement h='full'>
          <Button variant='ghost' onClick={setShowPassword.toggle}>
            <Icon as={showPassword ? FiEye : FiEyeOff} />
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default PasswordInput;
