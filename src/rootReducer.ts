import { combineReducers } from '@reduxjs/toolkit';
import vehiclesReducer from './reducers/vehiclesSlice'
import starshipsReducer from './reducers/starshipsSlice'

const rootReducer = combineReducers({
    vehicles: vehiclesReducer,
    starships: starshipsReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
