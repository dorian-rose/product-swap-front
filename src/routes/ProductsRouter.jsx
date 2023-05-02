import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  Books,
  ClothingPage,
  FootWear,
  Furniture,
  ElectronicsPage,
  DetailPage,
  SearchAllPage,
} from "../products/pages/index";
//import { NavBar } from "../ui/NavBar";
import { CategoryBar } from "../ui/CategoryBar";

export const ProductsRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/search" element={<SearchPage />} /> 
        <Route path="/search/:category" element={<SearchPage />} />*/}
        <Route path="/books" element={<Books />} />
        <Route path="/clothing" element={<ClothingPage />} />
        <Route path="/footwear" element={<FootWear />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/view/:id" element={<DetailPage />} />
        <Route path="/search" element={<SearchAllPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
