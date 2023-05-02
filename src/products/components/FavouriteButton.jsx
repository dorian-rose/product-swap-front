import { getLocal, setLocal } from "../helpers/localStorage";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const FavouriteButton = ({ product }) => {
  const { user } = useAuth0();
  const [inFave, setInFave] = useState(false);
  const [favourites, setFavourites] = useState(getLocal(user.email));

  //onclick favourite button, add to favourites state
  const addFavourites = () => {
    setFavourites([...favourites, product]);
    setInFave(true);
  };

  //onclick remove button, remove product from favourites state
  const removeFavourites = () => {
    const newFavourites = favourites.filter(
      (fave) => fave.id_entry != product.id_entry
    );
    setFavourites(newFavourites);
  };

  //on any change in favourites state, update local storage
  useEffect(() => {
    setLocal(user.email, favourites);
    const exist = favourites.some((fave) => fave.id_entry == product.id_entry);

    setInFave(exist);
  }, [favourites]);

  return (
    <>
      {!inFave ? (
        <button onClick={addFavourites} className="w-6 mx-auto mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      ) : (
        <button onClick={removeFavourites} className="w-6 mx-auto mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      )}
    </>
  );
};
