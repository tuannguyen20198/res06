import React from "react";
import {create} from "zustand";

const useAppStore = create((set) => ({
  isShowModal: false,
  contentModal: null,
  setModal: (isShowModal, contentModal) =>
    set(() => ({isShowModal, contentModal})),
}));

export default useAppStore;
