import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../products/store/slice/products/thunk";
import { DeleteButton } from "../components/DeleteButton";

export const DeleteProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //get current state

  const { ok, products, isLoading } = useSelector((state) => state.products);

  //set variables for fetch and fetch url

  const url = `${import.meta.env.VITE_PRODUCT_URL}entry?id=${id}`;
  const method = "GET";

  console.log(ok); //manage errors here

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url, method));
  }, []);

  return (
    <div className="txt-cntr">
      {!products || products.length == 0 ? (
        <p>Item successfully removed!</p>
      ) : (
        <>
          <p className="error-message">Are you sure you want to delete item?</p>
          <DeleteButton id_entry={id} />
        </>
      )}

      <button
        className="txt-cntr bg-dark sd-pd-sm "
        onClick={() => navigate(-2)}
      >
        Back
      </button>
    </div>
  );
};
