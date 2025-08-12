import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h2>
          <span>Aqui você encontra</span>
          <span>Os melhores</span>
          <span>Lançamentos de filmes...</span>
        </h2>
      </div>
    </header>
  );
}
