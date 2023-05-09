import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FavouriteButton } from "./FavouriteButton";
import { InterestedButton } from "./InterestedButton";
import { ReserveButton } from "./ReserveButton";

/**
 * function that receives product data and returns jsx displaying data
 * @param {Object} param0 deconstructed =>"product"=> product data
 */
export const ProductDetail = ({ product }) => {
  //navigate to redirect
  const navigate = useNavigate();
  //which buttons are displayed will depend on user property - if authenticated, if product owner and role
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <section className="shadow-lg max-w-4xl mx-auto  grid md:grid-cols-2  justify-between">
        <div className="">
          <img
            className="w-full"
            src={`https://product-exchange.onrender.com/uploads/${product.image}`}
            alt={product.title}
          />
        </div>
        <div className="product-info max-w-fit flex flex-col justify-center">
          <h1 className="uppercase tracking-widest text-2xl md:text-3xl m-5 md:m-10 font-light text-turquoise">
            {product.title}
          </h1>
          <p className="m-5 md:mx-10 md:my5 tracking-wide font-thin text-lg">
            Description: {product.description}
          </p>

          <p className="m-5 md:mx-10 md:my5 tracking-wide font-thin">
            Date posted: {product.formatdate}
          </p>
          <div className="consumer-buttons m-5 md:m-10">
            {!user && <InterestedButton />}
            {isAuthenticated &&
              user.email != product.email &&
              user?.role != "admin" && (
                <div className="flex flex-col">
                  <FavouriteButton product={product} />
                  <ReserveButton product={product} user={user} />
                  <button
                    className="w-fit mb-4 mx-1 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
                    onClick={() => navigate(`/api/send/${product.id_entry}`)}
                  >
                    Contact poster
                  </button>
                </div>
              )}
          </div>
        </div>
      </section>

      {(user?.email == product.email) | (user?.role == "admin") && (
        <div className="seller-buttons flex justify-center">
          {user?.role != "admin" && (
            <button
              className="text-center border rounded-md border-turquoise m-5  px-5 py-1  hover:bg-turquoise hover:text-white"
              onClick={() => navigate(`/api/update/${product.id_entry}`)}
            >
              Edit
            </button>
          )}
          <button
            className="text-center border rounded-md border-burgundy m-5 px-5 py-1  hover:bg-burgundy hover:text-white"
            onClick={() => navigate(`/api/delete/${product.id_entry}`)}
          >
            Delete
          </button>
        </div>
      )}

      <button
        className="block mx-auto mb-7 mt-4 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};
