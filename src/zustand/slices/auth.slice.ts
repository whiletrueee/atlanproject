import { authSliceAction } from "@/utils/action.types";
import { authSliceState } from "@/utils/state.types";
import { create } from "zustand";

export const createAuthSlice = create<authSliceState & authSliceAction>()(
  (set) => ({
    email: "",
    password: "",
    updateEmail: (email) => set(() => ({ email: email })),
    updatePassword: (password) => set(() => ({ password: password })),
  })
);
