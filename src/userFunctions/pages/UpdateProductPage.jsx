import { useParams, useNavigate } from "react-router-dom";
import { UpdateForm } from "../components/UpdateForm";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../products/store/slice/products/thunk";

export const UpdateProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //get products from state
  const { ok, products, isLoading } = useSelector((state) => state.products);
  //if products empty, eg. user refreshed page, retrieve data

  if (!products || products.length == 0) {
    const url = `${import.meta.env.VITE_PRODUCT_URL}entry?id=${id}`;
    const method = "GET";

    dispatch(getProducts(url, method));
  }

  return (
    <section className="mg-md">
      {isLoading ? (
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      ) : (
        products.map((product) => (
          <UpdateForm key={product.id_entry} {...product} />
        ))
      )}
    </section>
  );
};
