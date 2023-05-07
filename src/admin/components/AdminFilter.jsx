import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";

/**
 * receives filters via select input and dispatches to fetch and product reducer accordingingly
 */
export const AdminFilter = () => {
  const dispatch = useDispatch();

  //filters

  /**
   * function that receives category and calls fetch (then dispatch to reducer)
   * @param {Event} param0 destructured to reveal event target, target's value will be category
   */
  const filter = ({ target }) => {
    const category = target.value;

    //set variables for fetch and fetch url
    const limit = import.meta.env.VITE_LIMIT;

    let url;
    //if no category, collect results from all categories
    if (category == "all") {
      url = `${import.meta.env.VITE_PRODUCT_URL}entries?limit=${limit}&page=`;
    } else {
      url = `${
        import.meta.env.VITE_PRODUCT_URL
      }category?category=${category}&limit=${limit}&page=`;
    }

    const method = "GET";

    //dispatch to fetch
    dispatch(getProducts(url + 1, method));
  };

  return (
    <>
      <label
        className="mx-3 tracking-widest text-base  font-light mt-7"
        htmlFor="category"
      >
        Filter by category:
      </label>
      <select
        className="mx-1 tracking-widest text-base  font-light mt-7 border rounded-md"
        onChange={filter}
        id="category"
        name="category"
      >
        <option value="all">All</option>
        <option value="footwear">Footwear</option>
        <option value="furniture">Furniture</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
        <option value="electronics">Electronics</option>
      </select>
    </>
  );
};
