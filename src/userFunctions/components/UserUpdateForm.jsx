import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slice/users/userThunk";
import { useForm } from "react-hook-form";
import { useState } from "react";

/**
 * function that returns a form - on receiving inputs dispatches via PUT fetch to update product
 * @param {Object} props object containing details of a product
 */
export const UserUpdateForm = ({ user }) => {
  //dispatch and navigate to dispatch and navigate back on completion
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  console.log(user);
  //variables sent in props
  // const { email, name, id } = user;

  //imports from useform to capture and validate form data
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  /**
   * function that collects and configures formData to be sent as body and sends a PUT fetch request.
   * @param {Object} data collected from form inputs, properties are: email, name, id
   */
  const callDispatch = (data) => {
    //define  method and url for fetch
    const url = `${import.meta.env.VITE_USER_URL}update`;
    const method = "PUT";
    dispatch(getUsers(url, method, data));
    navigate("/");
  };

  //return form
  return (
    <>
      <h1 className="mx-5 uppercase tracking-widest text-2xl">
        Update a listing:
      </h1>

      <form
        className="m-5 border border-turquoise border-1 rounded-md p-5"
        onSubmit={handleSubmit((data) => callDispatch(data))}
      >
        <input
          className="hidden"
          // defaultValue={email}
          {...register("email")}
          type="text"
          name="email"
          id="email"
        />

        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must have at least two characteres",
            },
          })}
          type="text"
          defaultValue={name}
          name="name"
          id="name"
          className="border mt-2 px-2 h-16 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">{errors.name?.message}</p>

        <input
          className="hidden"
          // defaultValue={id}
          {...register("id")}
          type="text"
          name="id"
          id="id"
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
