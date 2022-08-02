import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //Ver como incorporar REDUX
  const user = true;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
