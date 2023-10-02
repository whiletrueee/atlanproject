import { Action } from "@/utils/types/action.types";
import { sidePanel } from "@/utils/constants";
import { State } from "@/utils/types/state.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { dataTitle } from "@/utils/constants";
import order from "@/utils/Json/order.json";
import customer from "@/utils/Json/customer.json";
import employee from "@/utils/Json/employee.json";
import { getColumnArray } from "@/utils/helperFunction";

export const useStore = create<State & Action>()(
  persist(
    (set) => ({
      preview: false,
      tableData: {
        row: undefined,
        columns: undefined,
      },
      sidePanel: {
        activeMenu: sidePanel.recentQuery,
      },
      queryData: { queryValue: undefined, index: undefined },
      queryHistory: [],
      updatePreview: (preview: boolean) =>
        set((state: State & Action) => ({ ...state, preview })),
      updateSidePanel: (activeMenu: sidePanel) =>
        set((state: State & Action) => ({
          ...state,
          sidePanel: { activeMenu },
        })),
      updateFavorite: (queryIndex: number) =>
        set((state: State & Action) => ({
          ...state,
          queryHistory: [
            ...state.queryHistory.slice(0, queryIndex),
            {
              ...state.queryHistory[queryIndex],
              isFavourite: !state.queryHistory[queryIndex].isFavourite,
            },
            ...state.queryHistory.slice(queryIndex + 1),
          ],
        })),
      updateQueryData: (queryData: State["queryData"]) =>
        set((state: State & Action) => ({ ...state, queryData })),
      updateQueryHistory: (queryValue: string | undefined, tableName: string) =>
        set((state: State & Action) => {
          if (queryValue) {
            return {
              ...state,
              queryHistory: [
                ...state.queryHistory,
                {
                  timestamp: new Date().toISOString(),
                  queryValue,
                  isFavourite: false,
                  tableName,
                },
              ],
            };
          }
          return state;
        }),
      updateTableData: (tableName: string) => {
        const data = require(`@/utils/Json/${tableName}.json`);
        const columns = getColumnArray(data[0]);
        set((state: State & Action) => ({
          ...state,
          tableData: { row: data, columns },
        }));
      },
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
