import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { ProductCards } from "../components/ProductCards";
import { Search } from "../components/Search";

export const Clothing = () => {
  const category = "clothing";
  //collect data from state
  const { ok, page, products, isLoading, total_pages } = useSelector(
    (state) => state.products
  );

  //set variables for fetch and fetch url
  const limit = import.meta.env.VITE_LIMIT;
  const url = `${import.meta.env.VITE_PRODUCT_URL}entries?limit=${limit}&page=`;
  const method = "GET";

  console.log(ok); //manage errors here

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url + 1, method));
  }, []);

  return (
    <div>
      <Search category={category} />
      <h1>Clothing</h1>

      <h2 className="pt-10">Look at these clothes...</h2>

      <section className="grid grid-cols-3 gap-5 grid-1-2-3 mg-md">
        {isLoading ? (
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
        ) : (
          products.map((product) => (
            <ProductCards key={product.id_entry} {...product} />
          ))
        )}
      </section>
      <div className="mg-md txt-cntr">
        <button
          className="mg-sm"
          disabled={isLoading || (page <= 1 && true)}
          onClick={() =>
            dispatch(getProducts(url + (parseInt(page) - 1), method))
          }
        >
          Previous
        </button>
        <button className="mg-sm">Page {page}</button>
        <button
          className="mg-sm"
          disabled={isLoading || (page >= total_pages && true)}
          onClick={() =>
            dispatch(getProducts(url + (parseInt(page) + 1), method))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
