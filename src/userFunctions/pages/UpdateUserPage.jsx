import { useParams, useNavigate } from "react-router-dom";
import { UserUpdateForm } from "../components/UserUpdateForm";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/slice/users/userThunk";
import { useAuth0 } from "@auth0/auth0-react";

/**
 *function that retrieves details of a product and returns a component, sending it the product details.
 */
export const UpdateUserPage = () => {
  const { email } = useSelector((state) => state.logged);

  return (
    <section className="mg-md">
      <UserUpdateForm />
    </section>
  );
};
