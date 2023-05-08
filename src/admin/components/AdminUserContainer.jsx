import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/slice/users/userThunk";
import { UserRow } from "./UserRow";

/**
 * function that dispatches to user reducer - setting state to be all users. Then passes these users to table row component to be displayed in jsx.
 */
export const AdminUserContainer = () => {
  //collect data from state
  const { ok, page, users, isLoading, total_pages, error } = useSelector(
    (state) => state.users
  );

  //set variables for fetch and fetch url
  const limit = import.meta.env.VITE_LIMIT;
  const url = `${import.meta.env.VITE_USER_URL}users?limit=${limit}&page=`;
  const method = "GET";

  //dispatch to fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(url + 1, method));
  }, []);

  return (
    <>
      {isLoading ? (
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      ) : (
        <div>
          {/* <button 
  className="font-light mx-2 mt-5 underline  hover:bg-turquoise hover:text-white  px-2 rounded-md"
  onClick={() =>
              dispatch(getUsers(url + 1, method))
            }>View all</button>  */}
          <table className="table-auto overflow-scroll mt-4 mb-5  md:mb-10 w-full border-collapse bg-white text-left text-base font-thin text-gray-500">
            <tbody className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Email
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Role
                </th>

                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </tbody>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {ok &&
                users.map((user) => <UserRow key={user.email} {...user} />)}
            </tbody>
          </table>
          {!ok && (
            <p className="tracking-widest text-burgundy text-base font-light my-7">
              {error}
            </p>
          )}
        </div>
      )}
      {ok && (
        <div className="text-center mb-10">
          <button
            className="font-light m-2 border border-turquoise disabled:hover:bg-white disabled:hover:text-slate-600 disabled:shadow-none disabled:border-slate-200 hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
            disabled={isLoading || (page <= 1 && true)}
            onClick={() =>
              dispatch(getUsers(url + (parseInt(page) - 1), method))
            }
          >
            Previous
          </button>
          <button className="font-light m-2 border border-turquoise hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg">
            Page {page}
          </button>
          <button
            className="font-light m-2 border border-turquoise disabled:hover:bg-white disabled:hover:text-slate-600 disabled:shadow-none disabled:border-slate-200 hover:bg-turquoise hover:text-white rounded-md px-2 shadow-lg"
            disabled={isLoading || (page >= total_pages && true)}
            onClick={() =>
              dispatch(getUsers(url + (parseInt(page) + 1), method))
            }
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};
