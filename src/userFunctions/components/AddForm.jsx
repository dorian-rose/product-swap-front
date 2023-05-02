import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../products/store/slice/products/thunk";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

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
  // console.log(ok, error);
  // if (!ok) {
  //   console.log("helllo");
  //   return (
  //     <>
  //       <p className="text-red-600">{error}</p>{" "}
  //       <button
  //         className="text-center border rounded-md border-black-600 mb-5 mx-auto px-5 py-1 block hover:bg-slate-50"
  //         onClick={() => navigate("api/create")}
  //       >
  //         Back
  //       </button>
  //     </>
  //   );
  // }

  return (
    <>
      <h2 className="mg-md">Add a new listing:</h2>
      {isLoading && (
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      )}
      <form
        className="add-form"
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
        />
        <p className="txt-cntr"> {errors.title?.message}</p>
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
        />
        <p className="txt-cntr"> {errors.description?.message}</p>
        <input
          onChange={(ev) => setFile(ev.target.files[0])}
          // {...register("image", {
          //   required: "Image is required",
          // })}
          required
          type="file"
          accept=".jpg"
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
