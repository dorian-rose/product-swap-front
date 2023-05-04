import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({

    name: 'products',
    initialState: {
        page: 1,
        products: [],
        isLoading: false,
    },
    reducers: {
        startLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {

            state.isLoading = false;
            state.page = action.payload.page;
            state.products = action.payload.products;
            state.total_pages = action.payload.total_pages;
            state.ok = action.payload.ok
            state.error = action.payload.error
        }
    }

})

export const { setProducts, startLoadingProducts } = productsSlice.actions