import React, {ReactNode, FC} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

type IProtectedRouteElementProps = {
  children?: ReactNode;
  onlyUnAuth?: boolean;
}

type ProfileState = {
  profile: {
    user: {
      email: string;
      name: string;
    };
  };
}

const ProtectedRouteElement: FC<IProtectedRouteElementProps> = ({ children, onlyUnAuth = false }) => {
  const user = useSelector((state: ProfileState) => state.profile.user);
  const location = useLocation();

  if (onlyUnAuth && user) {
    const from = location.state?.from || "/";

    return <Navigate to={from} replace />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRouteElement;



