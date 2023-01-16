import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../modal.module.css'
import PropTypes from "prop-types";

const portal = document.getElementById('portal');

const ReactPortal = ({children}) =>
  ReactDOM.createPortal(
    <div className={styles.portal}>
      {children}
    </div>,
    portal
  );

ReactPortal.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ReactPortal;
