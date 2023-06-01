import React, {useRef, useState, MouseEvent} from 'react';
import styles from './burger-ingredients.module.css'
import BurgerTabs from "./burger-tabs/burger-tabs";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import IngredientCategory from "./ingredient-category/ingredient-category";
import {ingredientCloseModal} from "../../services/actions/ingredient-modal";
import {useDispatch, useSelector} from "react-redux";
import {TBurgerIngredients} from "../../services/types/types";


type IngredientModalState = {
  ingredientModal: {
    ingredient: TBurgerIngredients
  }
}

const BurgerIngredients = () => {

  const [ingredientType, setIngredientType] = useState<string>("bun");

  const refBun = useRef<HTMLDivElement>(null);
  const refSauce = useRef<HTMLDivElement>(null);
  const refMain = useRef<HTMLDivElement>(null);


  const modalIngredient = useSelector((store: IngredientModalState ) => store.ingredientModal.ingredient)
  const dispatch = useDispatch()

  const handleScroll = (e:MouseEvent<HTMLDivElement>) => {
    const ingredeintsCoords = e.currentTarget.getBoundingClientRect();
    const bunCoords = refBun.current?.getBoundingClientRect();
    const sauceCoords = refSauce.current?.getBoundingClientRect();
    const mainCoords = refMain.current?.getBoundingClientRect();

    if (bunCoords && sauceCoords && mainCoords) {
      if (ingredeintsCoords.top - bunCoords.top < 10) setIngredientType("bun");
      if (sauceCoords.top - ingredeintsCoords.top < 10) setIngredientType("sauce");
      if (
        mainCoords.top <
        ingredeintsCoords.top + (ingredeintsCoords.bottom - ingredeintsCoords.top) / 2
      )
        setIngredientType("main");
    }
  };

  const handleClick = (type: string) => {
    setIngredientType(type);
    switch (type) {
      case "bun": {
        refBun.current?.scrollIntoView({behavior: "smooth"});
        break;
      }
      case "sauce": {
        refSauce.current?.scrollIntoView({behavior: "smooth"});
        break;
      }
      case "main": {
        refMain.current?.scrollIntoView({behavior: "smooth"});
        break;
      }
      default: {
        break;
      }
    }
  }


  const closeModal = () => {
    dispatch(ingredientCloseModal())
  }


  return (
    <div className={styles.Container}>
      <div className={styles.BurgerIngredients}>

        <p className="text text_type_main-large">
          Соберите бургер
        </p>

        <BurgerTabs handleClick={handleClick} ingredientType={ingredientType}/>


        <div onScroll={handleScroll} className={styles.ingredients}>
          {modalIngredient &&
              <Modal closeModal={closeModal}>
                <IngredientDetails/>
              </Modal>
          }
          <IngredientCategory ref={refBun} type='bun'/>
          <IngredientCategory ref={refSauce} type='sauce'/>
          <IngredientCategory ref={refMain} type='main'/>
        </div>

        {/*<Ingredients handleScroll={handleScroll} refBun={refBun} refSauce={refSauce} refMain={refMain}/>*/}
      </div>
    </div>
  );
};


export default BurgerIngredients;
