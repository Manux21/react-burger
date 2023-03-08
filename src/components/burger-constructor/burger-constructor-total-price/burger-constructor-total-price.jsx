import React from 'react';
import styles from './burger-constructor-total-price.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const BurgerConstructorTotalPrice = ({totalPrice}) => {
  return (
    <div className={styles.totalPrice}>
      <p className="text text_type_digits-medium">{totalPrice}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};

BurgerConstructorTotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired
}

export default BurgerConstructorTotalPrice;
