import { Action } from "@/utils/action.types";
import { State } from "@/utils/state.types";
import { create } from "zustand";

export const useStore = create<State & Action>()((set) => ({
  queryData: undefined,
  queryHistory: [],
  updateQueryData: (queryData) => set(() => ({ queryData: queryData })),
  updateQueryHistory: (queryValue) =>
    set((state) => {
      if (queryValue) {
        return {
          ...state,
          queryHistory: [
            ...state.queryHistory,
            {
              timestamp: new Date().toISOString(),
              queryValue,
              isFavourite: false,
            },
          ],
        };
      }
      return state;
    }),
}));
