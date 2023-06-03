import {Action, ActionCreator, Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import {
    BurgerConstructorActions,
    BurgerIngredientsActions,
    ForgotPasswordActions,
    IngredientModalActions,
    LoginActions,
    OrderModalActions,
    ProfileActions,
    ResetPasswordActions,
    SignupActions,
    TokenActions,
    WsActions,
} from "../actions";
import { store } from "../../index";


export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
export type TApplicationActions =
    | BurgerConstructorActions
    | BurgerIngredientsActions
    | ForgotPasswordActions
    | IngredientModalActions
    | LoginActions
    | OrderModalActions
    | ProfileActions
    | ResetPasswordActions
    | SignupActions
    | TokenActions
    | WsActions


// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
    >;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = Dispatch<TApplicationActions>;
