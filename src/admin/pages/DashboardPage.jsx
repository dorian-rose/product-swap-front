import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const DashboardPage = () => {
  const {user}= useAuth0()
  console.log(user?.role == "admin")
  return(<div>DashboardPage</div>);
};
