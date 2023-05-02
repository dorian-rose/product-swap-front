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
    linkText = "View  item";
  }
  return (
    <article className="shadow-lg m-10 md:mx-5 flex flex-col justify-between">
      <h3 className="text-center m-5 capitalize">{title}</h3>
      <h4 className="mx-3 capitalize">{description}</h4>
      <div>
        <img
          className="w100"
          src={`http://localhost:3000/uploads/${image}`}
          alt={title}
        />
      </div>
      <p className="txt-cntr mg-sm">Date posted: {formatdate}</p>
      {user?.email && user?.email != email && (
        <FavouriteButton product={props} />
      )}
      {!user && <InterestedButton />}
      <p>
        <Link
          className=" txt-cntr bg-dark pd-sm w100 block"
          to={`/view/${id_entry}`}
        >
          {linkText}
        </Link>
      </p>
    </article>
  );
};
