import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './slice/products/productsSlice'
import { searchSlice } from './slice/search/searchSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        searchProducts: searchSlice.reducer
    },
})