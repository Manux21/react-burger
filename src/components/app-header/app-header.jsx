import React from 'react';
import styles from './app-header.module.css'
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,

} from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderButton from "./app-header-button/app-header-button";

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <div className={styles.container}>
        <div className={styles.headerLeftButtons}>

          <AppHeaderButton text='Конструктор' type='primary' Icon={BurgerIcon}/>
          <AppHeaderButton text='Лента заказов' type='secondary' Icon={ListIcon}/>
        </div>

        <div className={styles.headerLogo}>
          <Logo/>
        </div>
        <AppHeaderButton text='Личный кабинет' type='secondary' Icon={ProfileIcon}/>
      </div>
    </div>
  );
};

export default AppHeader;
