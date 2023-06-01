import React, {FC} from 'react';
import styles from './burger-constructor-element-empty-element.module.css'


type BurgerConstructorListEmptyElementProps = {
    position: string
}

const BurgerConstructorListEmptyElement :FC<BurgerConstructorListEmptyElementProps> = ({position}) => {
  return (
    <div className={`${styles.emptyElement} ${styles[position]}`}>
      Добавьте {position ? 'булку' : 'ингредиент'}
    </div>
  );
};

export default BurgerConstructorListEmptyElement;
