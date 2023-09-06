import { AdminSearch } from "./AdminSearch";
import { Hamburger } from "../../ui/components/Hamburger";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import tree_logo from "../../assets/tree_logo.jpg";
import { Logout } from "../../auth/components/Logout";

/**
 * returns ejs of nav bar, directing via NavLinks to other admin locations
 */
export const AdminNavBar = () => {
  //collect state
  const { uid, displayName, isAuthenticated } = useSelector(
    (state) => state.logged
  );
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
      <div className="w-12">
        <img
          className="w-12 start-4 absolute top-32 md:top-28"
          src={tree_logo}
          alt="logo"
        />{" "}
      </div>
      <Link
        className="absolute hidden md:block start-20 lg:start-28 top-28 logo-text text-3xl text-turquoise"
        to="/"
      >
        Gumtree
      </Link>

      <div className="grid grid-flow-col auto-cols-auto pt-4 ms-24 my-5  md:hidden">
        <AdminSearch />
        {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
        <Hamburger
          changePosition={changePosition}
          menuPosition={menuPosition}
        />
      </div>
      <div className={`menu ${menuPosition} md:block md:border-b`}>
        <ul className="relative md:p-4  flex flex-col md:flex-row text-end md:justify-end  mx-10">
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
                to="/admin/users"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
                }
              >
                Users
              </NavLink>
            </li>
          )}
          <li className="py-1 md:py-0 hidden md:inline">
            <AdminSearch />
          </li>
          <li className="py-1 md:py-0 md:ms-2">
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
};
