import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({

    name: 'searchProducts',
    initialState: {
        page: 1,
        searchProducts: [],
        isLoading: false,
    },
    reducers: {
        startLoadingSearchProducts: (state) => {
            state.isLoading = true;
        },
        setSearchProducts: (state, action) => {
            state.search = action.payload.search
            state.category = action.payload.category
        }
    }

})

export const { setSearchProducts, startLoadingSearchProducts } = searchSlice.actions