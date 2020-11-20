import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiHelper, fetchVehicles } from "../api";
import { Vehicle, VehiclesState } from "../types";

export const getAllVehicles = createAsyncThunk('vehicles/getAll', apiHelper<Vehicle>(fetchVehicles));

const initialState: VehiclesState = {
    entities: [],
    loading: 'idle',
    currentPage: 1,
    filtered: [],
    classes: []
};

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        changePage: (state: VehiclesState, action: { payload: number }) => {
            return { ...state, currentPage: action.payload }
        },
        searchByName: (state: VehiclesState, action: {payload: string}) => {
            if(!action.payload.trim().length) {
                return {...state, filtered: [...state.entities]};
            }

            const vehicles = state.entities.slice();
            const filtered = vehicles.filter(vehicle => vehicle.name.includes(action.payload));
            return { ...state, filtered};
        },
        filterByClass: (state: VehiclesState, action: {payload: string}) => {
            if(action.payload === 'None') {
                return {...state, filtered: [...state.entities]};
            }

            const vehicles = state.entities.slice();
            const filtered = vehicles.filter(vehicle => vehicle.vehicle_class === action.payload);
            return { ...state, filtered};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllVehicles.fulfilled, (state: VehiclesState, action: { payload: Vehicle[] }) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    console.log('store', action.payload);
                    const set = new Set<string>();
                    action.payload.forEach(v => {
                        if(v.vehicle_class) {
                            set.add(v.vehicle_class);
                        }
                    });
                    state.classes = [...set];
                    state.entities = action.payload;
                    state.filtered = action.payload;
                }
            })
            .addCase(getAllVehicles.pending, (state: VehiclesState, action: { payload: any }) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            })
            .addCase(getAllVehicles.rejected, (state: VehiclesState, action: { error: any }) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.error = action.error;
                }
            })
    }
});

export const { changePage, searchByName, filterByClass } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
