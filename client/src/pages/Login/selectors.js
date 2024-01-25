import { createSelector } from "reselect";
import { initialState } from "@pages/Login/reducer";

const selectLoginState = (state) = state.login || initialState;

export const selectUserData = createSelector(selectLoginState, (state) => state.userData);