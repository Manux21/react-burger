import React, {FC} from 'react';
import styles from './burger-constructor-list.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {addBun, addIngredient, constructorMove, deleteIngredient} from "../../../services/actions/burger-constructor";
import BurgerConstructorListEmptyElement
  from "./burger-constructor-list-empty-element/burger-constructor-element-empty-element";
import {Reorder} from "framer-motion"
import {TBurgerIngredients} from "../../../services/types/types";
import {useDrop} from "react-dnd";


type BurgerConstructorState = {
    burgerConstructor: {
        bun: TBurgerIngredients;
        ingredients: TBurgerIngredients[];
    };
}

const BurgerConstructorList = () => {

    const DNDTypes = {
        BUN: "bun",
        INGREDIENT: "ingredient",
        COMPONENT: "component",
    };

    const dispatch = useDispatch()

    const [, dropBunTopRef] = useDrop({
        accept: DNDTypes.BUN,

        drop(item) {
            dispatch(addBun(item))
        },
    });
    const [, dropBunBottomRef] = useDrop({
        accept: DNDTypes.BUN,

        drop(item) {
            dispatch(addBun(item))
        },
    });
    const [, dropIngredientRef] = useDrop({
        accept: DNDTypes.INGREDIENT,

        drop(item) {
            dispatch<any>(addIngredient(item))

        },
    });


  const ingredients = useSelector((store : BurgerConstructorState) => store.burgerConstructor.ingredients)
  const bun = useSelector((store : BurgerConstructorState) => store.burgerConstructor.bun)

  return (
    <div className={styles.burgerConstructorList}>
      <div ref={dropBunTopRef} className={styles.constructorElementBun}>
        {
          bun ?
            <ConstructorElement
              text={bun.name + ' (верх)'}
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
            <Reorder.Group className={styles.ingredientsList} axis="y" values={ingredients}
                           onReorder={(newLists) => dispatch(constructorMove(newLists))}>
              {
                ingredients.map(ingredient => (
                  <Reorder.Item key={ingredient.dragId} value={ingredient}>
                    <div className={styles.constructorElement} key={ingredient.dragId}>
                      <DragIcon type="primary"/>
                      <ConstructorElement
                        text={ingredient.name}
                        thumbnail={ingredient.image}
                        price={ingredient.price}
                        handleClose={() => dispatch<any>(deleteIngredient(ingredient.dragId, ingredient._id))}
                      />
                    </div>
                  </Reorder.Item>
                ))
              }
            </Reorder.Group>
          </div>
          :
          <div className={styles.constructorEmptyElement}>
            <BurgerConstructorListEmptyElement position={'center'}/>
          </div>
        }
      </div>

      <div ref={dropBunBottomRef} className={styles.constructorElementBun}>
        {
          bun ?
            <ConstructorElement
              text={bun.name + ' (низ)'}
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
