import type { ValidationErrors } from "@/types";
import styles from "./register.module.scss";
import RegisterRedirect from "../../client/auth/register";
import Form from "../form";
import Modal from "../modal";
import { formDataToObject } from "@/utils/form-data-to-object";
import { useActionState } from "react";
import { register } from "@/app/actions/auth/register";

export type RegisterProps = {
  onClose: () => void;
};

export type UserFields = "firstName" | "lastName" | "email" | "password";

type UserFormData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

type InitialState = {
  data: ValidationErrors<UserFields> | null;
  state: Omit<UserFormData, "password"> | null;
};

export default function Register({ onClose }: RegisterProps) {
  const handleFormAction = async (
    prevState: InitialState,
    formData: FormData
  ): Promise<InitialState> => {
    const { name, surname, email, password } =
      formDataToObject<UserFormData>(formData);

    const data = await register({
      data: {
        firstName: name,
        lastName: surname,
        email,
        password,
      },
    });

    return {
      data,
      state: { name, surname, email },
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

  const errors = formData.data?.errors;
  const prevState = formData.state;

  return (
    <Modal onClose={onClose}>
      <Form action={formAction} onClick={(e) => e.stopPropagation()}>
        <div className={styles.person}>
          <fieldset className={styles.name}>
            <legend>Nome</legend>
            <label>
              <input type="text" name="name" defaultValue={prevState?.name} />
              {/* Icon */}
              <span />
            </label>
            {errors?.firstName && <span>{errors.firstName}</span>}
          </fieldset>

          <fieldset className={styles.surname}>
            <legend>Sobrenome</legend>
            <label>
              <input
                type="text"
                name="surname"
                defaultValue={prevState?.surname}
              />
              {/* Icon */}
              <span />
            </label>
            {errors?.lastName && <span>{errors.lastName}</span>}
          </fieldset>
        </div>

        <fieldset className={styles.email}>
          <legend>Email</legend>
          <label>
            <input type="email" name="email" defaultValue={prevState?.email} />
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

        <RegisterRedirect />

        <button
          disabled={isPending}
          type="submit"
          className={styles.btn_register}
        >
          Criar conta
        </button>
      </Form>
    </Modal>
  );
}
