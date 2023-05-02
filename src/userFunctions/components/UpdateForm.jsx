import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../products/store/slice/products/thunk";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const UpdateForm = (props) => {
  //dispatch and navigate to dispatch and navigate back on completion
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  //variables sent in props
  const { id_entry, category, description, email, image, title } = props;

  //imports from useform to capture and validate form data
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  //send to thunk and store
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
      <h2 className="mg-md">Update a listing:</h2>
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
          defaultValue={title}
          name="title"
          id="title"
        />
        <p className="txt-cntr"> {errors.title?.message}</p>
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
        />
        <p className="txt-cntr"> {errors.description?.message}</p>
        <input
          onChange={(ev) => setFile(ev.target.files[0])}
          type="file"
          accept=".jpg"
          name="file"
          id="file"
        />
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="none"
          type="text"
          defaultValue={image.toString()}
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
        <p className="txt-cntr red"> {errors.category?.message}</p>
        <input
          className="none"
          defaultValue={email}
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
        className="text-center border rounded-md border-black-600 mt-5 mx-auto px-5 py-1 block hover:bg-slate-50"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};
