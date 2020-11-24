import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiHelper, fetchVehicles } from "../api";

export const getAllVehicles = createAsyncThunk('vehicles/getAll', apiHelper(fetchVehicles));

const initialState = {
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
        changePage: (state, action) => {
            return { ...state, currentPage: action.payload }
        },
        searchByName: (state, action) => {
            if (!action.payload.trim().length) {
                return { ...state, filtered: [...state.entities] };
            }

            const vehicles = state.entities.slice();
            const filtered = vehicles.filter(vehicle => vehicle.name.includes(action.payload));
            return { ...state, filtered };
        },
        filterByClass: (state, action) => {
            if (action.payload === 'None') {
                return { ...state, filtered: [...state.entities] };
            }

            const vehicles = state.entities.slice();
            const filtered = vehicles.filter(vehicle => vehicle.vehicle_class === action.payload);
            return { ...state, filtered };
        }
    },
    extraReducers: {
        [getAllVehicles.fulfilled]: (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                console.log('store', action.payload);
                const set = new Set();
                action.payload.forEach(v => {
                    if (v.vehicle_class) {
                        set.add(v.vehicle_class);
                    }
                });
                state.classes = [...set];
                state.entities = action.payload;
                state.filtered = action.payload;
            }
        },
        [getAllVehicles.pending]: (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        [getAllVehicles.rejected]: (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.error = action.error;
            }
        }
    }
});

export const { changePage, searchByName, filterByClass } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
