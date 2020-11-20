import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { startships, startshipsLoading } from "../selectors/starshipsSelectors";
import ListItems from "./ListItems";
import { getAllStarships } from "../reducers/starshipsSlice";

const StarshipsList = (props: any) => {
    const dispatch = useDispatch();
    const allStarships = useSelector(startships);
    const loading = useSelector(startshipsLoading);

    const getStarships = () => {
        const storageStr = localStorage.getItem('persist:root');
        const storageObj = storageStr && JSON.parse(storageStr);

        if (storageObj && storageObj.starships) {
            const entities = JSON.parse(storageObj.starships);
            if(entities.length) return;
        }

        let promise: any;
        if (loading === 'idle') {
            promise = dispatch(getAllStarships());
        }

        return () => {
            if (promise) {
                promise.abort()
            }
        }

    };

    useEffect(getStarships, []);

    return (
        <ListItems data={allStarships}/>
    )
}

export default StarshipsList;
