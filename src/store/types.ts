export enum LoadingStatus {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
  SUCCESS = "SUCCESS",
}

export interface IUser {
  name?: string;
  email?: string;
  token?: string;
}

export interface Logo {
  brandName?: string;
  industry?: string;
  style?: string;
  colors?: number;
  fonts?: string[];
  icons?: string[];
}
