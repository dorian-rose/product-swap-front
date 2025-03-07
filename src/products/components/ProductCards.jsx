import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FavouriteButton } from "./FavouriteButton";
import { InterestedButton } from "./InterestedButton";
import { useSelector } from "react-redux";
import { useEffect } from "react";

/**
 * function that receives data of product and presents it in return jsx
 * @param {Object} props Object whose properties contain product data
 */
export const ProductCards = (props) => {
  //collect state
  const { isAuthenticated, email: userEmail } = useSelector(
    (state) => state.logged
  );

  //deconstruct variables from object to retrieve data of product
  const { title, description, formatdate, image, id_entry, email } = props;

  //text displayed in <p> in return will depend on user status
  let linkText = "";
  if (userEmail == email) {
    linkText = "View or update your item";
  } else {
    linkText = "View";
  }
  return (
    <article className="shadow-lg my-10 mx-5 flex flex-col justify-between">
      <div>
        <img className="w-full" src={image} alt={title} />
      </div>
      <h3 className="text-start m-5 capitalize font-normal tracking-wide text-turquoise text-xl">
        {title}
      </h3>
      <h4 className="mx-5 capitalize font-light">{description}</h4>
      <div className="flex justify-start m-5 ">
        {isAuthenticated && userEmail != email && (
          <FavouriteButton product={props} />
        )}
        {!isAuthenticated && <InterestedButton />}
        <Link
          className="font-light m-3 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
          to={`/view/${id_entry}`}
        >
          {linkText}
        </Link>
      </div>
      <p className="mx-5 mb-5 text-xs font-light ">Date posted: {formatdate}</p>
    </article>
  );
};
