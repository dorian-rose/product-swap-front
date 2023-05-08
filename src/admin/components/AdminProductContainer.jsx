import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { ProductRow } from "../components/ProductRow";

/**
 *
 * @param {Object} [param0] optional Object containing user email
 * @returns
 */
export const AdminProductContainer = ({ user = "" }) => {
  //collect data from state
  const { ok, page, products, isLoading, total_pages, error } = useSelector(
    (state) => state.products
  );

  //set variables for fetch and fetch url
  let url;
  const limit = import.meta.env.VITE_LIMIT;
  //if no user received, retrieve all products
  if (user == "") {
    url = `${import.meta.env.VITE_PRODUCT_URL}entries?limit=${limit}&page=`;
  } else {
    //if user received, retrieve only products from this user
    url = `${
      import.meta.env.VITE_PRODUCT_URL
    }entries?user=${user}&limit=${limit}&page=`;
  }
  const method = "GET";

  //dispatch to fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url + 1, method));
  }, []);

  if (ok && !products) {
    dispatch(getProducts(url + 1, method));
  }

  return (
    <>
      {isLoading ? (
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      ) : (
        <div>
          <button
            className="font-light mx-2 mt-5 underline  hover:bg-turquoise hover:text-white  px-2 rounded-md"
            onClick={() => dispatch(getProducts(url + 1, method))}
          >
            View all
          </button>
          <table className="table-auto overflow-scroll mt-4 mb-5  md:mb-10 w-full border-collapse bg-white text-left text-base font-thin text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Product
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Category
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  User
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Available
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {ok &&
                products.map((product) => (
                  <ProductRow key={product.id_entry} {...product} />
                ))}
            </tbody>
          </table>
          {!ok && (
            <p className="tracking-widest text-burgundy text-base font-light my-7">
              {error}
            </p>
          )}
        </div>
      )}
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
    </>
  );
};
