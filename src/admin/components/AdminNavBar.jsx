import { Search } from "../../products/components/Search";
import { Hamburger } from "../../ui/components/Hamburger";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "../../auth/components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export const AdminNavBar = () => {
  const { isAuthenticated } = useAuth0();
  const [menuPosition, setMenuPosition] = useState("hidden");
  const changePosition = () => {
    if (menuPosition == "block") {
      setMenuPosition("hidden");
    } else {
      setMenuPosition("block");
    }
  };
  return (
    <nav className="mb-10 border-b pb-5 md:pb-0">
      <div className="grid grid-flow-col auto-cols-auto pt-4 m-5  md:hidden">
        <Search />
        {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
        <Hamburger
          changePosition={changePosition}
          menuPosition={menuPosition}
        />
      </div>
      <div className={`menu ${menuPosition} md:block md:border-b`}>
       
      <ul className="relative md:p-4  flex flex-col md:flex-row text-end md:justify-between  mx-10">
        
        
          <li className="py-1 md:py-0">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
              }
            >
            Home
            </NavLink>
          </li>
       
        {isAuthenticated && (
          <li className="py-1 md:py-0">
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
              }
            >
             Products
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li className="py-1 md:py-0">
            <NavLink
              to="/api/favourites"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
              }
            >
             Add link
            </NavLink>
          </li>
        )}
        <li className="py-1 md:py-0 hidden md:inline">
          <Search />
        </li>
        <li className="py-1 md:py-0 md:ms-2">
        <LogoutButton /> 
        </li>
      </ul>
    </div>
     
    </nav>
  );
};
