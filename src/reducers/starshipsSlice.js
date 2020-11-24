import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiHelper, fetchStarships } from "../api";

export const getAllStarships = createAsyncThunk('starships/getAll', apiHelper(fetchStarships))

const initialState = {
    entities: [],
    loading: 'idle',
    currentPage: 1,
};

const startshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        changeStarshipPage: (state, action) => {
            return { ...state, currentPage: action.payload }
        }
    },
    extraReducers: {
        [getAllStarships.pending]: (state) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        [getAllStarships.fulfilled]: (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.entities = action.payload;
            }
        },
        [getAllStarships.rejected]: (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.error = action.error;
            }
        }

    }
})

export const { changeStarshipPage } = startshipsSlice.actions;

export default startshipsSlice.reducer;
