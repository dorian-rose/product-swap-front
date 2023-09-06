import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsRouter } from "./ProductsRouter";
import { ApiRouter } from "./ApiRouter";
import { AdminRouter } from "./AdminRouter";

import { useDispatch, useSelector } from "react-redux";
import { setLogged } from "../store/slice/logged/loggedSlice";
import { auth } from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { dataFetch } from "../helpers/fetch";

export const AppRouter = () => {
  
  const { isAuthenticated, role } = useSelector((state) => state.logged);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserFromDB = async (email) => {
      //get user/role from db
      const url = `${import.meta.env.VITE_USER_URL}user?email=${email}`;
      const userFromDb = await dataFetch(url);
      if (userFromDb.ok) {
        console.log(userFromDb);
        return userFromDb.data[0].role;
      } else {
        return "user";
      }
    };

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("in user", user);
        const { displayName, uid, email, photoURL } = user;
        const role = await getUserFromDB(email);

        dispatch(
          setLogged({
            displayName,
            uid,
            email,
            photoURL,
            isAuthenticated: true,
            role,
          })
        );
      } else {
        dispatch(setLogged({}));
      }
    });
  }, [auth]);

  return (
    <Routes>
      {/* if role is admin, redirect to admin routers, else, redirect to product routers */}
      {role === "admin" ? (
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
      {role != "admin" && (
        <Route path="/admin/*" element={<Navigate to={"/"} />} />
      )}
    </Routes>
  );
};
