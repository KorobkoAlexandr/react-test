import { Starship, Vehicle } from "./types";
import { v4 as uuid } from "uuid";

const vehiclesURI = 'https://swapi.py4e.com/api/vehicles';
const starshipsURI = 'https://swapi.py4e.com/api/starships';

export const fetchVehicles = (uri: string = vehiclesURI) => {
    return fetch(uri);
};

export const fetchStarships = (uri: string = starshipsURI) => {
    return fetch(uri);
};

export const apiHelper = <T extends {id?: string}>(requestFn: any) => async (): Promise<T[]> => {
    let next: string | undefined;
    let first = true;
    const results: T[] = [];
    while (!!next || first) {
        const data = await requestFn(next);
        const jsonData = await data.json();
        next = jsonData.next;
        first = false;
        results.push(...jsonData.results);
    }
    results.forEach((entity: T) => {
        entity.id = uuid()
    });

    return results;
}
