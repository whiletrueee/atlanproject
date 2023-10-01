import { sidePanel } from "@/utils/constants";

export interface State {
  sidePanel: {
    activeMenu: sidePanel;
  };
  queryData: { queryValue: string | undefined; index: number | undefined };
  queryHistory: {
    timestamp: string;
    queryValue: string;
    isFavourite: boolean;
    row: any[];
    column: any[];
  }[];
}

export interface authSliceState {
  email: string;
  password: string;
}
