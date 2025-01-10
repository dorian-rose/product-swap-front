import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AccessForm } from "../components/AccessForm";
import { LoginGoogle } from "../components/LoginGoogle";
import { setLogged } from "../../store/slice/logged/loggedSlice";
//import { FooterSignIn } from "../../ui/FooterSignIn";
//firebase imports
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * function that returns jsx login options including form and on submit of form manages firebase login with form data
 */
export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");

  /**
   * function that takes user data and uses it to enter user in application using firebase sign in with email and password
   * @param {Object} data form field entries from component access form, to which component this function is passed
   */
  const enterUser = async (data) => {
    console.log("entering user at login page");
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      navigate("/");
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setErrors("Usuario o contraseña no correcto");
      } else {
        setErrors("Algo no funciona, inténtalo de nuevo");
        console.log("error at sign in in with email and pass", error);
      }
    }
  };

  return (
    <>
      <section className="max-w-2xl m-auto mb-16">
        <h1 className="mb-10 sm:mt-20 text-center text-turquoise text-2xl font-thin ">
          Welcome back!
        </h1>
        <article>
          <AccessForm enterUser={enterUser} nameHidden={true} />
          <p className="text-alert text-sm font-thin text-center mt-4">
            {errors}
          </p>
        </article>
        <article className="mx-4 mt-10 sm:mt-20 border-t border-slate">
          <p className="relative -top-3 left-1/2 -translate-x-1/2 bg-white w-fit px-2 font-thin ">
            Or login with
          </p>
          <LoginGoogle />
          <p className="sm:mt-10 text-sm text-lines text-center font-thin">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="font-bold hover:text-secondary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </article>
        {/* <FooterSignIn /> */}
      </section>
    </>
  );
};
