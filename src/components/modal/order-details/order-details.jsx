import React from 'react';
import styles from './order-details.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Glow from '../.././../svg/graphics.svg'
import {closeOrder} from "../../../services/actions/order-modal";
import {useDispatch, useSelector} from "react-redux";

const OrderDetails = () => {

  const dispatch = useDispatch()
  const orderNumber = useSelector(store => store.orderModal.orderNumber)
  return (
    <div className={styles.orderDetails}>
      <div className={styles.orderDetailsClose} onClick={() => dispatch(closeOrder())}>
        <CloseIcon type="primary" />
      </div>

      <p className={`text text_type_digits-large ${styles.orderDetailNumber}`}>{orderNumber}</p>

      <p className={`text text_type_main-medium ${styles.orderDetailIdentificator}`}>
        идентификатор заказа
      </p>

      <div className={styles.orderDetailsIcon}>
        <img src={Glow} alt="glow"/>
      </div>


      <div className={styles.orderDetailsStatus}>
        <p className="text text_type_main-default">
          Ваш заказ начали готовить
        </p>

        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>

    </div>
  );
};


export default OrderDetails;
