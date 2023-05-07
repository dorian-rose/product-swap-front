import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slice/products/thunk";
import { useForm } from "react-hook-form";
import { useState } from "react";

/**
 * function that returns a form - on receiving inputs dispatches via PUT fetch to update product
 * @param {Object} props object containing details of a product
 */
export const UpdateForm = (props) => {
  //dispatch and navigate to dispatch and navigate back on completion
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  //collect data from state
  const { ok, isLoading, error } = useSelector((state) => state.products);
  //variables sent in props
  const { id_entry, category, description, email, image, title } = props;

  //imports from useform to capture and validate form data
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  /**
   * function that collects and configures formData to be sent as body and sends a PUT fetch request.
   * @param {Object} data collected from form inputs, properties are: title, description, image, category, email, claimed
   */
  const callDispatch = (data) => {
    //define body from formdata for fetch
    const { title, description, image, category, email, claimed } = data;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("email", email);
    formData.append("claimed", claimed);
    formData.append("id_entry", id_entry);

    //define  method and url for fetch
    const url = `${import.meta.env.VITE_PRODUCT_URL}update`;
    const method = "PUT";
    dispatch(getProducts(url, method, formData));
    navigate("/api/user");
  };

  //return form
  return (
    <>
      <h1 className="mx-5 uppercase tracking-widest text-2xl">
        Update a listing:
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
            required: "! Item title is required",
            minLength: {
              value: 2,
              message: "! Item must be at least two characteres long",
            },
          })}
          type="text"
          defaultValue={title}
          name="title"
          id="title"
          className="border px-2 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">
          {errors.title?.message}
        </p>
        <textarea
          {...register("description", {
            required: "Description is required",
            maxLength: {
              value: 100,
              message: "Description must have a maximum of 100 characteres",
            },
          })}
          type="text"
          defaultValue={description}
          name="description"
          id="description"
          className="border mt-2 px-2 h-16 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">
          {" "}
          {errors.description?.message}
        </p>
        <input
          onChange={(ev) => setFile(ev.target.files[0])}
          type="file"
          accept=".jpg"
          name="file"
          id="file"
          className="border px-2 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="hidden"
          type="text"
          defaultValue={image.toString()}
          name="image"
          id="image"
        />
        <p className="font-thin italic text-burgundy">
          {" "}
          {errors.image?.message}
        </p>
        <select
          {...register("category", { required: "Category is required" })}
          name="category"
          id="category"
          className="border mt-2 px-2 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        >
          <option value="">Select a category</option>
          <option
            selected={category == "clothing" && "selected"}
            value="clothing"
          >
            Clothing
          </option>
          <option
            selected={category == "footwear" && "selected"}
            value="footwear"
          >
            Footwear
          </option>
          <option selected={category == "books" && "selected"} value="books">
            Books
          </option>
          <option
            selected={category == "furniture" && "selected"}
            value="furniture"
          >
            Furniture
          </option>
          <option
            selected={category == "electronics" && "selected"}
            value="electronics"
          >
            Electronics
          </option>
        </select>
        <p className="font-thin italic text-burgundy">
          {errors.category?.message}
        </p>
        <input
          className="hidden"
          defaultValue={email}
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
          className="mt-2 w-full border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2"
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
