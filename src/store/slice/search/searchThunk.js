import { setSearchProducts, startLoadingSearchProducts } from "./searchSlice"

/**
 * function that receives a search term and category and dispatches them to reducer
 * @param {String} search search word or phrase
 * @param {*} category 
 * @returns dispatches a search term and category to search state
 */
export const getSearchProducts = (search, category) => {

    return (dispatch, getState) => {
        dispatch(startLoadingSearchProducts())
        dispatch(setSearchProducts({ search, category }))

    }
}