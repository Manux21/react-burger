import React from 'react';
import styles from './app-header.module.css'
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,

} from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderButton from "./app-header-button/app-header-button";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <div className={styles.container}>
        <div className={styles.headerLeftButtons}>

          <NavLink to="/">
            {({ isActive }) => (
                <AppHeaderButton text='Конструктор' type={isActive} Icon={BurgerIcon}/>
            )}
          </NavLink>

          <NavLink to="/feed">
            {({ isActive }) => (
              <AppHeaderButton text='Лента заказов' type={isActive} Icon={ListIcon}/>
            )}
          </NavLink>

        </div>

        <div className={styles.headerLogo}>
          <Logo/>
        </div>


        <NavLink id={"username"} to="/profile">
          {({ isActive }) => (
            <AppHeaderButton text='Личный кабинет' type={isActive} Icon={ProfileIcon}/>
          )}
        </NavLink>



      </div>
    </div>
  );
};

export default AppHeader;
