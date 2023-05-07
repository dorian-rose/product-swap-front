import { useDispatch } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { useNavigate } from "react-router-dom";

/**
 *function that receives id of a product dispatches via a DELETE fetch
 * @param {Object} param0 desconstructed to receive id_entry
 */
export const AdminDeleteButton = ({ id_entry }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //define body, method and url for fetch
  const body = { id_entry };

  const url = `${import.meta.env.VITE_PRODUCT_URL}delete`;
  const method = "DELETE";

  //on click of button
  const handleClick = (ev) => {
    ev.preventDefault();
    dispatch(getProducts(url, method, body)); //id as body
    navigate("/admin/products");
  };
  return (
    <button
      className="text-center border rounded-md border-burgundy m-5 px-5 py-1  hover:bg-burgundy hover:text-white"
      onClick={handleClick}
    >
      Delete
    </button>
  );
};
