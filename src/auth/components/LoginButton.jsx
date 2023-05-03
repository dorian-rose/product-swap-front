import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="border rounded-md px1 max-w-fit"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};
