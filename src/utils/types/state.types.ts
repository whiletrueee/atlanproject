import { sidePanel } from "@/utils/constants";

export interface State {
  preview: boolean;
  tableData: {
    row: any[] | undefined;
    columns: any[] | undefined;
  };
  sidePanel: {
    activeMenu: sidePanel;
  };
  queryData: { queryValue: string | undefined; index: number | undefined };
  queryHistory: {
    timestamp: string;
    queryValue: string;
    isFavourite: boolean;
    tableName: string;
  }[];
}

export interface authSliceState {
  email: string;
  password: string;
}
