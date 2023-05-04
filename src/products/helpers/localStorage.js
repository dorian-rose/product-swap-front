

/**
 * function that retrieves data from local storage 
 * @param {String} user user email - used to create name of data in localstorage
 * @returns array of objects - each object being a product
 */
export const getLocal = (user) => {

    return JSON.parse(localStorage.getItem("favourites")) || [];
}

/**
 * function that receives data and sets it to local storage
 * @param {String} user user email 
 * @param {Array} data array of products which is to be stored in local
 * @returns sets item in local
 */
export const setLocal = (data) => {

    return localStorage.setItem("favourites", JSON.stringify(data));
}