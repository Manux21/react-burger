import React, {FC} from 'react';
import styles from './app-header-button.module.css'
import {TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";


type AppHeaderButtonProps = {
    text: string,
    type: boolean,
    Icon: ({ type }: TIconProps) => JSX.Element;
}

const AppHeaderButton: FC<AppHeaderButtonProps> = ({text, type, Icon}) => {
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



export default AppHeaderButton;


