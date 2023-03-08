import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-tabs.module.css'


const Tabs = {
  BUN: 'bun',
  SAUCE: 'sauce',
  MAIN: 'main'
}

const BurgerTabs = () => {
  const [current, setCurrent] = React.useState(Tabs.BUN)

  return (
    <div className={styles.burgerTabs}>
      <Tab value={Tabs.BUN} active={current === Tabs.BUN} onClick={setCurrent}>
        Бургер
      </Tab>
      <Tab value={Tabs.SAUCE} active={current === Tabs.SAUCE} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value={Tabs.MAIN} active={current === Tabs.MAIN} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
};

export default BurgerTabs;
