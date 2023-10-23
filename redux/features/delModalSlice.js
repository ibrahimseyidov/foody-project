import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deLModalActive: '',
    resDelModalActive: '',
    showOrderActive: false
}

export const delModalSlice = createSlice({
    name: 'delModal',
    initialState,
    reducers: {
        openDelModal: (state, action) => {
            state.deLModalActive = action.payload;
        },
        closeDelModal: (state) => {
            state.deLModalActive = false;
        },
        showOrderModal: (state) => {
            state.showOrderActive = true
        },
        closeOrderModal: (state) => {
            state.showOrderActive = false
        },
        openResDelModal: (state, action) => {
            state.resDelModalActive = action.payload
        },
        closeResDelModal: (state) => {
            state.resDelModalActive = false;
        }
    }
})

export const { openDelModal, closeDelModal, showOrderModal, closeOrderModal, openResDelModal, closeResDelModal } = delModalSlice.actions

export default delModalSlice.reducer