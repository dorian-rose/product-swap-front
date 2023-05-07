import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * function that returns jsx of dashboard -that is, links to various admin locations
 */
export const DashboardPage = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <section className="mb-32">
      <h1 className="m-5 md:m-10 capitalize font-light text-center tracking-widest text-2xl md:text-3xl">
        Dashboard
      </h1>
      <div className="grid grid-cols-3">
        <article>
          <div>
            <Link to="/admin/products">
              {" "}
              <img
                className="w-3/4 block m-auto"
                src="src/assets/shopping-bags-line-icon-free-vector.jpeg"
                alt="products"
              />{" "}
              <p className="text-turquoise font-thin text-center">
                Manage products
              </p>{" "}
            </Link>
          </div>
        </article>
        <article>
          <Link to="/admin/users">
            {" "}
            <img
              className="pt-12  w-1/2 block m-auto"
              src="src/assets/user-group-296.png"
              alt="users"
            />{" "}
            <p className="text-turquoise font-thin text-center mt-4">
              Manage users
            </p>{" "}
          </Link>
        </article>
        <article>
          <div>
            {" "}
            <Link to="/">
              {" "}
              <img
                className="pt-10  w-1/2 block m-auto"
                src="src/assets/pen.png"
                alt=""
              />
              <p className="text-turquoise font-thin text-center mt-4">
                Manage texts
              </p>{" "}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};
