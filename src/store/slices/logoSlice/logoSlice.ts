import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Logo } from "../../types";

export interface LogoState {
  data: Logo;
}

const initialState: LogoState = {
  data: {
    brandName: "",
    industry: "",
    style: "",
    colors: "",
    fonts: [],
    icons: [],
  },
};
type InitialStateType = typeof initialState;

export enum LogoActionsType {
  SET_LOGO_NAME = "setBrandName",
  SET_LOGO_INDUSTRY = "setIndustry",
  SET_LOGO_STYLE = "setStyle",
  SET_LOGO_COLOR = "setColor",
  SET_LOGO_FONT = "setFont",
  SET_LOGO_ICON = "setIcon",
}

export const logoSlice = createSlice({
  name: "logo",
  initialState,
  reducers: {
    [LogoActionsType.SET_LOGO_NAME](
      state: InitialStateType,
      action: PayloadAction<any>
    ) {
      state.data.brandName = action.payload;
    },
    [LogoActionsType.SET_LOGO_INDUSTRY](
      state: InitialStateType,
      action: PayloadAction<any>
    ) {
      state.data.industry = action.payload;
    },
    [LogoActionsType.SET_LOGO_STYLE](
      state: InitialStateType,
      action: PayloadAction<any>
    ) {
      state.data.style = action.payload;
    },
    [LogoActionsType.SET_LOGO_COLOR](
      state: InitialStateType,
      action: PayloadAction<any>
    ) {
      state.data.colors = action.payload;
    },
    [LogoActionsType.SET_LOGO_FONT](
      state: InitialStateType,
      action: PayloadAction<any>
    ) {
      state.data.fonts = action.payload;
    },
    [LogoActionsType.SET_LOGO_ICON](
      state: InitialStateType,
      action: PayloadAction<any>
    ) {
      state.data.icons = action.payload;
    },
  },
});

export const selectIcons = (state: { logo: { data: { icons: any[] } } }) =>
  state.logo.data.icons;
export const selectStyle = (state: { logo: { data: { style: any[] } } }) =>
  state.logo.data.style;

export const selectColor = (state: { logo: { data: { colors: any[] } } }) =>
  state.logo.data.colors;

export const {
  setBrandName,
  setIndustry,
  setColor,
  setStyle,
  setFont,
  setIcon,
} = logoSlice.actions;

export default logoSlice.reducer;
