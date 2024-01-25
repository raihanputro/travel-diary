import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProfile = (state) => state.profile || initialState;

export const selectProfileData = createSelector(selectProfile, (state) => state.dataUser);