import React from 'react';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-details.module.css'
import IngredientProperties from "./ingredient-properties/ingredient-properties";
import {ingredientCloseModal} from "../../../services/actions/ingredient-modal";
import {useDispatch, useSelector} from "react-redux";

const IngredientDetails = () => {

  const dispatch = useDispatch()
  const data = useSelector(store => store.ingredientModal.ingredient)

  return (
    <div className={styles.ingredientDetails}>
      <div className={styles.detailsTittle}>
        <p className="text text_type_main-large">
          Детали ингредиента
        </p>
        <div className={styles.closeIcon} onClick={() => dispatch(ingredientCloseModal())}>
          <CloseIcon type="primary"/>
        </div>
      </div>

      <img className={styles.image} src={data.image_large} alt={'Изображение ингредиента'}/>
      <p className={`text text_type_main-medium ${styles.name}`}>
        {data.name}
      </p>
      <IngredientProperties data={data}/>
    </div>
  );
};


export default IngredientDetails;
