import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { ProductCards } from "../../products/components/ProductCards";

/**
 * function that retrieves all products associated to one user, and returns jsx and components displaying these products
 * @returns jsx and components
 */
export const UserProductsPage = () => {
  //get user to define user email
  const { user } = useAuth0();

  //get data from  state
  const { ok, page, products, isLoading, total_pages, error } = useSelector(
    (state) => state.products
  );
console.log(total_pages)
  //define variables for fetch and fetch url
  const limit = import.meta.env.VITE_LIMIT;
  const method = "GET";
  const url = `${import.meta.env.VITE_PRODUCT_URL}entries?user=${
    user.email
  }&limit=${limit}&page=`; //url will be complete with page number when calling

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url + 1, method));
  }, []);

  if ((ok && !products) || (ok && products.length == 0)) {
    dispatch(getProducts(url + 1, method));
  }
  //products! || products.length == 0
  if (!ok) {
    return (
      <div>
        <Link
          to="/api/add"
          className="m-5 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
        >
          List an item
        </Link>
        <h1 className="uppercase text-center tracking-widest text-2xl md:text-3xl">
          Your items
        </h1>
        <p className="tracking-widest text-burgundy text-base font-light my-7">
          You have no items
        </p>
      </div>
    );
  }
  return (
    <div>
      <Link
        to="/api/add"
        className="m-5 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
      >
        List an item
      </Link>
      <h1 className="uppercase text-center tracking-widest text-2xl md:text-3xl">
        Your items
      </h1>
      <h2 className="tracking-widest text-base md:text-lg font-light mt-7 mx-5">
        View, edit or delete your items
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
        ) : (
          products.map((product) => (
            <ProductCards key={product.id_entry} {...product} />
          ))
        )}
      </section>
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
    </div>
  );
};
