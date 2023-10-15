import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deLModalActive: false,
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
    }
})

export const { openDelModal, closeDelModal } = delModalSlice.actions

export default delModalSlice.reducer