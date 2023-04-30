import { NavLink } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import { LogoutButton } from "../auth/components/LogoutButton";
// import { LoginButton } from "../auth/components/LoginButton";

export const CategoryBar = () => {
  return (
    <div className="category-filter">
      <ul className="flex-row jst-cntr">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothing"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/footwear"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Footwear
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Electronics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
