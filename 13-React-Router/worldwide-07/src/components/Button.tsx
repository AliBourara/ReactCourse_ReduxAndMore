import styles from "./Button.module.css";

interface ButtonViewProp {
  children: any;
  onClick?: any;
  type: string;
}

function Button({ children, onClick, type }: ButtonViewProp) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </div>
  );
}

export default Button;
