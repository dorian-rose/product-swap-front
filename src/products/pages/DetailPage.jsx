import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";

/**
 * function that retrieves data (product id) from params and uses this to dispatch to fetch to retrieve data, displays data in returned jsx
 * @returns jsx and component
 */
export const DetailPage = () => {
  //get product id
  const { id } = useParams();
  //define url and method required for fetch
  const url = `${import.meta.env.VITE_PRODUCT_URL}entry?id=${id}`;
  const method = "GET";

  //collect state
  const { products, isLoading } = useSelector((state) => state.products);

  //dispatch to fetch and slice
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url, method));
  }, []);

  return (
    <>
      {isLoading ? (<h2>Loading...</h2>):(

      products.map((product) => (
        <ProductDetail key={product.id_entry} product={product} />
      )))}
    </>
  );
};
