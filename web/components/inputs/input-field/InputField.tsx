export interface IInputField extends React.ComponentPropsWithoutRef<'input'> {}

const InputField: React.FC<IInputField> = ({ className, ...inputProps }) => {
  return (
    <input
      className={`${className} rounded-md border w-full h-8 px-3 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
      {...inputProps}
    />
  );
};

export default InputField;
