import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

/**
 * function that displays a form (jsx) - on receiving form inputs dispatches form input data to fetch/reducers
 * @returns jsx
 */
export const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const { user } = useAuth0();

  //collect data from state
  const { ok, isLoading, error } = useSelector((state) => state.products);

  //capture text inputs
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  //const { body, setBody, handleChange } = useForm("");
  const callDispatch = (data) => {
    //define body from formdata for fetch
    const { title, description, category, email, claimed } = data;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("email", email);
    formData.append("claimed", claimed);

    //define body, method and url for fetch
    const url = `${import.meta.env.VITE_PRODUCT_URL}create`;
    const method = "POST";

    dispatch(getProducts(url, method, formData));

    navigate("/api/user");
  };

  return (
    <>
      <h1 className="mx-5 uppercase tracking-widest text-2xl">
        Add a new listing:
      </h1>
      {isLoading && (
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      )}
      <form
        className="m-5 border border-turquoise border-1 rounded-md p-5"
        onSubmit={handleSubmit((data) => callDispatch(data))}
      >
        <input
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
          className="border mt-2 px-2 h-16 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">
          {errors.title?.message}
        </p>
        <input
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
          className="border mt-2 px-2 h-16 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">
          {errors.description?.message}
        </p>
        <input
          onChange={(ev) => setFile(ev.target.files[0])}
          required
          type="file"
          accept=".jpg"
          placeholder="Image"
          name="image"
          id="image"
          className="border px-2 h-16 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">
          {errors.image?.message}
        </p>
        <select
          {...register("category", { required: "Category is required" })}
          name="category"
          id="category"
          className="border mt-2 px-2 h-16 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        >
          <option value="">Select a category</option>
          <option value="clothing">Clothing</option>
          <option value="footwear">Footwear</option>
          <option value="books">Books</option>
          <option value="furniture">Furniture</option>
          <option value="electronics">Electronics</option>
        </select>
        <p className="font-thin italic text-burgundy">
          {errors.category?.message}
        </p>
        <input
          className="hidden"
          defaultValue={user.email}
          {...register("email")}
          type="text"
          name="email"
          id="email"
        />
        <input
          className="hidden"
          defaultValue={false}
          {...register("claimed")}
          type="text"
          name="claimed"
          id="claimed"
        />
        <input
          className="mt-2 w-full border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 "
          type="submit"
        />
      </form>
      <button
        className="m-5 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};
