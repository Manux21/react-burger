import React from 'react';
import styles from './burger-constructor.module.css'
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorTotalPrice from "./burger-constructor-total-price/burger-constructor-total-price";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addBun, addIngredient} from "../../services/actions/burger-constructor";
import {closeOrder, getIngredientsRequest} from "../../services/actions/order-modal";
import { useNavigate } from "react-router-dom";

const BurgerConstructor = () => {

  const closeModal = () => {
    dispatch(closeOrder())
  }

  const user = useSelector((state) => state.profile.user);
  const navigate = useNavigate();

  const orderNumber = useSelector(store => store.orderModal.orderNumber)

  const bun = useSelector(store => store.burgerConstructor.bun)
  const ingredients = useSelector(store => store.burgerConstructor.ingredients)

  const arrayId = bun && ingredients && [bun._id, ...ingredients.map(ingredient => ingredient._id), bun._id]

  const totalPrice = React.useMemo(() => {
    const bunPrice = bun?.price ? bun?.price : 0;
    const ingredientsPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
    return 2 * bunPrice + ingredientsPrice;
  }, [bun?.price, ingredients]);

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
      dispatch(addIngredient(item))

    },
  });


  const handleClick = () => {
    if (user) {
      const arrayId = ingredients.reduce(
        (res, ingredient) => [...res, ingredient._id],
        [bun?._id],
      );
      dispatch(getIngredientsRequest(arrayId));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.burgerConstructor}>
      {orderNumber &&
        <Modal closeModal={closeModal}>
          <OrderDetails/>
        </Modal>
      }
      <BurgerConstructorList dropBunBottomRef={dropBunBottomRef} dropBunTopRef={dropBunTopRef}
                             dropIngredientRef={dropIngredientRef}/>
      <div className={styles.burgerConstructorInfo}>
        <BurgerConstructorTotalPrice totalPrice={totalPrice}/>
        <Button htmlType="button" type='primary' disabled={!bun} size="medium"
                onClick={handleClick}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};


export default BurgerConstructor;
