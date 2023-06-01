import React, {FC} from 'react';
import styles from './burger-constructor-total-price.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";


type BurgerConstructorTotalPriceProps = {
  totalPrice: number
}


const BurgerConstructorTotalPrice: FC<BurgerConstructorTotalPriceProps> = ({totalPrice}) => {
  return (
    <div className={styles.totalPrice}>
      <p className="text text_type_digits-medium">{totalPrice}</p>
      <CurrencyIcon type="primary"/>
    </div>
  );
};


export default BurgerConstructorTotalPrice;
