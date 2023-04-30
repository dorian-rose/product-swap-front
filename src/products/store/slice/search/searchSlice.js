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

            state.isLoading = false;
            state.page = action.payload.page;
            state.products = action.payload.products;
            state.total_pages = action.payload.total_pages;
            state.ok = action.payload.ok
        }
    }

})

export const { setSearchProducts, startLoadingSearchProducts } = searchSlice.actions