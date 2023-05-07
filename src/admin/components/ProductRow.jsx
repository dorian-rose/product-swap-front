import { Link } from "react-router-dom";

/**
 * function that returns jsx table row showing product information
 * @param {Object} props properties include: title, category, email, claimed, id_entry
 */
export const ProductRow = (props) => {
  const { title, category, email, claimed, id_entry } = props;

  return (
    <tr className="hover:bg-gray-50">
      <td className="p-2">{title}</td>
      <td>{category}</td>
      <td>
        <Link className="text-turquoise hover:underline" to="/admin/dashboard">
          {email} add link to user
        </Link>
      </td>
      {claimed ? (
        <td className="text-burgundy text-center">no</td>
      ) : (
        <td className="text-turquoise text-center">Yes</td>
      )}
      <td>
        <Link
          to={`/admin/detail/${id_entry}`}
          className="text-center border px-2 rounded-md border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
        >
          view
        </Link>
      </td>
      <td>
        {" "}
        <Link
          to={`/admin/delete/${id_entry}`}
          className="text-center border px-2 rounded-md border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
        >
          delete
        </Link>
      </td>
    </tr>
  );
};
