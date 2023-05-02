import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FavouriteButton } from "./FavouriteButton";
import { InterestedButton } from "./InterestedButton";
export const ProductCards = (props) => {
  const { user } = useAuth0();

  const { title, description, formatdate, image, id_entry, email } = props;

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
          src={`http://localhost:3000/uploads/${image}`}
          alt={title}
        />
      </div>
      <h3 className="text-start m-5 capitalize font-normal tracking-wide text-turquoise text-xl">
        {title}
      </h3>
      <h4 className="mx-5 capitalize font-light">{description}</h4>
      <div className="flex justify-start m-3">
        {user?.email && user?.email != email && (
          <FavouriteButton product={props} />
        )}
        {!user && <InterestedButton />}
        <p className="m-3 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg">
          <Link className="font-light" to={`/view/${id_entry}`}>
            {linkText}
          </Link>
        </p>
      </div>
      <p className="m-5 text-xs font-light ">Date posted: {formatdate}</p>
    </article>
  );
};
