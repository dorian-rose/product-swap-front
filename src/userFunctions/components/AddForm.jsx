import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../products/store/slice/products/thunk";
//import { useForm } from "../hooks/useForm";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";

export const AddForm = () => {
  const { user } = useAuth0();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  //const { body, setBody, handleChange } = useForm("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callDispatch = (body) => {
    console.log(body);
    //define body, method and url for fetch
    const url = `${import.meta.env.VITE_PRODUCT_URL}create`;
    const method = "POST";
    dispatch(getProducts(url, method, body));
    navigate(-2);
  };
  console.log("errors", errors);
  return (
    <>
      <h2 className="mg-md">Add a new listing:</h2>
      <form
        className="add-form"
        onSubmit={handleSubmit((data) => callDispatch(data))}
      >
        <input
          //   required
          //   onChange={handleChange}
          {...register("title", {
            required: "Item is required",
            minLength: {
              value: 2,
              message: "Item must be at least two characteres long",
            },
          })}
          type="text"
          placeholder="Item title"
          name="title"
          id="title"
        />
        <p className="txt-cntr"> {errors.title?.message}</p>
        <input
          //   required
          //   onChange={handleChange}
          {...register("description", {
            required: "Description is required",
            maxLength: {
              value: 100,
              message: "Description must have a maximum of 100 characteres",
            },
          })}
          type="text"
          placeholder="Item description"
          name="description"
          id="description"
        />
        <p className="txt-cntr"> {errors.description?.message}</p>
        <input
          //   required
          //   onChange={handleChange}
          {...register("image", {
            required: "Image is required",
          })}
          type="text"
          placeholder="Image"
          name="image"
          id="image"
        />
        <p className="txt-cntr red"> {errors.image?.message}</p>
        <select
          {...register("category", { required: "Category is required" })}
          name="category"
          id="category"
        >
          <option value="">Select a category</option>
          <option value="clothing">Clothing</option>
          <option value="footwear">Footwear</option>
          <option value="books">Books</option>
          <option value="furniture">Furniture</option>
          <option value="electronics">Electronics</option>
        </select>
        <p className="txt-cntr red"> {errors.category?.message}</p>
        <input
          className="none"
          defaultValue={user.email}
          {...register("email")}
          type="text"
          name="email"
          id="email"
        />
        <input
          className="none"
          defaultValue={false}
          {...register("claimed")}
          type="text"
          name="claimed"
          id="claimed"
        />
        <input type="submit" />
      </form>
      <button
        className="txt-cntr bg-dark pd-sm w100 block"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};
