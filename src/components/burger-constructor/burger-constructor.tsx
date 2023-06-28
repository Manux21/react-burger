import React from 'react';
import styles from './burger-constructor.module.css'
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorTotalPrice from "./burger-constructor-total-price/burger-constructor-total-price";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import {useDispatch} from "../../hooks/useDispatch";
import {useSelector} from '../../hooks/useSelector'
import {useDrop} from "react-dnd";
import {addBun, addIngredient} from "../../services/actions/burger-constructor";
import {closeOrder, orderNumberRequestAsync} from "../../services/actions/order-modal";
import { useNavigate } from "react-router-dom";
import { TBurgerIngredients } from "../../services/types/types";
import {types} from "util";
import orderDetails from "../modal/order-details/order-details";


type BurgerConstructorState = {
  burgerConstructor: {
    bun: TBurgerIngredients;
    ingredients: TBurgerIngredients[];
  };
}

type OrderModalState = {
  orderModal: {
    orderNumber: number;
  };
}

const BurgerConstructor = () => {

  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeOrder())
  }
  const user = useSelector((state) => state.profile.user);
  const navigate = useNavigate();
  const status = useSelector((state) => state.orderModal.status);

  const orderNumber = useSelector((store) => store.orderModal.orderNumber);

  const bun = useSelector((store) => store.burgerConstructor.bun)
  const ingredients = useSelector((store) => store.burgerConstructor.ingredients)

  const totalPrice = React.useMemo(() => {
    const bunPrice = bun?.price ? bun?.price : 0;
    const ingredientsPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
    return 2 * bunPrice + ingredientsPrice;
  }, [bun?.price, ingredients]);


  const handleClick = () => {
    if (user) {
      const arrayId = ingredients.reduce(
        (res, ingredient) => [...res, ingredient._id],
        [bun?._id],
      );
      dispatch(orderNumberRequestAsync(arrayId));
    } else {
      navigate("/login");
    }
  };


  return (
    <div className={styles.burgerConstructor}>
      <BurgerConstructorList/>
      <div className={styles.burgerConstructorInfo}>
        <BurgerConstructorTotalPrice totalPrice={totalPrice}/>
        <Button id={"checkout"} htmlType="button" type='primary' disabled={!bun} size="medium"
                onClick={handleClick}>
          Оформить заказ
        </Button>
        {status && (
            <Modal closeModal={closeModal}>
              <OrderDetails orderNumber={orderNumber}/>
            </Modal>
        )}
      </div>
    </div>
  );
};

export default BurgerConstructor;
