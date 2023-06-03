import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { wsConnectionStart, wsDisconnecting } from "../../services/actions/wsActions";
import { WS_API } from "../util/burger-api";
import { getCookie } from "../util/cookie";

import OrderCard from "./order-card/order-card";
import { useDispatch } from "../../hooks/useDispatch";
import { useSelector } from "../../hooks/useSelector";

const HistoryOrders = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const hAuto = pathname === "/feed" ? "h-auto-188" : "h-auto-128";

  let orders = useSelector((state) => state.webSocket.orders);

  useEffect(() => {
    if (pathname === "/profile/orders") {
      const accessToken = getCookie("accessToken");
      dispatch(wsConnectionStart(`${WS_API}/orders?token=${accessToken}`));
    }

    if (pathname === "/feed") {
      dispatch(wsConnectionStart(`${WS_API}/orders/all`));
    }

    return () => {
      dispatch(wsDisconnecting());
    };
  }, [dispatch]);

  if (!orders) {
    return null;
  } else {
    if (pathname === "/profile/orders") {
      orders = [...orders].reverse();
    }
  }

  return (
    <div className={`flex flex-col gap-y-6 overflow-y-scroll ${hAuto} scrollbar pr-4 w-full`}>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
};

export default HistoryOrders;
