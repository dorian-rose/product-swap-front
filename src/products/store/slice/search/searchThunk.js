import { setSearchProducts, startLoadingSearchProducts } from "../search/searchSlice"

export const getSearchProducts = (search, category) => {
    // //detail for fetch
    // let url;
    // const limit = import.meta.env.VITE_LIMIT;
    // if (category) {
    //     url = `${import.meta.env.VITE_PRODUCT_URL
    //         }search?search=${search}&limit=${limit}&page=1&category=${category}`;
    // } else {
    //     url = `${import.meta.env.VITE_PRODUCT_URL
    //         }search?search=${search}&limit=${limit}&page=1`;
    // }


    return async (dispatch, getState) => {
        dispatch(startLoadingSearchProducts())

        //call fetch
        // let data;
        // try {

        //     const response = await fetch(url);

        //     data = await response.json();

        // } catch (error) {
        //     console.log('FAILED while fetching', error)
        //     return error
        // }

        dispatch(setSearchProducts({ search, category }))
        //dispatch(setSearchProducts({ page: data.page, ok: data.ok, products: data.data, total_pages: data.total_pages, search, category }))
    }


}