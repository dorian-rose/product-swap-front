import { useState, useEffect } from "react"
import { dataFetch } from "../helpers/fetch"

export const useFetch = (url, method, body) => {

    const [data, setData] = useState([])
    //const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const newData = await dataFetch(url, method, body)
        setData(newData)
        // setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])


    return data;

}
