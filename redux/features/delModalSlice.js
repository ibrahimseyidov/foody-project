import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deLModalActive: "",
  resDelModalActive: "",
  showOrderActive: false,
  catDelModalActive: "",
  offerDelModalActive: "",
};

export const delModalSlice = createSlice({
  name: "delModal",
  initialState,
  reducers: {
    openDelModal: (state, action) => {
      state.deLModalActive = action.payload;
    },
    closeDelModal: (state) => {
      state.deLModalActive = false;
    },
    showOrderModal: (state) => {
      state.showOrderActive = true;
    },
    closeOrderModal: (state) => {
      state.showOrderActive = false;
    },
    openResDelModal: (state, action) => {
      state.resDelModalActive = action.payload;
    },
    closeResDelModal: (state) => {
      state.resDelModalActive = false;
    },
    openDelCatModal: (state, action) => {
      state.catDelModalActive = action.payload;
      console.log(action.payload);
    },
    closeDelCatModal: (state) => {
      state.catDelModalActive = false;
    },
    openDelOfferModal: (state, action) => {
      state.offerDelModalActive = action.payload;
      console.log(action.payload);
    },
    closeDelOfferModal: (state) => {
      state.offerDelModalActive = false;
    },
  },
});

export const {
    openDelModal,
    closeDelModal,
    showOrderModal,
    closeOrderModal,
    openResDelModal,
    closeResDelModal,
    openDelCatModal,
    closeDelCatModal,
    openDelOfferModal,
    closeDelOfferModal,
  } = delModalSlice.actions;

export default delModalSlice.reducer;
