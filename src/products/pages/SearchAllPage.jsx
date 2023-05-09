import { useSelector, useDispatch } from "react-redux";
import { ProductCards } from "../components/ProductCards";
import { useNavigate } from "react-router-dom";
import { Search } from "../components/Search";

/**
 *function that retrieves product data from search reducer, and returns data dispayed in jsx
 */
export const SearchAllPage = () => {
  const navigate = useNavigate();
  //get search info from search reducer
  const { search, category } = useSelector((state) => state.searchProducts);
  //collect product data from state
  const { ok, page, products, isLoading, total_pages } = useSelector(
    (state) => state.products
  );

  if (!products || products.length == 0) {
    return (
      <>
        <div className="grid grid-cols-2 gap-2">
          <h1 className="font-light uppercase text-center tracking-widest text-2xl md:text-3xl">
            {category}
          </h1>
          <Search category={category} />
        </div>
        <h2 className="pt-10 tracking-widest text-base md:text-lg font-light mt-7">
          No search results for "{search}"
        </h2>

        <button
          className="m-5 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <h1 className=" capitalize">{category}</h1>
        <Search category={category} />
      </div>
      <h2 className="pt-10 capitalize">Search results for "{search}"</h2>
      <section className="grid grid-cols-3 gap-5 grid-1-2-3 mg-md">
        {isLoading ? (
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
        ) : (
          products &&
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
      <button
        className="text-center border rounded-md border-black-600 mb-5 mx-auto px-5 py-1 block hover:bg-slate-50"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};
