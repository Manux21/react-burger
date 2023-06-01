import {combineReducers} from 'redux';
import {ingredientsReducer} from "./burger-ingredients";
import {constructorReducer} from "./burger-constructor";
import {ingredientModalReducer} from "./ingredient-modal";
import {orderModalReducer} from "./order-modal";
import {forgotPasswordReducer} from "./forgot-password";
import {loginReducer} from "./login";
import {resetPasswordReducer} from "./reset-password";
import {profileReducer} from "./profile";
import {signupReducer} from "./signup";
import {updateTokenReducer} from "./token";



export const rootReducer = combineReducers({
  burgerIngredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  ingredientModal: ingredientModalReducer,
  orderModal: orderModalReducer,
  forgotPassword: forgotPasswordReducer,
  login: loginReducer,
  profile: profileReducer,
  resetPassword: resetPasswordReducer,
  signup: signupReducer,
  token: updateTokenReducer,
});