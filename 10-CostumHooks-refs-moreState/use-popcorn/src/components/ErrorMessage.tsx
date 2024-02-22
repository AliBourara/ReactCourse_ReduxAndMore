interface ErrorMessageViewProp {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageViewProp) => {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
};

export default ErrorMessage;
