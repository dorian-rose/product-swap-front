import { auth } from "../../config/firebaseConfig";
import google from "../../assets/google.png";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { dataFetch } from "../../helpers/fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * function that returns button, onclick manages firebase login with google
 */
export const LoginGoogle = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  /**
   * Function that calls firebase sign in with pop up and signs in user
   */
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      //variables for future use:
      const credential = await GoogleAuthProvider.credentialFromResult(result); // This gives you a Google Access Token. You can use it to access the Google API.
      const token = await credential.accessToken;
      //add user to database
      const user = result.user;
      //url, method and body for fetches
      const urlGet = `${import.meta.env.VITE_USER_URL}user?email=${user.email}`;
      const urlPost = `${import.meta.env.VITE_USER_URL}create`;
      const body = {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        role: "user",
      };
      const userExists = await dataFetch(urlGet);
      if (userExists.ok) {
        navigate("/");
      } else {
        const createNew = await dataFetch(urlPost, "POST", body);
        if (createNew.ok) {
          navigate("/");
        } else {
          setError("Error adding user to database. Try again later");
        }
      }
    } catch (error) {
      // Handle Errors
      const errorCode = error.code;
      const errorMessage = error.message;

      // The AuthCredential type that was used.
      setError(errorMessage);
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, credential);
    }
  };

  return (
    <article>
      <button
        className="block m-auto w-12 hover:w-14 mt-4 shadow-md p-2 rounded-full"
        onClick={loginWithGoogle}
      >
        <img className="w-full" src={google} alt="google logo" />
      </button>
      <p className="text-burgundy text-sm font-thin text-center mt-4">
        {error}
      </p>
    </article>
  );
};
