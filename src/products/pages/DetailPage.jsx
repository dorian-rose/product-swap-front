import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slice/products/thunk";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";

export const DetailPage = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_PRODUCT_URL}entry?id=${id}`;
  const method = "GET";

  const { products, isLoading } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url, method));
  }, []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      {products.map((product) => (
        <ProductDetail key={product.id_entry} product={product} />
      ))}
    </>
  );
};
