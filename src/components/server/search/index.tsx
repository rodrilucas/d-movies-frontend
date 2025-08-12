import { HTMLAttributes } from "react";
import Button from "../button";
import styles from "./search.module.scss";

type SearchProps = HTMLAttributes<HTMLFormElement>;

export default function Search({ ...rest }: SearchProps) {
  return (
    <form className={styles.search} {...rest}>
      <fieldset>
        <legend>Buscar por nome do filme</legend>
        <label>
          <input
            type="text"
            name="query"
            placeholder="Digite o nome do filme..."
          />
          <span></span>
        </label>
      </fieldset>

      <Button>Buscar</Button>
    </form>
  );
}
