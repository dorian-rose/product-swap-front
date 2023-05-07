import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { useNavigate } from "react-router-dom";
import { dataFetch } from "../../helpers/fetch";

/**
 * returns an jsx of button - on click, dispatches a PUT to fetch, changing product's 'claimed' property value to false, or vice-versa if already false.
 * @param {Object} param0 receives properties product (object) and user (object)
 */
export const ReserveButton = ({ product, user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, description, image, category, email, id_entry } = product;

  //collect state
  const { products, isLoading } = useSelector((state) => state.products);

  //define  method, body and url for fetch
  const url = `${import.meta.env.VITE_PRODUCT_URL}update`;
  const method = "PUT";

  //set claimed value
  const claimed = products[0].claimed;

  let updateClaimed;
  if (claimed) {
    updateClaimed = false;
  } else {
    updateClaimed = true;
  }

  const body = {
    title: title,
    description: description,
    image: image,
    category: category,
    email: email,
    claimed: updateClaimed,
    id_entry: id_entry,
  };

  const update = async () => {
    await dataFetch(url, method, body);

    //update product state to reflect changed claimed state
    const getUrl = `${import.meta.env.VITE_PRODUCT_URL}entry?id=${id_entry}`;
    const getMethod = "GET";
    dispatch(getProducts(getUrl, getMethod));
    //navigate(`/view/${id_entry}`)
  };

  return (
    <>
      {isLoading && (
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      )}
      {!claimed ? (
        <button
          className="w-fit mb-4 mx-1 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
          onClick={update}
        >
          {user?.email == product.email && user?.role == "admin" ? (
            <>Mark as unavailable</>
          ) : (
            <>Reserve</>
          )}
        </button>
      ) : (
        <button
          className="w-fit mb-4 mx-1 border border-burgundy hover:bg-burgundy hover:text-white rounded-md px-2 shadow-lg"
          onClick={update}
        >
          Reserved
        </button>
      )}
    </>
  );
};
