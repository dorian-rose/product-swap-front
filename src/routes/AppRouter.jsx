import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ProductsRouter } from "./ProductsRouter";
import { AuthRouter } from "./AuthRouter";
import { ApiRouter } from "./ApiRouter";
import { AdminRouter } from "./AdminRouter";
import { HomePage } from "../products/pages";

export const AppRouter = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Routes>
      {/* if role is admin, redirect to admin routers, else, redirect to product routers */}
      {user?.role == "admin" ? (
        <Route path="/*" element={<AdminRouter />} />
      ) : (
        <Route path="/*" element={<ProductsRouter />} />
      )}

      {/* if authenticated, can pass to api routers, else, back to homepage */}
      {isAuthenticated ? (
        <Route path="/api/*" element={<ApiRouter />} />
      ) : (
        <Route path="/api/*" element={<HomePage />} />
      )}
      {user?.role != "admin" && (
        <Route path="/admin/*" element={<ProductsRouter />} />
      )}
    </Routes>
  );
};
