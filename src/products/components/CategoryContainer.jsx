import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { ProductCards } from "../components/ProductCards";
import { Search } from "../components/Search";

/**
 * Function that dispatches, receives data and returns jsx presenting data
 * @param {Object} param0 category of product to search and display
 */
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

  //dispatch to fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url + 1, method));
  }, []);

  return (
    <div>
      <h1 className="font-light uppercase text-center tracking-widest text-2xl md:text-3xl">
        {category}
      </h1>
      <Search category={category} />

      <h2 className="tracking-widest text-sm sm:text-base md:text-lg font-light mt-7">
        Buy preloved <span className="font-normal">{category}</span>, save money
        and shop sustainably!
      </h2>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading ? (
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
        ) : ok ? (
          products.map((product) => (
            <ProductCards key={product.id_entry} {...product} />
          ))
        ) : (
          <p className="tracking-widest text-burgundy text-base font-light my-7">
            {error}
          </p>
        )}
      </section>
      {ok && (
        <div className="text-center mb-10">
          <button
            className="font-light m-2 border border-turquoise disabled:hover:bg-white disabled:hover:text-slate-600 disabled:shadow-none disabled:border-slate-200 hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
            disabled={isLoading || (page <= 1 && true)}
            onClick={() =>
              dispatch(getProducts(url + (parseInt(page) - 1), method))
            }
          >
            Previous
          </button>
          <button className="font-light m-2 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg">
            Page {page}
          </button>
          <button
            className="font-light m-2 border border-turquoise disabled:hover:bg-white disabled:hover:text-slate-600 disabled:shadow-none disabled:border-slate-200 hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
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
