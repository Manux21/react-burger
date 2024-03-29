import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState, TApplicationActions } from "../types";
import { TWSStoreActions } from "../types/types";

export const socketMiddleware = (wsActions: TWSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsInit,
        wsDisconnecting,
        wsConnectionSuccess,
        wsConnectionError,
        wsConnectionClosed,
        wsGetMessage,
      } = wsActions;

      if (type === wsInit) {
        // Объект класса WebSocket
        socket = new WebSocket(action.url);
      }

      if (socket) {
        // Функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch(wsConnectionSuccess(event));
        };

        // Функиця, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch(wsConnectionError(event));
        };

        // Функция, которая вызывается при получении события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          const parseData = JSON.parse(data);
          const { orders, total, totalToday } = parseData;

          dispatch(wsGetMessage({ orders, total, totalToday }));
        };

        // Функция, которая вызывается при закрытии соединения
        socket.onclose = () => {
          dispatch(wsConnectionClosed());
        };
      }

      if (socket && type === wsDisconnecting) {
        socket.close();
      }

      next(action);
    };
  }) as Middleware;
};
