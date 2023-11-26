import React from "react";
import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      current: null,
      okok: "okkk",
    }),
    {
      name: "rest06",
      storage: createJSONStorage(() => localStorage),
      // Return object states,want save
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            (el) => el[0] === "token" || el[0] === "current"
          )
        ),
    }
  )
);

export default useUserStore;
