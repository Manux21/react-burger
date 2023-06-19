import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { signupRequestAsync } from "../../services/actions/signup";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "../../hooks/useDispatch";
import styles from "./Register.module.css";

type TRegister = (e: FormEvent<HTMLFormElement>) => void;

export const RegisterPage = () => {
  const { values, handleChange } = useForm({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const register = React.useCallback<TRegister>(
    (e) => {
      e.preventDefault();
      dispatch(signupRequestAsync(values));
    },
    [dispatch, values],
  );

  return (
    <section className={styles.RegiserPage}>
      <form onSubmit={register} className={styles.Form}>
        <h1 className="mb-6">Регистрация</h1>
        <div className={`mb-6 ${styles.FormInputs}`}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={handleChange}
            value={values.name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
          <EmailInput onChange={handleChange} value={values.email} name={"email"} isIcon={false} />
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={"password"}
            extraClass="mb-2"
          />
        </div>

        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <div className={`mt-20 ${styles.RegiserPageFooter}`}>
        <span className="text_color_inactive">Уже зарегистрированы?</span>
        <Link to="/login" className={styles.Login}>
          Войти
        </Link>
      </div>
    </section>
  );
};
