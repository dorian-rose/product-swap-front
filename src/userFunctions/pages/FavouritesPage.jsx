import { ProductCards } from "../../products/components/ProductCards";
import { setLocal, getLocal } from "../../products/helpers/localStorage";
import { useAuth0 } from "@auth0/auth0-react";

export const FavouritesPage = () => {
  const { user } = useAuth0();
  const favourites = getLocal(user.email);

  return (
    <section>
      <h1 className="uppercase text-center tracking-widest text-2xl md:text-3xl">
        Favourites
      </h1>
      <h2 className="tracking-widest text-base md:text-lg font-light mt-7">
        View, buy or remove your favourite items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!favourites || favourites.length == 0 ? (
          <p className="text-red-600 m-5">No items in favourites</p>
        ) : (
          favourites.map((product) => (
            <ProductCards key={product.id_entry} {...product} />
          ))
        )}
      </div>
    </section>
  );
};
