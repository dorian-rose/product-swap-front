import { useNavigate } from "react-router-dom";
import { getSearchProducts } from "../store/slice/search/searchThunk";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

export const Search = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  //const { body, setBody, handleChange } = useForm("");

  const callDispatch = ({ search }) => {
    console.log(search);
    //define body, method and url for fetch
    const limit = import.meta.env.VITE_LIMIT;
    const url = `${
      import.meta.env.VITE_PRODUCT_URL
    }search?search=${search}&limit=${limit}&page=1&category=${category}`;
    const method = "GET";
    //make dispatch
    dispatch(getSearchProducts(url, method));
    //redirect to result page
    navigate("/search");
  };

  return (
    <form
      className="flex justify-end "
      onSubmit={handleSubmit((data) => callDispatch(data))}
    >
      <input
        {...register("search", {
          required: "Search term or phrase is required",
          minLength: {
            value: 2,
            message: "Item must be at least two characteres long",
          },
        })}
        type="search"
        placeholder="Search"
        name="search"
      />
      <p className="txt-cntr"> {errors.search?.message}</p>
      <input type="submit" />
    </form>
  );
};
