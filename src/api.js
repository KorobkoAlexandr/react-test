import { v4 as uuid } from "uuid";

const vehiclesURI = 'https://swapi.py4e.com/api/vehicles';
const starshipsURI = 'https://swapi.py4e.com/api/starships';

export const fetchVehicles = (uri = vehiclesURI) => {
    return fetch(uri);
};

export const fetchStarships = (uri = starshipsURI) => {
    return fetch(uri);
};

export const apiHelper = (requestFn) => async () => {
    let next;
    let first = true;
    const results = [];
    while (!!next || first) {
        const data = await requestFn(next);
        const jsonData = await data.json();
        next = jsonData.next;
        first = false;
        results.push(...jsonData.results);
    }
    results.forEach((entity) => {
        entity.id = uuid()
    });

    return results;
}
