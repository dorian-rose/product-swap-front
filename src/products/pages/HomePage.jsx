import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slice/users/userThunk";
import { getProducts } from "../../store/slice/products/thunk";
import { auth } from "../../config/firebaseConfig";

import tree_logo from "../../assets/tree_logo.jpg";
/**
 * function that returns welcome message jsx. jsx is conditional and view will depend on user/isAuthenticated status
 */
export const HomePage = () => {
  const dispatch = useDispatch();

  // //connect to db
  // useEffect(() => {
  //   const urlConnect = `${
  //     import.meta.env.VITE_PRODUCT_URL
  //   }entries?limit=1&page=1`;
  //   dispatch(getProducts(urlConnect, "GET"));
  // }, []);

  //collect state
  const { displayName, isAuthenticated } = useSelector((state) => state.logged);

  return (
    <>
      <section className="grid md:grid-cols-2 mb-10">
        <article className="md:flex md:flex-col md:justify-center">
          {isAuthenticated ? (
            <>
              <h1 className="m-5 md:m-10 capitalize font-light text-center tracking-widest text-2xl md:text-3xl">
                Welcome, {displayName}!
              </h1>
              <h2 className="font-thin mb-5 text-center tracking-widest text-xl text-turquoise">
                Thank you for using Gumtree
              </h2>
              <p className="font-thin m-5 text-center tracking-widest ">
                By using Gumtree you are helping the fight against consumerism
                and contributing to the health of our planet.
              </p>
            </>
          ) : (
            <>
              <h1 className="m-5 capitalize font-light text-center tracking-widest text-2xl md:text-3xl">
                {" "}
                Welcome!
              </h1>

              <h2 className="font-thin mb-5 text-center tracking-widest text-xl text-turquoise">
                Hey, what are you going to do with that if you don't use it
                anymore?{" "}
              </h2>
              <p className="font-thin m-5 text-center tracking-widest ">
                On Gumtree you can list items you no longer use, and gain items
                you want or need! Exchange, gift and receive to save money and
                help our environment.
              </p>
              <Link
                className="m-auto md:mx-0 lg:mx-20 md:my-5 block font-thin border rounded-md px-1 text-center tracking-widest hover:border-teal-400 "
                to="/login"
              >
                Log in or Sign up to get started now!
              </Link>
            </>
          )}
        </article>
        <div className="w-3/4 mx-auto my-10 md:flex md:flex-col md:justify-center">
          <img src={tree_logo} alt="logo" />
        </div>
      </section>
    </>
  );
};
