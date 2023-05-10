import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./components/LogoutButton";
import { LoginButton } from "./components/LoginButton";
import { Search } from "../products/components/Search";

export const UserBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="md:border-b">
      <ul className="relative md:p-4 ms-16 flex flex-col md:flex-row text-end md:justify-end mx-10 md:mx-2  lg:mx-10">
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
              Add item
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
              My items
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
        <li className="py-1 md:py-0 ">
          <Link
            className="font-thin border rounded-md p-1 max-w-fit"
            to={"/api/change"}
          >
            Profile
          </Link>
        </li>

        <li className="py-1 md:py-0 md:ms-2">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </li>
      </ul>
    </div>
  );
};
