import { Routes, Route, Navigate } from "react-router-dom";
import { 
  DashboardPage, 
  AdminProductPage, 
  AdminDetailPage, 
  AdminDeletePage, 
  AdminUserPage,
  AdminUserDetailPage,

 } from "../admin/pages/index";
import {AdminNavBar } from "../admin/components/AdminNavBar"


export const AdminRouter = () => {
  return (
    <>
    <AdminNavBar />
     <main className="mx-10 md:mx-20">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/admin/users" element={<AdminUserPage />} /> 
        <Route path="admin/products" element={<AdminProductPage />} />
        <Route path="admin/detail/:id" element={<AdminDetailPage />} />
        <Route path="/admin/user/:id" element={<AdminUserDetailPage/>} />
        <Route path="admin/delete/:id" element={<AdminDeletePage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      </main>
    </>
  );
};
