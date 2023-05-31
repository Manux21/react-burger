import React from 'react';
import './App.css';
import AppHeader from "./app-header/app-header";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import {getIngredientsRequest} from "../services/actions/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalSwitch from "../components/modal-switch/modal-switch";
import ProtectedRouteElement from "../components/protected-route-element/protected-route-element";

import {
  ForgotPasswordPage,
  HomePage,
  IngredientPage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
} from "../pages";
import IngredientDetails from "./modal/ingredient-details/ingredient-details";
import {getCookie} from "./util/cookie";
import Preloader from "./preloader/preloader";
import {checkUserAuth} from "../services/actions/profile";



function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background ? true : false;
  const user = useSelector((state) => state.profile.user);
  const token = getCookie("accessToken");

  React.useEffect(() => {
      dispatch(getIngredientsRequest())
      dispatch(checkUserAuth());
    },[])

  return (

    <div className="App">
       <AppHeader/>
        <div className="Container">
          {user || !token ? (
          <Routes location={background || location}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement>
                  <ProfilePage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRouteElement onlyUnAuth>
                  <LoginPage />
                </ProtectedRouteElement>
              }
            />
            <Route path="/ingredients/:id" element={<IngredientDetails/>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          ) : (
            <Preloader />
          )}
          <ModalSwitch background={background} />
        </div>
    </div>
  );
}

export default App;
