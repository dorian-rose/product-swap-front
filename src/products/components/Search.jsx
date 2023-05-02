import { useNavigate } from "react-router-dom";
import { getSearchProducts } from "../store/slice/search/searchThunk";
import { getProducts } from "../store/slice/products/thunk";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const Search = ({ category }) => {
  const [productErrors, setProductErrors] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const callDispatch = ({ search }) => {
    //detail for fetch
    let url;
    const method = "GET";
    const limit = import.meta.env.VITE_LIMIT;
    if (category) {
      url = `${
        import.meta.env.VITE_PRODUCT_URL
      }search?search=${search}&limit=${limit}&page=1&category=${category}`;
    } else {
      url = `${
        import.meta.env.VITE_PRODUCT_URL
      }search?search=${search}&limit=${limit}&page=1`;
    }

    //make dispatch
    dispatch(getSearchProducts(search, category));
    dispatch(getProducts(url, method));

    //redirect to result page
    navigate("/search");
  };

  return (
    <div className="flex flex-col border rounded-md">
      <form
        className="flex justify-end "
        onSubmit={handleSubmit((data) => callDispatch(data))}
      >
        <input
          {...register("search", {
            required: "Search term or phrase is required",
          })}
          type="search"
          placeholder={`Search ${category || "all"}`}
          name="search"
        />
        <p className="txt-cntr"> {errors.search?.message}</p>
        {/* <input type="submit" /> */}
      </form>
      {productErrors && (
        <p className="text-end text-red-600 mx-15">No results found</p>
      )}
    </div>
  );
};
