import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export const AuthNavigator = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ prevPath: pathname }} />
  );
};
