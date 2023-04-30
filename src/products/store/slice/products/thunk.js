import { setProducts, startLoadingProducts } from "./productsSlice"

export const getProducts = (url, method, body) => {
    console.log(method)
    console.log(body);
    console.log(url);
    return async (dispatch, getState) => {
        dispatch(startLoadingProducts())

        //call fetch
        let data;
        let options = {};

        const newData = { ...body } //from body
        console.log("url", url)
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

        } catch (error) {
            console.log('FAILED while fetching', error)
            return error
        }

        dispatch(setProducts({ page: data.page, ok: data.ok, products: data.data, total_pages: data.total_pages }))
    }


}