import styles from "./navigation.module.scss";
import Link from "next/link";
import LoginButton from "../../client/auth/login";
import Avatar from "../avatar";
import { getAuthStatus } from "@/app/actions/auth/status/get-auth-status";
import { LogoutButton } from "../../client/auth/logout";
import { SearchMovies } from "../../client/search";
import { ActiveLink } from "@/components/client/active-link";

export default async function Navigation() {
  const isLoggedIn = await getAuthStatus();

  let button: React.JSX.Element;

  if (isLoggedIn) {
    button = <LogoutButton />;
  } else {
    button = <LoginButton />;
  }

  return (
    <nav className={styles.navigation}>
      <Link className={styles.principal} href="/">
        D'movies
      </Link>
      <div className={styles.links}>
        <ActiveLink to="/">Início</ActiveLink>
        <ActiveLink to="/movies">Filmes</ActiveLink>
        <SearchMovies />
      </div>
      <div className={styles.logged_in}>
        {isLoggedIn && <Avatar />}
        {button}
      </div>
    </nav>
  );
}
