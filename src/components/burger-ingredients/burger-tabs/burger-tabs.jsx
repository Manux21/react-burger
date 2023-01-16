import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerTabs = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex', marginTop: '20px' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Бургер
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
};

export default BurgerTabs;
