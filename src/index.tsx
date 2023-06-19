import React from "react";
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";
import App from "./components/App";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { rootReducer } from "./services/reducers/root-reducer";
import "./index.css";
import { WS_CONNECTION_START, WS_DISCONNECTING } from "./services/constants/constants";
import { socketMiddleware } from "./services/middleware/socket-middleware";
import { TWSStoreActions } from "./services/types/types";

import {
  wsConnectionClosed,
  wsConnectionError,
  wsConnectionSuccess,
  wsGetMessage,
} from "./services/actions/wsActions";

const wsActions: TWSStoreActions = {
  wsInit: WS_CONNECTION_START,
  wsDisconnecting: WS_DISCONNECTING,
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage,
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(socketMiddleware(wsActions), thunk)),
);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
