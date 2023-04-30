import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { FavouriteButton } from "./FavouriteButton";

export const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <h2 className="m-10">{product.title}</h2>
      <section className="shadow-lg m20 flex flex-col justify-between">
        <div className="mx-auto">
          <img className="w100" src={product.image} alt={product.title} />
        </div>
        <div className="mx-auto">
          <p className="m-10">Description: {product.description}</p>

          <p className="m-10">Date posted: {product.formatdate}</p>
        </div>
      </section>
      {isAuthenticated && user.email != product.email && (
        <div className="flex justify-center">
          <FavouriteButton product={product} />
        </div>
      )}
      {user.email == product.email && (
        <div className="txt-cntr pd-sm w100 block">
          <button
            className="sd-pd-sm mg-sm"
            onClick={() => navigate(`/api/update/${product.id_entry}`)}
          >
            Edit item
          </button>
          <button
            className="sd-pd-sm mg-sm"
            onClick={() => navigate(`/api/delete/${product.id_entry}`)}
          >
            Delete item
          </button>
        </div>
      )}
      <p>
        <button
          className="txt-cntr bg-dark pd-sm w100 block"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </p>
    </div>
  );
};
