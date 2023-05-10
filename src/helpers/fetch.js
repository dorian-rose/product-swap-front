
/**
 * 
 * @param {String} url url for fetch. Data retrieved by fetch (e.g. which fetch is made) will depend on this url.
 * @param {String} method 
 * @param {Object} [body] data for PUT, POST and DELETE requests 
 * @returns Object -data and or ok value in case of success, or error
 */
export const dataFetch = async (url, method, body) => {
    console.log("url", url)
    console.log("method", method)
    console.log("body", body)
    let data;

    let options = {};

    const newData = { ...body } //from body

    try {
        if (method == "DELETE" || method == "POST" || method == "PUT") {

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
    return data
}


