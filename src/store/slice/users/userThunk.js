import { setUsers, startLoadingUsers } from "./userSlice"
import { dataFetch } from "../../../helpers/fetch"

/**
 * function that retrieves data from apis via fetch, then dispatches data to slice and reducers
 * @param {String} url url according to the endpoint that will be called
 * @param {String} method method required for endpoint 
 * @param {Object} [body] body of fetch providing data to endpoint
 */
export const getUsers = (url, method, body) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingUsers())

        //call fetch
        // let data;
        // let options = {};

        // const newData = { ...body } //from body

        // try {
        //     if (method == "PUT" || method == "POST" || method == "DELETE") {

        //         options = {
        //             method: method,
        //             body: JSON.stringify(newData),
        //             headers: {
        //                 "Content-type": "application/json",
        //             }
        //         }
        //     }

        //     const response = await fetch(url, options);

        const data = await dataFetch(url, method, body)

        // } catch (error) {
        //     console.log('FAILED while fetching', error)
        //     return error
        // }

        dispatch(setUsers({ page: data.page, ok: data.ok, users: data.data, total_pages: data.total_pages, error: data.msg }))
    }


}