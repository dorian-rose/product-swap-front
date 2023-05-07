import { useState, useEffect } from "react";
import { ProductCards } from "../../products/components/ProductCards";
import { setLocal, getLocal } from "../../products/helpers/localStorage";
import { useAuth0 } from "@auth0/auth0-react";
import { setFavourites } from "../../store/slice/favourites/faveSlice"
import { useDispatch, useSelector } from "react-redux";
/**
 * function that collects user from auth and favourites from local and returns component, passing it these variables as props
 * @returns component
 */
export const FavouritesPage = () => {
  const { user } = useAuth0();
  //const [favourites, setFavourites]=useState(getLocal(user.email))
 //collect data from state
  const {favouritesArray} = useSelector(
    (state) => state.favourites
  );

  return (
    <section>
      <h1 className="uppercase text-center tracking-widest text-2xl md:text-3xl">
        Favourites
      </h1>
      <h2 className="tracking-widest text-base md:text-lg font-light mt-7">
        View, buy or remove your favourite items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!favouritesArray || favouritesArray.length == 0 ? (
          <p className="tracking-widest text-burgundy text-base font-light my-7">
            You have items in favourites
          </p>
        ) : (
          favouritesArray.map((product) => (
            <ProductCards key={product.id_entry} {...product} />
          ))
        )}
      </div>
    </section>
  );
};
