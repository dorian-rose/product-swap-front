

export const dataFetch = async (url, method, body) => {
    let data;
    console.log(body)
    let options = {};

    const newData = { ...body } //from body
    console.log(newData)
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


