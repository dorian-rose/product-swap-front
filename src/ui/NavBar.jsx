import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../auth/components/LogoutButton";
import { LoginButton } from "../auth/components/LoginButton";

export const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className="bg-dark">
      <ul className="flex-row jst-cntr">
        <li className="mg-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "isActive" : ""} `
            }
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className="mg-md">
            <NavLink
              to="/api/add"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} `
              }
            >
              List an item
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li className="mg-md">
            <NavLink
              to="/api/user"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} `
              }
            >
              Manage my items
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li className="mg-md">
            <NavLink
              to="/api/favourites"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} `
              }
            >
              View Favourites
            </NavLink>
          </li>
        )}

        {isAuthenticated ? (
          <li>
            <LogoutButton />
          </li>
        ) : (
          <li>
            <LoginButton />
          </li>
        )}
      </ul>
    </nav>
  );
};
