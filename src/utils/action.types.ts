import { State, authSliceState } from "@/utils/state.types";

export interface Action {
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
}

export interface authSliceAction {
  updateEmail: (email: authSliceState["email"]) => void;
  updatePassword: (password: authSliceState["password"]) => void;
}