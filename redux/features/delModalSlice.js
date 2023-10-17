import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deLModalActive: false,
    showOrderActive: false
}

export const delModalSlice = createSlice({
    name: 'delModal',
    initialState,
    reducers: {
        openDelModal: (state) => {
            state.deLModalActive = true;
        },
        closeDelModal: (state) => {
            state.deLModalActive = false;
        },
        showOrderModal: (state) => {
            state.showOrderActive = true
        },
        closeOrderModal: (state) => {
            state.showOrderActive = false
        }
    }
})

export const { openDelModal, closeDelModal, showOrderModal, closeOrderModal } = delModalSlice.actions

export default delModalSlice.reducer