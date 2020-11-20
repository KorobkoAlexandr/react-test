import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllVehicles, searchByName, filterByClass } from "../reducers/vehiclesSlice";
import { filteredVehicles, vehiclesLoading } from "../selectors/vehiclesSelectors";
import { Vehicle } from "../types";
import ListItems from "./ListItems";
import SearchInput from "./SearchInput";
import Filter from "./Filter";

const VehiclesList = (props: any) => {
    const dispatch = useDispatch();
    const loading = useSelector(vehiclesLoading);
    const filtered: Vehicle[] | undefined = useSelector(filteredVehicles);
    const getVehicles = () => {
        const storageStr = localStorage.getItem('persist:root');
        const storageObj = storageStr && JSON.parse(storageStr);

        if (storageObj && storageObj.vehicles) {
            const entities = JSON.parse(storageObj.vehicles);
            if(entities.length) return;
        }

        let promise: any;
        if (loading === 'idle') {
            promise = dispatch(getAllVehicles());
        }

        return () => {
            if (promise) {
                promise.abort()
            }
        }

    };

    useEffect(() => {
        dispatch(searchByName(''));
    }, [])

    const searchVehiclesByName = (search: string) => {
        dispatch(searchByName(search));
    };

    const filterVehicles = (ev: ChangeEvent<HTMLSelectElement>) => {
        dispatch(filterByClass(ev.target.value))
    }

    useEffect(getVehicles, []);

    return filtered ? (
        <>
            <div className="row">
                <SearchInput onSearch={searchVehiclesByName}/>
                <Filter onSelect={filterVehicles}/>
            </div>
            <ListItems data={filtered}/>
        </>
    ) : (<h5>Loading...</h5>)
};

export default VehiclesList;
