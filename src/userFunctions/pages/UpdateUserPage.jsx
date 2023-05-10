import { useParams, useNavigate } from "react-router-dom";
import { UserUpdateForm } from "../components/UserUpdateForm";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/slice/users/userThunk";
import { useAuth0 } from "@auth0/auth0-react";

/**
 *function that retrieves details of a product and returns a component, sending it the product details.
 */
export const UpdateUserPage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  //const { email } = useParams();
  //get products from state
  const { ok, users, isLoading } = useSelector((state) => state.users);
  //if products empty, eg. user refreshed page, retrieve data

  if (!users || users.length == 0) {
    const url = `${import.meta.env.VITE_USER_URL}user?email=${user.email}`;
    const method = "GET";
    dispatch(getUsers(url, method));
  }

  return (
    <section className="mg-md">
      {isLoading ? (
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      ) : (
        users.map((user) => <UserUpdateForm key={user.email} user={user} />)
      )}
    </section>
  );
};
