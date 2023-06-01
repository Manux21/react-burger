import React, {FC} from 'react';
import styles from './ingredient-property.module.css'

type IngredientPropertyProps = {
    name: string,
    property: number,
}

const IngredientProperty:FC<IngredientPropertyProps> = ({name, property}) => {
  return (
    <div className={styles.property}>
      <p className="text text_type_main-default text_color_inactive">
        {name}
      </p>
      <p className="text text_type_digits-default text_color_inactive">{property}</p>
    </div>
  );
};


export default IngredientProperty;
