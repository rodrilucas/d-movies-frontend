import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${styles.button} ${rest.isLoading ? styles.loading : ""}`}
    >
      {children}
    </button>
  );
}
