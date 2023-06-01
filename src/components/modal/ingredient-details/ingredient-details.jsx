import React from 'react';
import styles from './ingredient-details.module.css'
import IngredientProperties from "./ingredient-properties/ingredient-properties";
import {ingredientCloseModal} from "../../../services/actions/ingredient-modal";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const IngredientDetails = () => {

  const { id } = useParams();
  const ingredients = useSelector((state) => state.burgerIngredients.ingredients);

  const ingredient = React.useMemo(
    () => ingredients.find((item) => item._id === id),
    [id, ingredients],
  );

  const isModal = useSelector((state) => state.burgerIngredients.isOpen);

  if (!ingredient) {
    return null;
  }

  if (!ingredient) {
    return null;
  }
  //
  // const style = !location.state ? "mt-30" : "";

  return (
    <div className={`${styles.ingredientDetails} ${!isModal ? '' : styles.topMargin}`}>
      <div className={styles.detailsTittle}>
        <p className="text text_type_main-large">
          Детали ингредиента
        </p>
      </div>

      <img className={styles.image} src={ingredient.image_large} alt={'Изображение ингредиента'}/>
      <p className={`text text_type_main-medium ${styles.name}`}>
        {ingredient.name}
      </p>
      <IngredientProperties data={ingredient}/>
    </div>
  );
};


export default IngredientDetails;
