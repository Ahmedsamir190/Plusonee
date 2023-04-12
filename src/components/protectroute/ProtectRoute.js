import UseAuth from "../useAuth/UseAuth";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute() {
  const { currentUser } = UseAuth();
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectRoute;
