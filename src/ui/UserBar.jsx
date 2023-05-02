import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../auth/components/LogoutButton";
import { LoginButton } from "../auth/components/LoginButton";
import { Search } from "../products/components/Search";

export const UserBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="md:border-b">
      <ul className="relative md:p-4  flex flex-col md:flex-row text-end md:justify-between  mx-10">
        <li className="py-1 md:py-0 hidden md:inline">
          <Search />
        </li>
        {isAuthenticated && (
          <li className="py-1 md:py-0">
            <NavLink
              to="/api/add"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
              }
            >
              List item
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li className="py-1 md:py-0">
            <NavLink
              to="/api/user"
              className={({ isActive }) =>
                `nav-link ${isActive ? "isActive" : ""} m-2 font-thin`
              }
            >
              Manage items
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
              Favourites
            </NavLink>
          </li>
        )}

        <li className="py-1 md:py-0 md:ms-2">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </li>
      </ul>
    </div>
  );
};
