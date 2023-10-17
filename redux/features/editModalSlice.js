import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActiveModal: false,
    isActiveAddProductModal: false,
    isActiveAddResModal: false,
    isActiveResModal: false,
    isActiveCategoryModal: false,
    isActiveOfferModal: false
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
        openAddProductModal: (state) => {
            state.isActiveAddProductModal = true
        },
        closeAddProductModal: (state) => {
            state.isActiveAddProductModal = false
        },
        openAddResModal: (state) => {
            state.isActiveAddResModal = true
        },
        closeAddResModal: (state) => {
            state.isActiveAddResModal = false
        },
        openResModalEdit: (state) => {
            state.isActiveResModal = true;
        },
        closeResModalEdit: (state) => {
            state.isActiveResModal = false;
        },
        openCategoryModalEdit: (state) => {
            state.isActiveCategoryModal = true;
        },
        closeCategoryModalEdit: (state) => {
            state.isActiveCategoryModal = false;
        },
        openOfferModalEdit: (state) => {
            state.isActiveOfferModal = true;
        },
        closeOfferModalEdit: (state) => {
            state.isActiveOfferModal = false;
        },
    }
})

export const { openModalEdit, closeModalEdit, openAddProductModal, closeAddProductModal, openAddResModal, closeAddResModal, openResModalEdit, closeResModalEdit, openCategoryModalEdit, closeCategoryModalEdit, openOfferModalEdit, closeOfferModalEdit } = editModalSlice.actions

export default editModalSlice.reducer