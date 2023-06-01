import React, {SyntheticEvent, FormEvent} from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAsync} from "../../services/actions/login";
import { profileRequestUpdate } from "../../services/actions/profile";
import styles from "./Profile.module.css";
import {useForm} from "../../hooks/useForm";

type updateSumbitType = (e: FormEvent<HTMLFormElement>) => void;

type ProfileState = {
  profile: {
    user: {
      email: string;
      name: string;
    };
  };
}

type LoginState = {
  login: {
    user: {
      email: string;
      name: string;
    }
  }
}

export const ProfilePage = () => {
  const {values, setValues, handleChange, isFormEdited} = useForm({
    name: "",
    email: "",
    password: "",
  });
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const userLogin = useSelector((state: LoginState) => state.login.user);
  const userProfile = useSelector((state: ProfileState) => state.profile.user);

  const onIconClick = () => {
    inputRef?.current?.focus();
  };


  const cancleClick = (e: SyntheticEvent) => {
    if (userProfile) {
      setValues({ name: userProfile.name, email: userProfile.email, password: "" });
    }
    if (userLogin) {
      setValues({ name: userLogin.name, email: userLogin.email, password: "" });
    }
  };

  const updateClick = React.useCallback<updateSumbitType>(
    (e) => {
      e.preventDefault();
      dispatch<any>(profileRequestUpdate(values));
      setValues({ ...values, password: "" });
    },
    [dispatch, values],
  );

  const logout = React.useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch<any>(logoutRequestAsync());
    },
    [dispatch],
  );

  React.useEffect(() => {
    if (userLogin) {
      setValues({ ...values, name: userLogin.name, email: userLogin.email });
    }
  }, [userLogin]);

  React.useEffect(() => {
    if (userProfile) {
      setValues({ ...values, name: userProfile.name, email: userProfile.email });
    }
  }, [userProfile]);


  return (
    <section className={`mt-30 ${styles.ProfilePage}`}>
      <div className={styles.Sidebar}>
        <ul>
          <li className={styles.SidebarItem}>
            <NavLink to="/profile">
              {({ isActive }) => (
                <span
                  className={`text text_type_main-medium ${
                    isActive ? "" : "text_color_inactive"
                  }`.trim()}>
                   Профиль
                 </span>
              )}
            </NavLink>
          </li>
          <li className={styles.SidebarItem}>
            <NavLink to="orders">
              {({ isActive }) => (
                <span
                  className={`text text_type_main-medium ${
                    isActive ? "" : "text_color_inactive"
                  }`.trim()}>
                   История заказов
                 </span>
              )}
            </NavLink>
          </li>
          <li className={styles.SidebarItem}>
            <Button
              htmlType="button"
              type="secondary"
              size="large"
              className={`text text_type_main-medium text_color_inactive ${styles.ButtonExit}`}
              onClick={logout}>
              Выход
            </Button>
          </li>
        </ul>
        <p
          className={`text text_type_main-default text_color_inactive mt-20 ${styles.Description}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={`ml-15 form ${styles.Form}`} onSubmit={updateClick}>
        <Input
          type="text"
          onChange={handleChange}
          value={values.name}
          name="name"
          placeholder="Имя"
          icon="EditIcon"
          ref={inputRef}
          onIconClick={onIconClick}
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name="email"
          placeholder="Логин"
          isIcon={true}
        />
        <PasswordInput onChange={handleChange} value={values.password} name="password" icon="EditIcon" />
        {isFormEdited ? (
          <div>
            <Button htmlType="button" type="secondary" size="medium" onClick={cancleClick}>
              Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        ) : ''}
      </form>
    </section>
  );
};