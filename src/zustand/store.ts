import { Action } from "@/utils/action.types";
import { sidePanel } from "@/utils/constants";
import { State } from "@/utils/state.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import order from "@/utils/Json/order.json";
import { getColumnArray } from "@/utils/helperFunction";

export const useStore = create<State & Action>()(
  persist(
    (set) => ({
      sidePanel: {
        activeMenu: sidePanel.recentQuery,
      },
      queryData: { queryValue: undefined, index: undefined },
      queryHistory: [],
      updateSidePanel: (activeMenu: sidePanel) =>
        set(() => ({ sidePanel: { activeMenu } })),
      updateFavorite: (queryIndex) =>
        set((state) => ({
          queryHistory: [
            ...state.queryHistory.slice(0, queryIndex),
            {
              ...state.queryHistory[queryIndex],
              isFavourite: !state.queryHistory[queryIndex].isFavourite,
            },
            ...state.queryHistory.slice(queryIndex + 1),
          ],
        })),
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
                  row: order,
                  column: getColumnArray(order[0]),
                },
              ],
            };
          }
          return state;
        }),
    }),
    {
      name: "query-store",
      partialize: (state) => ({ queryHistory: state.queryHistory }),
      skipHydration: true,
      onRehydrateStorage: (state) => {
        console.log("hydration starts");

        // optional
        return (state, error) => {
          if (error) {
            console.log("an error happened during hydration", error);
          } else {
            console.log("hydration finished");
          }
        };
      },
    }
  )
);
