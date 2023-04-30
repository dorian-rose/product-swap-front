import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../auth/pages/HomePages";
//import { NavBar } from "../ui/NavBar";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
