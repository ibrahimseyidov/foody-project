import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActiveRestID: '',
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        handleRestID: (state, action) => {
            state.isActiveRestID = action.payload
        },
    }
})

export const { handleRestID} = restaurantSlice.actions

export default restaurantSlice.reducer