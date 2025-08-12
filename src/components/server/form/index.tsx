import { FormHTMLAttributes } from "react";
import styles from "./form.module.scss";

export type LoginProps = {
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export default function Form({ children, ...rest }: LoginProps) {
  return (
    <form {...rest} className={styles.form}>
      {children}
    </form>
  );
}
