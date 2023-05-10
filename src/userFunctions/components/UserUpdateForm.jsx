import { useNavigate } from "react-router-dom";
import { dataFetch } from "../../helpers/fetch";
import { getUsers } from "../../store/slice/users/userThunk";
import { useForm } from "react-hook-form";
import { useState } from "react";

/**
 * function that returns a form - on receiving inputs dispatches via PUT fetch to update product
 * @param {Object} props object containing details of a product
 */
export const UserUpdateForm = ({ user }) => {
  const navigate = useNavigate();
  const { email, name, id } = user;
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
    const method = "PUT";
    const url = `${import.meta.env.VITE_USER_URL}update`;
    dataFetch(url, method, data);
    navigate("-1");
  };

  //return form
  return (
    <>
      <h1 className="mx-5 uppercase tracking-widest text-2xl">
        Update profile:
      </h1>

      <form
        className="m-5 border border-turquoise border-1 rounded-md p-5"
        onSubmit={handleSubmit((data) => callDispatch(data))}
      >
        <label className="font-thin text-turquoise">Name:</label>
        <input
          className="hidden"
          defaultValue={email}
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
          defaultValue={id}
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
