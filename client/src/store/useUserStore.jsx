import React from "react";
import {create} from "zustand";

const useUserStore = create(() => ({
  isShowModal: false,
  contentModal: null,
}));

export default useUserStore;
