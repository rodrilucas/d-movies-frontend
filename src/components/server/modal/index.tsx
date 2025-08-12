import styles from "./modal.module.scss";

export type LoginProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ children, onClose }: LoginProps) {
  return (
    <div onClick={onClose} className={styles.modal}>
      {children}
    </div>
  );
}
