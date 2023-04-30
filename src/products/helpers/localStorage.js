


export const getLocal = (user) => {

    return JSON.parse(localStorage.getItem(`${user}favourites`)) || [];
}


export const setLocal = (user, data) => {

    return localStorage.setItem(`${user}favourites`, JSON.stringify(data));
}