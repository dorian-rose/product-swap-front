import { NavLink } from "react-router-dom";

// import { Hamburger } from "./components/Hamburger";
// import { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { LogoutButton } from "../auth/components/LogoutButton";
// import { LoginButton } from "../auth/components/LoginButton";

export const CategoryBar = () => {
  return (
    <div className=" flex flex-col md:flex-row  ">
      <ul className="md:p-4  flex flex-col md:flex-row text-end md:justify-between  mx-10">
        <li className="py-1 md:py-0 mt-2  md:hidden  ">
          <p>Categories</p>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
            }
          >
            Books
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/clothing"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
            }
          >
            Clothing
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/footwear"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
            }
          >
            Footwear
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/furniture"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
            }
          >
            Furniture
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
            }
          >
            Electronics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
