import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/LoginButton";

export const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);

  return (
    <section className="mg-md">
      <h1 className="title">Homepage</h1>
      <LoginButton />
    </section>
  );
};
