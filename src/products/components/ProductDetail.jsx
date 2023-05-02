import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { FavouriteButton } from "./FavouriteButton";
import { InterestedButton } from "./InterestedButton";

export const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <h2 className="m-10">{product.title}</h2>
      <section className="shadow-lg m20 flex flex-col justify-between">
        <div className="mx-auto w-80">
          <img
            className="w100"
            src={`http://localhost:3000/uploads/${product.image}`}
            alt={product.title}
          />
        </div>
        <div className="mx-auto">
          <p className="m-10">Description: {product.description}</p>

          <p className="m-10">Date posted: {product.formatdate}</p>
        </div>
        {!user && <InterestedButton />}
        {isAuthenticated && user.email != product.email && (
          <div className="flex justify-center">
            <FavouriteButton product={product} />
          </div>
        )}
      </section>

      {user?.email == product.email && (
        <div className="txt-cntr pd-sm w100 block">
          <button
            className="text-center border rounded-md border-blue-400 m-5  px-5 py-1  hover:bg-slate-50"
            onClick={() => navigate(`/api/update/${product.id_entry}`)}
          >
            Edit item
          </button>
          <button
            className="text-center border rounded-md border-red-400 m-5 px-5 py-1  hover:bg-slate-50"
            onClick={() => navigate(`/api/delete/${product.id_entry}`)}
          >
            Delete item
          </button>
        </div>
      )}

      <p>
        <button
          className="text-center border rounded-md border-black-600 my-5 mx-auto px-5 py-1 block hover:bg-slate-50"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </p>
    </div>
  );
};
