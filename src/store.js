import {configureStore} from '@reduxjs/toolkit'
import bookingReducer from './features/booking/bookingSlice'
import adminReducer from './features/admin/adminSlice'


export const store = configureStore({
    reducer:{
        booking: bookingReducer,
        admin: adminReducer
    }
})