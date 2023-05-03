import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { FavouriteButton } from "./FavouriteButton";
import { InterestedButton } from "./InterestedButton";

export const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <section className="shadow-lg max-w-4xl mx-auto  grid md:grid-cols-2  justify-between">
        <div className="">
          <img
            className="w-full"
            src={`http://localhost:3000/uploads/${product.image}`}
            alt={product.title}
          />
        </div>
        <div className="product-info max-w-fit flex flex-col justify-center">
          <h1 className="uppercase tracking-widest text-2xl md:text-3xl m-5 md:m-10">
            {product.title}
          </h1>
          <p className="m-5 md:mx-10 md:my5">
            Description: {product.description}
          </p>

          <p className="m-5 md:mx-10 md:my5">
            Date posted: {product.formatdate}
          </p>
          <div className="consumer-buttons m-5 md:m-10">
            {!user && <InterestedButton />}
            {isAuthenticated && user.email != product.email && (
              <FavouriteButton product={product} />
            )}
          </div>
        </div>
      </section>

      {user?.email == product.email && (
        <div className="seller-buttons flex justify-center">
          <button
            className="text-center border rounded-md border-turquoise m-5  px-5 py-1  hover:bg-turquoise hover:text-white"
            onClick={() => navigate(`/api/update/${product.id_entry}`)}
          >
            Edit
          </button>
          <button
            className="text-center border rounded-md border-burgundy m-5 px-5 py-1  hover:bg-burgundy hover:text-white"
            onClick={() => navigate(`/api/delete/${product.id_entry}`)}
          >
            Delete
          </button>
        </div>
      )}

      <button
        className="block mx-auto mb-7 mt-1 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};
