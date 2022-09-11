import InputField, { IInputField } from '../input-field/InputField';

export interface IInputGroup {
  label: string;
  isRequired?: boolean;
  fieldProps?: IInputField;
}

const InputGroup: React.FC<IInputGroup> = ({
  label,
  isRequired = false,
  fieldProps,
}) => {
  return (
    <div className="flex flex-col p-3">
      <div className="flex flex-row gap-x-1 mb-1 items-center">
        <label className="text-md">{label}</label>
        {isRequired && <label className="text-red-500">*</label>}
      </div>
      <div className="w-full">
        <InputField {...fieldProps} />
      </div>
    </div>
  );
};

export default InputGroup;
