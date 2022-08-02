import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = true;

  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;
