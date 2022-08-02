import { useDispatch } from "react-redux";
import { isLogout } from "../../store/slices/users";

const Logout = () => {
  const dispatch = useDispatch();

  dispatch(isLogout());
};

export default Logout;
