import { IInputGroup } from './InputGroup';

const base: IInputGroup = {
  label: 'Password',
  isRequired: true,
  fieldProps: {
    placeholder: 'Password',
    type: 'password',
  },
};

export const mockInputGroupProps = {
  base,
};
