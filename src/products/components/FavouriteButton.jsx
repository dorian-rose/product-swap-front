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
    setInFave(false);
  };

  //on any change in favourites state, update local storage
  useEffect(() => {
    setLocal(user.email, favourites);
  }, [favourites]);

  console.log(inFave);

  return (
    <>
      {!inFave ? (
        <button onClick={addFavourites} className="w-6">
          Add
        </button>
      ) : (
        <button onClick={removeFavourites} className="w-6">
          Remove
        </button>
      )}
    </>
  );
};
