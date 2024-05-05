import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

const ProtectedRoute = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  if (!token) {
    return (
      <div className="unauthorized h-lvh">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    );
  }

  return <Outlet />;
};
export default ProtectedRoute;
