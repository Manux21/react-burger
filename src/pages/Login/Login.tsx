import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { loginRequestAsync } from "../../services/actions/login";

import styles from "./Login.module.css";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "../../hooks/useDispatch";

type TLogin = (e: FormEvent<HTMLFormElement>) => void;

export const LoginPage = () => {
  const { values, handleChange } = useForm({ email: "", password: "" });
  const dispatch = useDispatch();

  const login = React.useCallback<TLogin>(
    (e) => {
      e.preventDefault();
      dispatch(loginRequestAsync(values));
    },
    [dispatch, values],
  );

  return (
    <section className={styles.LoginPage}>
      <form onSubmit={login} className={styles.Form}>
        <h1 className="mb-6">Вход</h1>

        <div className={`mb-6 ${styles.FormInputs}`}>
          <EmailInput onChange={handleChange} value={values.email} name={"email"} isIcon={false} />
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={"password"}
            extraClass="mb-2"
          />
        </div>

        <Button id={"button-login"} htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      </form>
      <div className={`mt-20 ${styles.LoginPageFooter}`}>
        <div>
          <span className="text_color_inactive">Вы — новый пользователь?</span>
          <Link to="/register" className={styles.Login}>
            Зарегистрироваться
          </Link>
        </div>
        <div>
          <span className="text_color_inactive">Забыли пароль?</span>
          <Link to="/forgot-password" className={styles.Login}>
            Восстановить пароль
          </Link>
        </div>
      </div>
    </section>
  );
};
