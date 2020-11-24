export const vehiclesLoading = (state) => state.vehicles.loading;

export const vehicles = (state) => [...state.vehicles.entities];

export const filteredVehicles = (state) => ([...state.vehicles.filtered])

export const getVehiclesCurrentPage = (state) => state.vehicles.currentPage;

export const getVeiclesClasses = (state) => ([...state.vehicles.classes]);
