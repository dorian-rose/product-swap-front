import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'users',
    initialState: {
        page: 1,
        users: [],
        isLoading: false,
    },
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setUsers: (state, action) => {

            state.isLoading = false;
            state.page = action.payload.page;
            state.users = action.payload.users;
            state.total_pages = action.payload.total_pages;
            state.ok = action.payload.ok
            state.error = action.payload.error
        }
    }

})

export const { setUsers, startLoadingUsers } = userSlice.actions