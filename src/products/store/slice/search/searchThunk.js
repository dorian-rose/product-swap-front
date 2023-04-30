import { setSearchProducts, startLoadingSearchProducts } from "../search/searchSlice"

export const getSearchProducts = (url, method, body) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingSearchProducts())

        //call fetch
        let data;
        let options = {};

        const newData = { ...body } //from body

        try {
            if (method == "POST" || method == "PUT" || method == "DELETE") {

                options = {
                    method: method,
                    body: JSON.stringify(newData),
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            }
            const response = await fetch(url, options);

            data = await response.json();
            console.log(data)
        } catch (error) {
            console.log('FAILED while fetching', error)
            return error
        }
        console.log(data.page, data.ok, data.data, data.total_pages,)
        dispatch(setSearchProducts({ page: data.page, ok: data.ok, products: data.data, total_pages: data.total_pages }))
    }


}