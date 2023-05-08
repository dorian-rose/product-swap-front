import { useNavigate } from "react-router-dom";
import { getProducts } from "../../store/slice/products/thunk";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";

/**
 * function that returns jsx of form, collects search term from form input and dispatches search to search reducer . If receives category, searches only within category
 * @param {Object} [param0] deconstruct to get => category in which to search (optional)
 */
export const AdminSearch = () => {
  const [productErrors, setProductErrors] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  //on submit - call to search api
  const callDispatch = ({ search }) => {
    //detail for fetch
    const limit = import.meta.env.VITE_LIMIT;
    const url = `${
      import.meta.env.VITE_PRODUCT_URL
    }search?search=${search}&limit=${limit}&page=1`;
    const method = "GET";

    //make dispatch
    dispatch(getProducts(url, method));
  };

  return (
    <div className="flex flex-col w-full">
      <form
        className="flex justify-end  border rounded-md"
        onSubmit={handleSubmit((data) => callDispatch(data))}
      >
        <input
          {...register("search", {
            required: "! enter search",
          })}
          type="search"
          placeholder="Search product"
          name="search"
          className="placeholder:font-thin focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full mx-1"
        />
        <p className="w-32 txt-cntr text-burgundy font-thin">
          {" "}
          {errors.search?.message}
        </p>
        {/* <input type="submit" /> */}
      </form>
      {productErrors && (
        <p className="text-end text-red-600 mx-15">No results found</p>
      )}
    </div>
  );
};
