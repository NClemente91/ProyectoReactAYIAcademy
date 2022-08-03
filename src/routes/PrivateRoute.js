import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isUserLogged } = useSelector((state) => state.users);

  return isUserLogged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
