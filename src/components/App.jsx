import React from 'react';
import './App.css';
import AppHeader from "./app-header/app-header";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import {getIngredientsRequest} from "../services/actions/burger-ingredients";
import {useDispatch} from "react-redux";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";



function App() {


  const dispatch = useDispatch()

  React.useEffect(() => {
      dispatch(getIngredientsRequest())
    },[])

  return (
    <div className="App">
       <AppHeader/>
        <div className="Container">
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </DndProvider>
        </div>
    </div>
  );
}

export default App;
