import { setProducts, startLoadingProducts } from "./productsSlice"

export const getProducts = (url, method, body) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingProducts())

        //call fetch
        let data;
        let options = {};

        const newData = { ...body } //from body

        try {
            if (method == "DELETE") {

                options = {
                    method: method,
                    body: JSON.stringify(newData),
                    headers: {
                        "Content-type": "application/json",
                    }
                }
            }
            if (method == "PUT" || method == "POST") {

                options = {
                    method: method,
                    body: body
                }
            }
            const response = await fetch(url, options);

            data = await response.json();


        } catch (error) {
            console.log('FAILED while fetching', error)
            return error
        }

        dispatch(setProducts({ page: data.page, ok: data.ok, products: data.data, total_pages: data.total_pages, error: data.msg }))
    }


}