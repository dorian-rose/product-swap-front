import { createSlice } from '@reduxjs/toolkit'

export const loggedSlice = createSlice({

    name: 'logged',
    initialState: {
        email: "",
        uid: "",
        displayName: "",
        photoURL: "",
        isAuthenticated: false,
        role: ""
    },
    reducers: {

        setLogged: (state, action) => {

            state.displayName = action.payload.displayName,
                state.email = action.payload.email,
                state.uid = action.payload.uid,
                state.photoURL = action.payload.photoURL,
                state.isAuthenticated = action.payload.isAuthenticated,
                state.role = action.payload.role
        }

    }

})

export const { setLogged } = loggedSlice.actions