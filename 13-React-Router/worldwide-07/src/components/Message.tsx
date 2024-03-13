import styles from "./Message.module.css";

interface MessageViewProps {
  message: string;
}

function Message({ message }: MessageViewProps) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
