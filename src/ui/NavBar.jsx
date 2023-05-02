import { Search } from "../products/components/Search";
import { CategoryBar } from "./CategoryBar";
import { UserBar } from "./UserBar";
import { Hamburger } from "./components/Hamburger";
import { useState } from "react";
import { LogoutButton } from "../auth/components/LogoutButton";
import { LoginButton } from "../auth/components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
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
      <div className={`${menuPosition} md:block`}>
        <UserBar />
        <CategoryBar />
      </div>
    </nav>
  );
};
