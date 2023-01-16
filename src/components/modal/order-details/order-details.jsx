import React from 'react';
import styles from './order-details.module.css'
import {CheckMarkIcon, CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const OrderDetails = ({setOpenModal}) => {
  return (
    <div className={styles.orderDetails}>
      <div className={styles.orderDetailsClose} onClick={() => setOpenModal(false)}>
        <CloseIcon type="primary" />
      </div>

      <p className={`text text_type_digits-large ${styles.orderDetailNumber}`}>034536</p>

      <p className={`text text_type_main-medium ${styles.orderDetailIdentificator}`}>
        идентификатор заказа
      </p>

      <div className={styles.orderDetailsIcon}>
        <CheckMarkIcon type="primary" />
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

OrderDetails.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
}

export default OrderDetails;
