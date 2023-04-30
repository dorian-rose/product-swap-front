import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  Books,
  Clothing,
  FootWear,
  Furniture,
  Electronics,
  DetailPage,
  SearchAllPage,
} from "../products/pages/index";
//import { NavBar } from "../ui/NavBar";
import { CategoryBar } from "../ui/CategoryBar";

export const ProductsRouter = () => {
  return (
    <>
      <CategoryBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/search" element={<SearchPage />} /> 
        <Route path="/search/:category" element={<SearchPage />} />*/}
        <Route path="/books" element={<Books />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/footwear" element={<FootWear />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/furniture" element={<Electronics />} />
        <Route path="/view/:id" element={<DetailPage />} />
        <Route path="/search" element={<SearchAllPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
