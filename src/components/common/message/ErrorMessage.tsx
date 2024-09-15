interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message = '' }: ErrorMessageProps) => {
  return (
    <div className="error mt-1 text-left text-sm text-[red]">{message}</div>
  );
};

export default ErrorMessage;
