import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiHelper, fetchStarships } from "../api";
import { Starship, StarshipsState } from "../types";

export const getAllStarships = createAsyncThunk('starships/getAll', apiHelper<Starship>(fetchStarships))


const initialState: StarshipsState = {
    entities: [],
    loading: 'idle',
    currentPage: 1,
};

const startshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        changeStarshipPage: (state: StarshipsState, action: { payload: number }) => {
            return { ...state, currentPage: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllStarships.pending, (state: StarshipsState) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            })
            .addCase(getAllStarships.fulfilled, (state: StarshipsState, action: { payload: Starship[] }) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.entities = action.payload;
                }
            })
            .addCase(getAllStarships.rejected, (state: StarshipsState, action: { error: any }) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.error = action.error;
                }
            })
    }
})

export const { changeStarshipPage } = startshipsSlice.actions;

export default startshipsSlice.reducer;
