import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Footer from "../components/Footer/Footer";
import Logout from "../components/Logout/Logout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/logout"
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <ItemListContainer />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
