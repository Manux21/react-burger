import React from 'react';
import styles from './burger-constructor-list.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {constructorMove, deleteIngredient} from "../../../services/actions/burger-constructor";
import BurgerConstructorListEmptyElement
  from "./burger-constructor-list-empty-element/burger-constructor-element-empty-element";
import { Reorder } from "framer-motion"


const BurgerConstructorList = ({dropBunTopRef, dropBunBottomRef, dropIngredientRef}) => {

  const ingredients = useSelector(store => store.burgerConstructor.ingredients)
  const bun = useSelector(store => store.burgerConstructor.bun)
  const dispatch = useDispatch()

  return (
    <div className={styles.burgerConstructorList}>
      <div ref={dropBunTopRef} className={styles.constructorElementBun}>
        {
          bun ?
        <ConstructorElement
          text={bun.name}
          thumbnail={bun.image}
          price={bun.price}
          type={'top'}
          isLocked={true}
        />
          : <BurgerConstructorListEmptyElement position={'top'}/>
        }
      </div>

      <div ref={dropIngredientRef}>
      {ingredients.length > 0 ?
        <div className={styles.burgerConstructorIngredientList}>
          <Reorder.Group className={styles.ingredientsList} axis="y" values={ingredients} onReorder={(newLists) => dispatch(constructorMove(newLists))}>
        {
          ingredients.map(ingredient => (
          <Reorder.Item key={ingredient.dragId} value={ingredient}>
            <div className={styles.constructorElement} key={ingredient.dragId}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={ingredient.name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                handleClose={() => dispatch(deleteIngredient(ingredient.dragId, ingredient._id))}
              />
            </div>
          </Reorder.Item>
          ))
        }
          </Reorder.Group>
        </div>
        :
          <div className={styles.constructorEmptyElement}>
            <BurgerConstructorListEmptyElement/>
          </div>
      }
      </div>

      <div ref={dropBunBottomRef} className={styles.constructorElementBun}>
        {
          bun ?
            <ConstructorElement
              text={bun.name}
              thumbnail={bun.image}
              price={bun.price}
              type={'bottom'}
              isLocked={true}
            />
            : <BurgerConstructorListEmptyElement position={'bottom'}/>
        }
      </div>
    </div>
  );
};




export default BurgerConstructorList;
