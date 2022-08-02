import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isUserLogged } = useSelector((state) => state.users);

  return isUserLogged ? <Navigate to="/" /> : children;
};

export default PublicRoute;
