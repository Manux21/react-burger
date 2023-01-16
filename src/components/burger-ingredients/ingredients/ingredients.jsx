import React from 'react';
import styles from './ingredients.module.css'
import Ingredient from "./ingredient/ingredient";
import ModalOverlay from "../../modal/modal-overlay";
import Modal from "../../modal/modal";
import IngredientDetails from "../../modal/ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../util/prop-types";
import IngredientCategory from "./ingredient-category/ingredient-category";

const Ingredients = ({data}) => {

  const [openModal, setOpenModal] = React.useState(false)

  const [modalData, setModalData] = React.useState(null)

  const modalHandler = (ingredientData) => {
    setOpenModal(true)
    setModalData(ingredientData)
  }

  const getIngredients = (type) => {
    return data.filter(ingredient => ingredient.type === type)
      .map(ingredient => {
        return (
          <div className={styles.ingredient} onClick={() => modalHandler(ingredient)} key={ingredient._id}>
            <Ingredient
              image={ingredient.image}
              price={ingredient.price}
              name={ingredient.name}
            />
          </div>
        )
      })
  }


  return (
    <div className={styles.ingredients}>
      {openModal &&
        <Modal setOpenModal={setOpenModal}>
          <IngredientDetails setOpenModal={setOpenModal} data={modalData}/>
        </Modal>
      }

      <IngredientCategory getIngredients={getIngredients} type='bun'/>
      <IngredientCategory getIngredients={getIngredients} type='sauce'/>
      <IngredientCategory getIngredients={getIngredients} type='main'/>
    </div>
  );
};

Ingredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}

export default Ingredients;
