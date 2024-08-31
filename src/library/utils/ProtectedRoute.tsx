// src/components/ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";
import { useUserStore } from "../../pages/dashboard/store";

const ProtectedRoute = () => {
  const user = sessionStorage.getItem("user") || "";
  const { isAuthenticated } = useAuth();
  const { setUsers } = useUserStore();
  const authToken = sessionStorage.getItem("access");
  useEffect(() => {
    if (user) {
      setUsers(JSON.parse(user));
    }
  }, [user]);
  return isAuthenticated || authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
