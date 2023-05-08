import { Link, useNavigate } from "react-router-dom";
import { AdminUserDelete } from "./AdminUserDelete";

/**
 * function that returns jsx table row showing user information
 * @param {Object} props properties include: email, name, role, id
 */
export const UserRow = (props) => {
  const { name, email, role, id } = props;

  return (
    <tr className="hover:bg-gray-50">
      <td className="p-2 capitalize">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2 capitalize">{role}</td>

      <td>
        <Link
          to={`/admin/user/${email}`}
          className="text-center border px-2 rounded-md border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
        >
          View
        </Link>
      </td>
      <td>
        <Link
          to={`/admin/delete/${email}`}
          className="text-center border px-2 rounded-md border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
        >
          delete
        </Link>
      </td>
    </tr>
  );
};
