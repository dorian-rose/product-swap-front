import { Routes, Route, Navigate } from "react-router-dom";
import {
  AddProductPage,
  UserProductsPage,
  DeleteProductPage,
  UpdateProductPage,
  FavouritesPage,
  SendMailPage,
  UpdateUserPage,
} from "../userFunctions/pages/index";
import { NavBar } from "../ui/NavBar";

export const ApiRouter = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="mx-10 md:mx-20">
        <Routes>
          <Route path="add" element={<AddProductPage />} />
          <Route path="user" element={<UserProductsPage />} />
          <Route path="delete/:id" element={<DeleteProductPage />} />
          <Route path="update/:id" element={<UpdateProductPage />} />
          <Route path="/change" element={<UpdateUserPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="/send/:id" element={<SendMailPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </main>
    </>
  );
};
