import React from 'react';
import styles from './burger-constructor.module.css'
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorTotalPrice from "./burger-constructor-total-price/burger-constructor-total-price";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../util/prop-types";

const BurgerConstructor = ({data}) => {


  const totalPrice = data.reduce((totalPrice, ingredient) => totalPrice + ingredient.price, 0)
  const [openModal, setOpenModal] = React.useState(false)
  const [modalData, setModalData] = React.useState([])


  return (
      <div className={styles.burgerConstructor}>
        {openModal &&
          <Modal setOpenModal={setOpenModal}>
            <OrderDetails setOpenModal={setOpenModal} data={modalData}/>
          </Modal>
        }
          <BurgerConstructorList data={data}/>
          <div className={styles.burgerConstructorInfo}>
            <BurgerConstructorTotalPrice totalPrice={totalPrice}/>
            <Button htmlType="button" type="primary" size="medium" onClick={() => setOpenModal(!openModal)}>
              Оформить заказ
            </Button>
          </div>
      </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}


export default BurgerConstructor;
