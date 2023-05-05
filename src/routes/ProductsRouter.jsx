import { Routes, Route, Navigate } from "react-router-dom";
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
import { CollectDataPage } from "../auth/pages/CollectDataPage";
import { NavBar } from "../ui/NavBar";


export const ProductsRouter = () => {
  return (
    <><nav>
          <NavBar />
        </nav> 
         <main className="mx-10 md:mx-20">
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/search" element={<SearchPage />} /> 
        <Route path="/search/:category" element={<SearchPage />} />*/}
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
