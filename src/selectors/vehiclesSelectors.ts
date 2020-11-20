import { AppStateType } from "../types";

export const vehiclesLoading = (state: AppStateType) => state.vehicles.loading;

export const vehicles = (state: AppStateType) => [...state.vehicles.entities];

export const filteredVehicles = (state: AppStateType) => ([...state.vehicles.filtered])

export const getVehiclesCurrentPage = (state: AppStateType) => state.vehicles.currentPage;

export const getVeiclesClasses = (state: AppStateType) => ([...state.vehicles.classes]);
