import Form from "../form";
import styles from "./login.module.scss";
import Modal from "../modal";
import { useActionState } from "react";
import { formDataToObject } from "@/utils/form-data-to-object";
import { login } from "@/app/actions/auth/login";
import { ValidationErrors } from "@/types";

export type LoginProps = {
  onClose: () => void;
  onRedirect: () => void;
};

type UserFormData = {
  email: string;
  password: string;
};

export type UserFields = "email" | "password";

type InitialState = {
  data: ValidationErrors<UserFields> | null;
  state: Omit<UserFormData, "password"> | null;
};

export default function Login({ onClose, onRedirect }: LoginProps) {
  const handleFormAction = async (
    prevState: InitialState,
    formData: FormData
  ): Promise<InitialState> => {
    const { email, password } = formDataToObject<UserFormData>(formData);

    const data = await login({
      data: {
        email,
        password,
      },
    });

    return {
      data,
      state: { email },
    };
  };

  const initialState: InitialState = {
    data: null,
    state: null,
  };

  const [formData, formAction, isPending] = useActionState(
    handleFormAction,
    initialState
  );

  const email = formData.state?.email;
  const errors = formData.data?.errors;
  const message = formData.data?.message;

  return (
    <Modal onClose={onClose}>
      <Form action={formAction} onClick={(e) => e.stopPropagation()}>
        {/* Error */}
        {message && <span className={styles.message}>{message}</span>}

        <fieldset className={styles.email}>
          <legend>Email</legend>
          <label>
            <input type="email" name="email" defaultValue={email} />
            {/* Icon */}
            <span />
          </label>
          {errors?.email && <span>{errors.email}</span>}
        </fieldset>

        <fieldset className={styles.password}>
          <legend>Senha</legend>
          <label>
            <input type="password" name="password" />
            {/* Icon */}
            <span />
          </label>
          {errors?.password && <span>{errors.password}</span>}
        </fieldset>

        <span className={styles.redirect}>
          Ainda não tem uma conta?
          <button onClick={onRedirect}>Cadastre-se</button>
        </span>

        <button disabled={isPending} className={styles.btn_login}>
          Login
        </button>
      </Form>
    </Modal>
  );
}
