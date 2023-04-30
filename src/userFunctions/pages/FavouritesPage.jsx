import { ProductCards } from "../../products/components/ProductCards";
import { setLocal, getLocal } from "../../products/helpers/localStorage";
import { useAuth0 } from "@auth0/auth0-react";

export const FavouritesPage = () => {
  const { user } = useAuth0();
  const favourites = getLocal(user.email);
  console.log(favourites);
  return (
    <section>
      <h1>Your favourite items</h1>
      <h2>View, buy or remove your favourite items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {favourites.map((product) => (
          <ProductCards key={product.id_entry} {...product} />
        ))}
      </div>
    </section>
  );
};
