export interface State {
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