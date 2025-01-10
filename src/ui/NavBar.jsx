import { Search } from "../products/components/Search";
import { CategoryBar } from "./CategoryBar";
import { UserBar } from "./UserBar";
import { Hamburger } from "./components/Hamburger";
import { useState } from "react";
import tree_logo from "../assets/tree_logo.jpg";

export const NavBar = () => {
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
          className="w-12 start-4 absolute top-28 md:top-28"
          src={tree_logo}
          alt=""
        />{" "}
      </div>
      <p className="absolute hidden lg:block start-28 top-28 logo-text text-3xl text-turquoise">
        Gumtree
      </p>
      <div className="ms-24 flex justify-end mx-5 mt-6  md:hidden">
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
