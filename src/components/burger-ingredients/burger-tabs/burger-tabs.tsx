import React, {FC} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-tabs.module.css'

const Tabs = {
  BUN: 'bun',
  SAUCE: 'sauce',
  MAIN: 'main'
}

type BurgerTabsProps = {
    ingredientType: string,
    handleClick: (type: string) => void
}


const BurgerTabs: FC<BurgerTabsProps> = ({ingredientType, handleClick}) => {
  return (
    <div className={styles.burgerTabs}>
      <Tab value={Tabs.BUN} active={ingredientType === Tabs.BUN} onClick={() => handleClick(Tabs.BUN)}>
        Бургер
      </Tab>
      <Tab value={Tabs.SAUCE} active={ingredientType === Tabs.SAUCE} onClick={() => handleClick(Tabs.SAUCE)}>
        Соусы
      </Tab>
      <Tab value={Tabs.MAIN} active={ingredientType === Tabs.MAIN} onClick={() => handleClick(Tabs.MAIN)}>
        Начинки
      </Tab>
    </div>
  )
};

export default BurgerTabs;
