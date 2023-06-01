import React from 'react';
import styles from './app-header-button.module.css'
import PropTypes from 'prop-types';

const AppHeaderButton = ({text, type, Icon}) => {
  return (

    <div className={styles.headerButton}>
      <Icon type={!type ? 'secondary' : 'primary'}/>
      <span
         className={`text text_type_main-default ${!type ? `text_color_inactive ${styles.headerButtonText}` : `${styles.headerButtonTextPrimary}`}`}>
        {text}
      </span>
    </div>
  );
};


AppHeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  Icon: PropTypes.elementType.isRequired,
};


export default AppHeaderButton;


