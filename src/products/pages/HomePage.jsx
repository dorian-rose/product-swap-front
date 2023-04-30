import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../auth/components/LoginButton";
import { Search } from "../components/Search";

export const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <section className="mg-md">
        <Search />
        <h1 className="title">Homepage</h1>
        {!isAuthenticated && <LoginButton />}
      </section>
    </>
  );
};
