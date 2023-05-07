import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";

/**
 *function that receives id of a product dispatches via a DELETE fetch
 * @param {Object} param0 desconstructed to receive id_entry
 */
export const DeleteButton = ({ id_entry }) => {
  const dispatch = useDispatch();

  //collect data from state
  const { ok, page, products, isLoading, total_pages } = useSelector(
    (state) => state.products
  );

  //define body, method and url for fetch
  const body = { id_entry };

  const url = `${import.meta.env.VITE_PRODUCT_URL}delete`;
  const method = "DELETE";

  /**
   * function that calls fetch with DELETE request
   * @param {Event} ev
   */
  const handleClick = (ev) => {
    ev.preventDefault();
    dispatch(getProducts(url, method, body)); //id as body
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
