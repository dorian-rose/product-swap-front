import { useDispatch } from "react-redux";
import { getUsers } from "../../store/slice/users/userThunk";
import { useNavigate } from "react-router-dom";
import { dataFetch } from "../../helpers/fetch";

export const AdminUserDelete = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //define body, method and url for fetch and to renew user state
  const body = { email };
  const url = `${import.meta.env.VITE_USER_URL}delete`;
  const method = "DELETE";
  const userMethod = "GET";
  const userUrl = `${import.meta.env.VITE_USER_URL}users?limit=6&page=1`;

  //on click of button
  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("here");
    dataFetch(url, method, body);
    dispatch(getUsers(userUrl, userMethod));
    navigate("/admin/users");
  };

  return (
    <button
      className="text-center border rounded-md border-burgundy m-5 px-5 py-1  hover:bg-burgundy hover:text-white"
      onClick={handleClick}
    >
      Delete user
    </button>
  );
};
