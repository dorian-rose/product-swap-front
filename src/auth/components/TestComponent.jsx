import React from "react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Profile } from "./Profile";

export const TestComponent = () => {
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
};
