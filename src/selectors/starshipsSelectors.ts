import { AppStateType } from "../types";

export const startships = (state: AppStateType) => ([...state.starships.entities]);

export const startshipsLoading = (state: AppStateType) => (state.starships.loading);
