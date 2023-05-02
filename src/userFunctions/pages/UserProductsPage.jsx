import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../products/store/slice/products/thunk";
import { ProductCards } from "../../products/components/ProductCards";

export const UserProductsPage = () => {
  //get user to define user email
  const { user } = useAuth0();

  //get data from  state
  const { ok, page, products, isLoading, total_pages, error } = useSelector(
    (state) => state.products
  );

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
        <h1>Your items</h1>
        <p className="h-10"> You have no items</p>
        <Link to="/api/add" className="mx-auto my-10 p-3 bg-dark">
          List an item
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1 className="mg-md">Your items</h1>
      <h2 className="mg-md">View, edit or delete your items</h2>
      <Link to="/api/add" className="mg-lg sd-pd-sm bg-dark">
        List an item
      </Link>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
