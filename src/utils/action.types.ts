import { State, authSliceState } from "@/utils/state.types";

export interface Action {
  updateQueryData: (queryData: State["queryData"]) => void;
  updateQueryHistory: (queryValue: string | undefined) => void;
}

export interface authSliceAction {
  updateEmail: (email: authSliceState["email"]) => void;
  updatePassword: (password: authSliceState["password"]) => void;
}