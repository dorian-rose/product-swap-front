import { Link } from "react-router-dom";
import { AdminProductContainer } from "./AdminProductContainer";

/**
 * Function that returns ejs of table with user information, and returns prop of user's products' information
 * @param {Object} param0 deconstruct on receival - deconstructed property is user (email)
 */
export const UserDetailContainer = ({ user }) => {
  const { name, email, role } = user;

  return (
    <section>
      <h1 className="mx-3 uppercase tracking-widest text-2xl mb-5 mt-10 font-light text-turquoise">
        User details
      </h1>
      <table className="mb-10">
        <tr className="bg-gray-50">
          <th className="tracking-widest text-turquoise text-xl font-light mt-7 px-5 md:px-10 py-3">
            Name:
          </th>
          <td className="capitalize className='border-b' m-5 md:mx-10 md:my5 tracking-wide font-thin text-lg">
            {name}
          </td>
        </tr>
        <tr>
          <th className="tracking-widest text-turquoise text-xl font-light mt-7 px-5 md:px-10 ">
            Email:
          </th>
          <td className="className='border-b' m-5 md:mx-10 md:my5 tracking-wide font-thin text-lg pe-5 py-3">
            {email}
          </td>
        </tr>
        <tr className="bg-gray-50">
          <th className="tracking-widest text-turquoise text-xl font-light mt-7 px-10 py-3">
            Role:
          </th>
          <td className="capitalize className='border-b' m-5 md:mx-10 md:my5 tracking-wide font-thin text-lg">
            {role}
          </td>
        </tr>
        <tr className="border-b">
          <td className="pt-5 pb-3 text-center">
            <Link
              to={`/admin/delete/${email}`}
              className="text-center border px-2 rounded-md border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
            >
              delete
            </Link>
          </td>
          <td className="pt-5 pb-3">
            <Link
              to={`mailto:${email}`}
              className="w-fit mx-1 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 "
            >
              Contact user
            </Link>
          </td>
        </tr>
      </table>
      <article>
        <h2 className="uppercase tracking-widest text-xl my-3 mx-5 md:m-10 font-light text-turquoise">
          Products
        </h2>
      </article>

      <AdminProductContainer user={email} />
    </section>
  );
};
