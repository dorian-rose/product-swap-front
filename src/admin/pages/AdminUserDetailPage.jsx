import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slice/users/userThunk";
import { useParams } from "react-router-dom";
import { UserDetailContainer } from "../components/UserDetailContainer";

/**
 * function that dispathces to user reducer (via fetch) setting user state to all users
 *returns jsx with component that displays this user information which is passed as props.
 */
export const AdminUserDetailPage = () => {
  const { id } = useParams(); //email
  //define url and method required for fetch
  const url = `${import.meta.env.VITE_USER_URL}user?email=${id}`;
  const method = "GET";

  //collect state
  const { users, isLoading } = useSelector((state) => state.users);
  //dispatch to fetch and slice, on mounting of component (useEffect)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(url, method));
  }, []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {users.map((user) => (
        <UserDetailContainer key={user.email} user={user} />
      ))}
    </>
  );
};
