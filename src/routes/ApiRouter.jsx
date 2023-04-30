import { Routes, Route, Navigate } from "react-router-dom";
import {
  AddProductPage,
  UserProductsPage,
  DeleteProductPage,
  UpdateProductPage,
  FavouritesPage,
} from "../userFunctions/pages/index";
//import { NavBar } from "../ui/NavBar";
import { CategoryBar } from "../ui/CategoryBar";

export const ApiRouter = () => {
  return (
    <>
      <CategoryBar />
      <Routes>
        <Route path="add" element={<AddProductPage />} />
        <Route path="user" element={<UserProductsPage />} />
        <Route path="delete/:id" element={<DeleteProductPage />} />
        <Route path="update/:id" element={<UpdateProductPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
