import React, {useRef, useState} from 'react';
import styles from './burger-ingredients.module.css'
import BurgerTabs from "./burger-tabs/burger-tabs";
import Ingredients from "./ingredients/ingredients";

const BurgerIngredients = () => {

  const [ingredientType, setIngredientType] = useState("bun");

  const refBun = useRef(null);
  const refSauce = useRef(null);
  const refMain = useRef(null);

  const handleScroll = (e) => {
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

  const handleClick = (type) => {
    setIngredientType(type);
    switch (type) {
      case "bun": {
        refBun.current?.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "sauce": {
        refSauce.current?.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "main": {
        refMain.current?.scrollIntoView({ behavior: "smooth" });
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <div className={styles.Container}>
      <div className={styles.BurgerIngredients}>

        <p className="text text_type_main-large">
          Соберите бургер
        </p>

        <BurgerTabs  handleClick={handleClick} ingredientType={ingredientType}/>
        <Ingredients handleScroll={handleScroll} refBun={refBun} refSauce={refSauce} refMain={refMain}/>
      </div>
    </div>
  );
};



export default BurgerIngredients;
