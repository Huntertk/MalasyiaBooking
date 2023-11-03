import { createSlice } from "@reduxjs/toolkit";
import { getAdmin, setAdmin } from "../../utils/localStorage";

const initialState = {
    adminEmail: null,
    loading: false,
    error: null,
    isSidebarOpen: true
}

const adminSlice = createSlice({
    name:'admin',
    initialState : getAdmin() || initialState,
    reducers:{
        adminLoginStart: (state) => {
            state.loading = true
        },
        adminLoginSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.adminEmail = action.payload
            setAdmin(state)
        },
        adminLoginFailed: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        adminSidebarOpen: (state) => {
            state.isSidebarOpen = true
            setAdmin(state)
        },
        adminSidebarClose: (state) => {
            state.isSidebarOpen = false
            setAdmin(state)
        },
    }
})

export const {
    adminLoginStart, 
    adminLoginSuccess, 
    adminLoginFailed,
    adminSidebarOpen,
    adminSidebarClose
} = adminSlice.actions

export default adminSlice.reducer