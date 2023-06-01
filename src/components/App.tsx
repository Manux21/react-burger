import React from 'react';
import './App.css';
import AppHeader from "./app-header/app-header";
import {getIngredientsRequest} from "../services/actions/burger-ingredients";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalSwitch from "./modal-switch/modal-switch";
import ProtectedRouteElement from "./protected-route-element/protected-route-element";

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
    const background = location.state && location.state.background;
  const user = useSelector<any>((state) => state.profile.user);
  const token = getCookie("accessToken");

  React.useEffect(() => {
      dispatch<any>(getIngredientsRequest())
      dispatch<any>(checkUserAuth());
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
            <Route path="/ingredients/:id" element={<IngredientPage/>} />
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
