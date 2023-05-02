import { useAuth0 } from "@auth0/auth0-react";

export const InterestedButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="text-center border rounded-md border-blue-400 m-5  px-5 py-1  hover:bg-slate-50"
      onClick={() => loginWithRedirect()}
    >
      Interested? Sign up!
    </button>
  );
};
