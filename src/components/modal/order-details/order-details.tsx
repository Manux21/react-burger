import React from 'react';
import styles from './order-details.module.css'
import Glow from "../../../svg/graphics.svg";
import {useSelector} from "react-redux";


type OrderModalState = {
    orderModal:{
        orderNumber: number
    },
}

const OrderDetails = () => {

  const orderNumber = useSelector((store: OrderModalState) => store.orderModal.orderNumber)
  return (
    <div className={styles.orderDetails}>

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
