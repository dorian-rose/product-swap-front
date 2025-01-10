import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

/**
 * function that returns jsx button onclick of which logout function is called
 */
export const Logout = () => {
  const navigate = useNavigate();

  /**
   * function that calls firebase imported signOut funcion and navigates home
   */
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="border rounded-md px-1 max-w-fit" onClick={logOut}>
        Logout
      </button>
    </>
  );
};
