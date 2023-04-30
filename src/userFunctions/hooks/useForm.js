import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const useForm = (initialState = "") => {
    const { user } = useAuth0();
    const [body, setBody] = useState(initialState);


    const handleChange = ({ target }) => {
        const { name, value } = target

        setBody({
            ...body,
            [name]: value,
            email: user.email,
            claimed: false,
        });

    }


    return { body, setBody, handleChange } //handleChange, form= body
}
