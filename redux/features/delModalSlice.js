import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deLModalActive: '',
    resDelModalActive: '',
    catDelModal:"",
    showOrderActive: false
}

export const delModalSlice = createSlice({
    name: 'delModal',
    initialState,
    reducers: {
        openDelModal: (state, action) => {
            console.log(action.payload)
            state.deLModalActive = action.payload;
        },
        closeDelModal: (state) => {
            state.deLModalActive = false;
        },
        openDelCatModal: (state, action) => {
            console.log(action.payload)
            state.catDelModal = action.payload;
        },
        closeDelCatModal: (state) => {
            state.catDelModal = false;
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

export const { openDelModal, closeDelModal, showOrderModal, closeOrderModal, openResDelModal, closeResDelModal,openDelCatModal,closeDelCatModal } = delModalSlice.actions

export default delModalSlice.reducer