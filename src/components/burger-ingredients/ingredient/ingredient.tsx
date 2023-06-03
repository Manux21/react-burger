import React, { FC } from "react";
import styles from "./ingredient.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TBurgerIngredients } from "../../../services/types/types";

const DNDTypes = {
  BUN: "bun",
  INGREDIENT: "ingredient",
  COMPONENT: "component",
};

type IngredientProps = {
  ingredient: TBurgerIngredients;
};

type BurgerConstructorState = {
  burgerConstructor: {
    bun: TBurgerIngredients;
  };
};

const Ingredient: FC<IngredientProps> = ({ ingredient }) => {
  const { name, image, count, price, type, _id } = ingredient;
  const bun = useSelector((store: BurgerConstructorState) => store.burgerConstructor.bun);
  const location = useLocation();

  const [, dragRef] = useDrag({
    type: type === DNDTypes.BUN ? type : DNDTypes.INGREDIENT,
    item: ingredient,
  });

  return (
    <Link key={_id} to={`/ingredients/${_id}`} state={{ background: location }}>
      <div className={styles.ingredient}>
        {type === "bun" && bun?._id === _id ? (
          <Counter count={2} size="default" extraClass="m-1" />
        ) : count ? (
          <Counter count={count} size="default" extraClass="m-1" />
        ) : null}
        <img ref={dragRef} src={image} alt="Ingredient_image" className={styles.image} />
        <div className={styles.price}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>

        <p className="text text_type_main-default">{name}</p>
      </div>
    </Link>
  );
};

export default Ingredient;
