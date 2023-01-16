import React from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import axios from "axios";

const dataURL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {

    const [data, setData] = React.useState([])
    const [isError, setIsError] = React.useState(false)

    React.useEffect(() => {
        axios.get(dataURL)
            .then(res => {
                setData(res.data.data)
            }).catch(error => setIsError(true))
    },[])

  return (
    <div className="App">
       <AppHeader/>
        { !isError ?
        <div className="Container">
            <BurgerIngredients data={data}/>
            <BurgerConstructor data={data}/>
        </div>

            : <h1>Ошибка при загрузке данных</h1>
        }
    </div>
  );
}

export default App;
