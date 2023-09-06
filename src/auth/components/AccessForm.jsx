import { useState } from "react";
import { useForm } from "react-hook-form";

/**
 * function that provides data entry fields, validates and retrieves data
 * @param {*} props a function that sends user info to firebase and a boolean variable that decides whether name field is shown
 * @returns jsx
 */
export const AccessForm = ({ enterUser, nameHidden }) => {
  //usestates
  const [firstPassword, setFirstPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");

  //imports from useform to capture and validate form data
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  /**
   * function that receives changes to second password and compares this to first password
   * @param {*} ev event on change of second password entry
   */
  const comparePasswords = (ev) => {
    console.log(firstPassword);
    const secondPassword = ev.target.value;
    if (firstPassword !== secondPassword) {
      setPasswordMatch("Contraseñas no coinciden");
    } else {
      setPasswordMatch("");
    }
  };

  return (
    <>
      <form
        className="m-5 border border-turquoise border-1 rounded-md px-5 sm:py-5 max-w-md m-auto"
        onSubmit={handleSubmit((data) => enterUser(data))}
      >
        {!nameHidden && (
          <>
            <label
              htmlFor="name"
              className="relative top-5 left-3  bg-white px-1 text-turquoise font-thin text-sm"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              className="border mt-2 px-2 sm:py2 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
            />
          </>
        )}
        <label
          htmlFor="email"
          className="relative top-5 left-3  bg-white px-1 text-turquoise font-thin text-sm"
        >
          Email
        </label>
        <input
          {...register("email", {
            required: "Inserte email",
            minLength: {
              value: 5,
              message: "Inserte un email válido",
            },
          })}
          type="text"
          id="email"
          name="email"
          className="border mt-2 px-2 sm:py2 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">
          {errors.email?.message}
        </p>
        <label
          htmlFor="password"
          className="relative top-5 left-3 bg-white px-1 text-turquoise font-thin text-sm"
        >
          Password
        </label>
        <input
          {...register("password", {
            required: "Inserte contraseña",
            minLength: {
              value: 8,
              message: "Contraseña debe tener al menos 8 cáracteres",
            },
          })}
          type="password"
          id="password"
          name="password"
          onChange={(ev) => setFirstPassword(ev.target.value)}
          className="border mt-2 px-2 sm:py2 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="font-thin italic text-burgundy">
          {errors.password?.message}
        </p>
        {!nameHidden && (
          <>
            <label
              htmlFor="passwordRepeat"
              className="relative top-5 left-3  bg-white px-1 text-turquoise font-thin text-sm"
            >
              Repeat password
            </label>
            <input
              {...register("passwordRepeat", {
                required: "Inserte contraseña de nuevo",
                minLength: {
                  value: 8,
                  message: "Contraseña debe tener al menos 8 cáracteres",
                },
              })}
              type="password"
              id="passwordRepeat"
              name="passwordRepeat"
              className="border mt-2 px-2 sm:py2 font-thin  focus:outline-none focus:border-turquoise focus:border-2 focus:border-solid rounded-md w-full"
              onChange={comparePasswords}
            />
            <p className="font-thin italic text-burgundy">
              {errors.passwordRepeat?.message}
            </p>
            <p className="text-center italic text-alert ">{passwordMatch}</p>
          </>
        )}
        <button
          className="my-6 sm:py2 w-full border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 "
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};
