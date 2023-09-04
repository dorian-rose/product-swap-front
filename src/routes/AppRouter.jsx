import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsRouter } from "./ProductsRouter";
import { ApiRouter } from "./ApiRouter";
import { AdminRouter } from "./AdminRouter";
import { HomePage } from "../products/pages";
import { useDispatch, useSelector } from "react-redux";
import { setLogged } from "../store/slice/logged/loggedSlice";
import { auth } from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const AppRouter = () => {
  const {  isAuthenticated } = useSelector((state) => state.logged);
  // const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log(isAuthenticated);

  const user = { email: "afgsf" };
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("app router");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid, email, photoURL } = user;
        dispatch(
          setLogged({
            displayName,
            uid,
            email,
            photoURL,
            isAuthenticated: true,
            role: "user",
          })
        );
      } else {
        dispatch(setLogged({}));
      }
    });
  }, [auth]);

  // const { isAuthenticated } = useSelector((state) => state.logged);
  // console.log(isAuthenticated);
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
        <Route path="/api/*" element={<Navigate to={"/"} />} />
      )}
      {user?.role != "admin" && (
        <Route path="/admin/*" element={<Navigate to={"/"} />} />
      )}
    </Routes>
  );
};
