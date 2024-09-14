import ErrorMessage from '@/components/common/message/ErrorMessage';

interface LabelInputProps {
  label: string;
  placeholder: string;
  value?: string;
  name: string;
  type?: string;
  className?: string;
  error?: string;
}

const LabelInput = ({
  label,
  placeholder,
  name,
  className = '',
  type = 'text',
  value,
  error,
}: LabelInputProps) => {
  return (
    <div className={`flex flex-col gap-[15px]${className && ` ${className}`}`}>
      <label htmlFor={name} className="font-semibold text-[12px] text-gray-600">
        {label}
      </label>
      <div className="w-full flex flex-col">
        <input
          type={type}
          id={name}
          name={name}
          className="h-[27px] outline-none border-b-gray-200 border-b-[1px] pb-2 font-semibold text-gray-900 placeholder-gray-400"
          placeholder={placeholder}
          defaultValue={value}
        />
        <ErrorMessage message={error} />
      </div>
    </div>
  );
};

export default LabelInput;
