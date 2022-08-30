/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modals, UIState } from "./types";

const initialState: UIState = {
  modals: {
    [Modals.ASSIGN_JUNIOR_ADMIN]: { isOpen: false, props: null },
    [Modals.CREATE_BRANCH]: { isOpen: false, props: null },
    [Modals.CREATE_JUNIOR_ADMIN]: { isOpen: false, props: null },
    
  },
  redirectUrl: undefined,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleModal: (
      state: UIState,
      action: PayloadAction<{ name: Modals; props?: any }>
    ) => {
      if (state.modals[action.payload.name]) {
        // toggle if modal exists
        state.modals[action.payload.name].isOpen =
          !state.modals[action.payload.name].isOpen;
        state.modals[action.payload.name].props = action.payload.props;
      }
    },
    closeActiveModals: (state: UIState, action: PayloadAction<undefined>) => {
      Object.keys(state.modals).forEach((modal) => {
        (state.modals as any)[modal].isOpen = false;
        (state.modals as any)[modal].props = null;
      });
    },
    setRedirectUrl: (
      state: UIState,
      action: PayloadAction<string | undefined>
    ) => {
      state.redirectUrl = action.payload;
    },
  },
});

export const { closeActiveModals, toggleModal, setRedirectUrl } =
  uiSlice.actions;

export default uiSlice.reducer;
