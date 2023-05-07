import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FavouriteButton } from "./FavouriteButton";
import { InterestedButton } from "./InterestedButton";

/**
 * function that receives data of product and presents it in return jsx
 * @param {Object} props Object whose properties contain product data
 */
export const ProductCards = (props) => {
  const { user, isAuthenticated } = useAuth0();

  //deconstruct variables from object to retrieve data of product
  const { title, description, formatdate, image, id_entry, email } = props;

  //text displayed in <p> in return will depend on user status
  let linkText = "";
  if (user?.email == email) {
    linkText = "View or update your item";
  } else {
    linkText = "View";
  }
  return (
    <article className="shadow-lg m-10 md:mx-5 flex flex-col justify-between">
      <div>
        <img
          className="w-full"
          src={`https://product-exchange.onrender.com/uploads/${image}`}
          alt={title}
        />
      </div>
      <h3 className="text-start m-5 capitalize font-normal tracking-wide text-turquoise text-xl">
        {title}
      </h3>
      <h4 className="mx-5 capitalize font-light">{description}</h4>
      <div className="flex justify-start m-5">
        {user?.email && user?.email != email && (
          <FavouriteButton product={props} />
        )}
        {!user && <InterestedButton />}
        <Link
          className="font-light m-3 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
          to={`/view/${id_entry}`}
        >
          {linkText}
        </Link>
      </div>
      <p className="m-5 text-xs font-light ">Date posted: {formatdate}</p>
    </article>
  );
};
