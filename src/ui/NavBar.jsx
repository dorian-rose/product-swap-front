import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../auth/components/LogoutButton";
import { LoginButton } from "../auth/components/LoginButton";

export const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <ul className="relative px-4 py-4 flex flex-col md:flex-row justify-between items-right bg-white">
        {isAuthenticated && (
          <li>
            <NavLink
              to="/api/add"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2`
              }
            >
              List an item
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <NavLink
              to="/api/user"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2`
              }
            >
              Manage my items
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <NavLink
              to="/api/favourites"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2`
              }
            >
              View Favourites
            </NavLink>
          </li>
        )}

        {isAuthenticated ? (
          <li className="m-3">
            <LogoutButton />
          </li>
        ) : (
          <li className="m-3">
            <LoginButton />
          </li>
        )}
      </ul>
    </div>
  );
};
