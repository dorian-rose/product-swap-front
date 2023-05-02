import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slice/products/thunk";
import { ProductCards } from "../components/ProductCards";
import { Search } from "../components/Search";

export const CategoryContainer = ({ category }) => {
  //collect data from state
  const { ok, page, products, isLoading, total_pages, error } = useSelector(
    (state) => state.products
  );

  //set variables for fetch and fetch url
  const limit = import.meta.env.VITE_LIMIT;
  const url = `${
    import.meta.env.VITE_PRODUCT_URL
  }category?category=${category}&limit=${limit}&page=`;
  const method = "GET";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url + 1, method));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <h1 className=" capitalize">{category}</h1>
        <Search category={category} />
      </div>
      <h2 className="pt-10">Look at these {category}...</h2>

      <section className="grid grid-cols-3 gap-5 grid-1-2-3 mg-md">
        {isLoading ? (
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
        ) : ok ? (
          products.map((product) => (
            <ProductCards key={product.id_entry} {...product} />
          ))
        ) : (
          <p className="text-red-600">{error}</p>
        )}
      </section>
      {ok && (
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
      )}
    </div>
  );
};
