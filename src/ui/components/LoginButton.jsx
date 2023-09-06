import { Link } from "react-router-dom";

export const LoginButton = () => {
  return (
    <Link className="border rounded-md px-1 max-w-fit" to="/login">
      Log In
    </Link>
  );
};
