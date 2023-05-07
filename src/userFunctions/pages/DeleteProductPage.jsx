import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/slice/products/thunk";
import { DeleteButton } from "../components/DeleteButton";

/**
 * Function that collects product id from params,returns delete button component and jsx and sends id delete component
 * @returns jsx
 */
export const DeleteProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //get current state

  const { ok, products, isLoading } = useSelector((state) => state.products);

  //set variables for fetch and fetch url

  const url = `${import.meta.env.VITE_PRODUCT_URL}entry?id=${id}`;
  const method = "GET";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(url, method));
  }, []);

  return (
    <div className="txt-cntr">
      {!products || products.length == 0 ? (
        <p className="text-turquoise tracking-widest text-base md:text-lg font-light mt-7">Item successfully removed!</p>
      ) : (
        <>
          <p className="text-burgundy tracking-widest text-base md:text-lg font-light mt-7">Are you sure you want to delete item?</p>
          <DeleteButton id_entry={id} />
        </>
      )}

      <button
       className="text-center border rounded-md border-turquoise m-5  px-5 py-1  hover:bg-turquoise hover:text-white"
        onClick={() => navigate(-2)}
      >
        Back
      </button>
    </div>
  );
};


         