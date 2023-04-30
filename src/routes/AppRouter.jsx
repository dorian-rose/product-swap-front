import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ProductsRouter } from "./ProductsRouter";
import { AuthRouter } from "./AuthRouter";
import { ApiRouter } from "./ApiRouter";
import { HomePage } from "../products/pages";

export const AppRouter = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Routes>
      <Route path="/*" element={<ProductsRouter />} />
      {isAuthenticated ? (
        <Route path="/api/*" element={<ApiRouter />} />
      ) : (
        <Route path="/api/*" element={<HomePage />} />
      )}
      {/* {!isAuthenticated ? (
        <Route path="/" element={<AuthRouter />} />
      ) : (
        <Route path="/*" element={<ProductsRouter />} />
      )} */}
    </Routes>
  );
};
