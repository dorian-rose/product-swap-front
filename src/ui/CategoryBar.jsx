import { NavLink } from "react-router-dom";
import { Search } from "../products/components/Search";
// import { useAuth0 } from "@auth0/auth0-react";
// import { LogoutButton } from "../auth/components/LogoutButton";
// import { LoginButton } from "../auth/components/LoginButton";

export const CategoryBar = () => {
  return (
    <div>
      <ul className="relative px-4 py-4 flex flex-col md:flex-row justify-between items-left bg-white">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2`
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothing"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2`
            }
          >
            Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/footwear"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2`
            }
          >
            Footwear
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2`
            }
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} m-2`
            }
          >
            Electronics
          </NavLink>
        </li>
        <li className="m-3">
          <Search />
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Search all products
          </NavLink> */}
        </li>
      </ul>
    </div>
  );
};
