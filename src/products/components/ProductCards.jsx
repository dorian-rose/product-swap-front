import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export const ProductCards = (props) => {
  const { user } = useAuth0();
  const { title, description, formatdate, image, id_entry, email } = props;
  let linkText = "";
  user.email == email
    ? (linkText = "View or update your item")
    : (linkText = "View item");
  return (
    <article className="shadow-lg m-10 md:mx-5 flex flex-col justify-between">
      <h3 className="txt-cntr mg-sm">{title}</h3>
      <h4>{description}</h4>
      <div>
        <img className="w100" src={image} alt={title} />
      </div>
      <p className="txt-cntr mg-sm">Date posted: {formatdate}</p>
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
