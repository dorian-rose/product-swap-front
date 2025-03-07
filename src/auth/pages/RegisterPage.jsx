import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AccessForm } from "../components/AccessForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataFetch } from "../../helpers/fetch";
import { setLogged } from "../../store/slice/logged/loggedSlice";
//import { FooterSignIn } from "../../ui/FooterSignIn";
import { LoginGoogle } from "../components/LoginGoogle";
//firebase imports
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

/**
 * function that returns jsx sign up/register options including form and on submit of form manages firebase registration with form data
 */
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  /**
   * function that takes user data and uses it to enter user in application using firebase create user with email and password
   * @param {Object} data form field entries from component access form, to which component this function is passed
   */
  const enterUser = async (data) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const { uid, photoURL, email, displayName } = response.user;

      //url, method and body for post to user db
      const url = `${import.meta.env.VITE_USER_URL}create`;
      const method = "POST";

      //set name -either from name field or adapted from email in its defect
      if (data.name) {
        //add nameto firebase profile
        await updateProfile(auth.currentUser, {
          displayName: data.name,
        });
        //POST to api
        const body = { id: uid, email, name: data.name, role: "user" };
        await dataFetch(url, method, body);
        //set name to show on homepage
        dispatch(
          setLogged({
            displayName: data.name,
            uid,
            email,
            photoURL,
            isAuthenticated: true,
            role: "user",
          })
        );
      } else {
        const nameArray = data.email.split("@");
        console.log(nameArray);
        const newName = nameArray[0];
        console.log(newName);
        //add nameto firebase profile
        await updateProfile(auth.currentUser, {
          displayName: newName,
        });
        //POST to api
        const body = { id: uid, email, name: newName, role: "user" };
        await dataFetch(url, method, body);
        //set name to show on homepage
        dispatch(
          setLogged({
            displayName: newName,
            uid,
            email,
            photoURL,
            isAuthenticated: true,
            role: "user",
          })
        );
      }

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors("Este email ya tiene cuenta");
      } else if (error.code === "auth/invalid-email") {
        setErrors("Email no válido");
      } else if (error.code === "auth/weak-password") {
        setErrors("Contraseña no es segura");
      } else if (error.code) {
        setErrors("Algo no funciona. Inténtalo luego");
      }
    }
  };

  return (
    <>
      <section className="max-w-2xl m-auto mb-16">
        <h1 className="mb-6 sm:mt-20 text-center text-turquoise text-2xl font-thin ">
          Welcome!
        </h1>
        <article>
          <AccessForm enterUser={enterUser} nameHidden={false} />
        </article>
        <p className="text-alert text-sm font-thin text-center mt-4">
          {errors}
        </p>
        <article className="mx-4 mt-10 border-t border-slate">
          <p className="relative -top-3 left-1/2 -translate-x-1/2 bg-white w-fit px-2 font-thin ">
            Or sign up with
          </p>
          <LoginGoogle />
          <p className="sm:mt-10 text-sm text-center text-lines font-thin">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold hover:text-secondary hover:underline"
            >
              Login
            </Link>
          </p>
        </article>
        {/* <FooterSignIn /> */}
      </section>
    </>
  );
};
