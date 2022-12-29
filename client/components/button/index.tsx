import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  children: React.ReactNode,
  variant?: "stroke" | "fill"
}
const Button: React.FC<ButtonProps> = ({ children, variant = "stroke", ...rest }) => {
  return <button {...rest} className={styles.container}>
    {children}
  </button>
};

export default Button;