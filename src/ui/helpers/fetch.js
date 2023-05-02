
export const fetch = async (url, method, body) => {
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

    } catch (error) {
        console.log('FAILED while fetching', error)
        return error
    }
    return data
}
