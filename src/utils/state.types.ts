import { sidePanel } from "@/utils/constants";

export interface State {
  sidePanel: {
    activeMenu: sidePanel,
  },
  queryData: string | undefined,
  queryHistory: {
    timestamp: string,
    queryValue: string,
    isFavourite: boolean
  }[],
}

export interface authSliceState {
  email: string;
  password: string;
}