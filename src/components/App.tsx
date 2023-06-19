import React from "react";
import "./App.css";
import AppHeader from "./app-header/app-header";
import { getIngredientsRequest } from "../services/actions/burger-ingredients";
import { Routes, Route, useLocation } from "react-router-dom";
import ModalSwitch from "./modal-switch/modal-switch";
import ProtectedRouteElement from "./protected-route-element/protected-route-element";
import HistoryOrders from "../components/history-orders/history-orders";

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

import { OrderPage } from "../pages/OrderPage/OrderPage";
import { FeedPage } from "../pages/Feed/Feed";
import { getCookie } from "./util/cookie";
import Preloader from "./preloader/preloader";
import { checkUserAuth } from "../services/actions/profile";
import { useDispatch } from "../hooks/useDispatch";
import { useSelector } from "../hooks/useSelector";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const user = useSelector((state) => state.profile.user);
  const token = getCookie("accessToken");

  React.useEffect(() => {
    dispatch(getIngredientsRequest());
    dispatch(checkUserAuth());
  }, []);

  return (
    <div className="App">
      <AppHeader />
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
            >
              <Route path="/profile/orders" element={<HistoryOrders />} />
            </Route>
            <Route
              path="/login"
              element={
                <ProtectedRouteElement onlyUnAuth>
                  <LoginPage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRouteElement onlyUnAuth>
                  <RegisterPage />
                </ProtectedRouteElement>
              }
            />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/feed/:id" element={<OrderPage />} />
            <Route path="/profile/orders/:id" element={<OrderPage />} />
            <Route path="/ingredients/:id" element={<IngredientPage />} />
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
