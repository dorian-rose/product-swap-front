import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { ProductRow } from "../components/ProductRow";

export const AdminProductContainer = () => {
    //collect data from state
  const { ok, page, products, isLoading, total_pages, error } = useSelector(
    (state) => state.products
  );

  //set variables for fetch and fetch url
  const limit = import.meta.env.VITE_LIMIT;
  const url = `${
    import.meta.env.VITE_PRODUCT_URL
  }entries?limit=${limit}&page=`;
  const method = "GET";

  //dispatch to fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url + 1, method));
  }, []);
console.log(ok)
  if (ok && !products)  {
    dispatch(getProducts(url + 1, method));
  }

 console.log(products)
    return (<>
      {isLoading ? (
          <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
        ) :  (
<div class='overflow-x'>
    <table className="table-auto overflow-scroll my-5 md:my-10 w-full border-collapse bg-white text-left text-base font-thin text-gray-500">
 <thead className="bg-gray-50">
  <tr>
    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Product</th>
    <th  scope="col" className="px-6 py-4 font-medium text-gray-900">Category</th>
    <th  scope="col" className="px-6 py-4 font-medium text-gray-900">User</th>
    <th  scope="col" className="px-6 py-4 font-medium text-gray-900">Available</th>
    <th  scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
    <th  scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
  </tr>
  </thead>
  <tbody className="divide-y divide-gray-100 border-t border-gray-100">  
     {ok ? (
          products.map((product) => (
            <ProductRow key={product.id_entry} {...product} />
          ))
        ) : (
          <p className="tracking-widest text-burgundy text-base font-light my-7">
            {error}
          </p>
        )}
    
  </tbody>

</table>
</div>)}
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
)
}
