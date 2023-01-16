import React from 'react';
import styles from './burger-constructor-list.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../util/prop-types";

const BurgerConstructorList = ({data}) => {

  return (
    <div className={styles.burgerConstructorList}>
      <div className={styles.constructorElementBun}>
        <ConstructorElement
          text={"Краторная булка N-200i"}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          price={1255}
          type={'top'}
          isLocked={true}
        />
      </div>

      <div className={styles.burgerConstructorIngredientList}>
      {data.filter(ingredient => ingredient.type !== 'bun').map(ingredient => {
        return <div className={styles.constructorElement} key={ingredient._id}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={ingredient.name}
            thumbnail={ingredient.image}
            price={ingredient.price}/>
        </div>
      })}
      </div>
      <div className={styles.constructorElementBun}>
        <ConstructorElement
          text={"Краторная булка N-200i"}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          price={1255}
          type={'bottom'}
          isLocked={true}
        />
      </div>
    </div>
  );
};

BurgerConstructorList.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired
}



export default BurgerConstructorList;
