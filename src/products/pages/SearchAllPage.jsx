import { useSelector, useDispatch } from "react-redux";
import { ProductCards } from "../components/ProductCards";
import { useNavigate } from "react-router-dom";

export const SearchAllPage = () => {
  const navigate = useNavigate();
  const { ok, page, products, isLoading, total_pages } = useSelector(
    (state) => state.searchProducts
  );
  console.log(ok, page, products, isLoading, total_pages);
  if (!products || products.length == 0) {
    return (
      <>
        <p>No results found</p>{" "}
        <button
          className="txt-cntr bg-dark pd-sm w100 block"
          onClick={() => navigate(-1)}
        >
          Return home
        </button>
      </>
    );
  }
  return (
    <>
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
      <button
        className="txt-cntr bg-dark pd-sm w100 block"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};
