import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActiveModal: false,
    isActiveResModal: false,
}

export const editModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalEdit: (state) => {
            state.isActiveModal = true;
        },
        closeModalEdit: (state) => {
            state.isActiveModal = false
        },
        openResModalEdit: (state) => {
            state.isActiveResModal = true;
            state.isActiveModal = true;
        },
        closeResModalEdit: (state) => {
            state.isActiveResModal = false;
            state.isActiveModal = false;
        },
    }
})

export const { openModalEdit, closeModalEdit, openResModalEdit, closeResModalEdit } = editModalSlice.actions

export default editModalSlice.reducer