import { SerializedError } from "@reduxjs/toolkit";

export interface Vehicle {
    id?: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: any[];
    films: any[];
    url: string;
    vehicle_class: string;
}

export interface VehiclesState {
    entities: Vehicle[];
    filtered: Vehicle[];
    loading: 'idle' | 'pending';
    currentPage: number;
    error?: SerializedError;
    classes?: string[];
}

export interface Starship {
    id?: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[];
    pilots: string[];
    starship_class: string;
    url: string;
}

export interface StarshipsState {
    entities: Starship[],
    loading: 'idle' | 'pending';
    currentPage: number;
    error?: SerializedError;
}


export interface AppStateType {
    vehicles: VehiclesState;
    starships: StarshipsState;
}
