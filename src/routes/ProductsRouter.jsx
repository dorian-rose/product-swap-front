import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  HomePage,
  Books,
  ClothingPage,
  FootWear,
  FurniturePage,
  ElectronicsPage,
  DetailPage,
  SearchAllPage,
} from "../products/pages/index";
import { LoginPage, RegisterPage } from "../auth/pages/index";
import { useDispatch } from "react-redux";
import { setLogged } from "../store/slice/logged/loggedSlice";
import { auth } from "../config/firebaseConfig";
import { NavBar } from "../ui/NavBar";
import { onAuthStateChanged, getAuth } from "firebase/auth";

export const ProductsRouter = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("product router");
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { displayName, uid, email, photoURL } = user;
  //       dispatch(
  //         setLogged({
  //           displayName,
  //           uid,
  //           email,
  //           photoURL,
  //           isAuthenticated: true,
  //         })
  //       );
  //     } else {
  //       dispatch(setLogged({}));
  //     }
  //   });
  // }, [auth]);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="mx-10 md:mx-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/footwear" element={<FootWear />} />
          <Route path="/furniture" element={<FurniturePage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/view/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchAllPage />} />

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </main>
    </>
  );
};
