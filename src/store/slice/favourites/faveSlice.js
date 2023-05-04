import { createSlice } from '@reduxjs/toolkit'
import { getLocal, setLocal } from "../../../products/helpers/localStorage";
import { useAuth0 } from "@auth0/auth0-react";

export const faveSlice = createSlice({


    name: 'favourites',
    initialState: {

        favouritesArray: getLocal() || [],
    },
    reducers: {
        setFavourites: (state, action) => {
            console.log('setFavourites action:', action.payload);
            state.favouritesArray = action.payload
        }
    }

})

export const { setFavourites } = faveSlice.actions