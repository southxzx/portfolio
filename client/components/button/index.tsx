import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  children: React.ReactNode
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest} className={styles.container}>
    {children}
  </button>
};

export default Button;