import React from 'react';
import styles from './burger-constructor-element-empty-element.module.css'

const BurgerConstructorListEmptyElement = ({position}) => {
  return (
    <div className={`${styles.emptyElement} ${styles[position]}`}>
      Добавьте {position ? 'булку' : 'ингредиент'}
    </div>
  );
};

export default BurgerConstructorListEmptyElement;
