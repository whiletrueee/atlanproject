import { Action } from "@/utils/action.types";
import { State } from "@/utils/state.types";
import { create } from "zustand";

export const useStore = create<State & Action>()((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));
