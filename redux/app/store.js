import { configureStore } from '@reduxjs/toolkit'
import editModalReducer from '../features/editModalSlice'
import delModalReducer from '../features/delModalSlice'

export const store = configureStore({
    reducer: {
        modal: editModalReducer,
        delModal: delModalReducer
    },
})