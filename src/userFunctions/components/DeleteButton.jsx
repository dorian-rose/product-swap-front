import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../products/store/slice/products/thunk";
import { useNavigate } from "react-router-dom";

export const DeleteButton = ({ id_entry }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //collect data from state
  const { ok, page, products, isLoading, total_pages } = useSelector(
    (state) => state.products
  );

  //define body, method and url for fetch
  const body = { id_entry };

  const url = `${import.meta.env.VITE_PRODUCT_URL}delete`;
  const method = "DELETE";

  //on click of button
  const handleClick = (ev) => {
    ev.preventDefault();
    dispatch(getProducts(url, method, body)); //id as body
  };
  return (
    <button className="sd-pd-sm mg-sm" onClick={handleClick}>
      Delete
    </button>
  );
};
