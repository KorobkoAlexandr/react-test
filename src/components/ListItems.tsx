import React, { useEffect, useState } from 'react';
import ListGroup from "react-bootstrap/cjs/ListGroup";
import ListItem from "./ListItem";
import { Vehicle } from "../types";
import { useSelector } from "react-redux";
import { getVehiclesCurrentPage } from "../selectors/vehiclesSelectors";
import Paginator from "./Paginator";

const ListItems = (props: { data: any }) => {
    const [visibleData, setVisibleData]: [any, any] = useState([]);
    const currentPage = useSelector(getVehiclesCurrentPage);

    const setVisibleDataEffectCb = () => {
        const start = (currentPage - 1) * 5;
        const end = currentPage * 5;
        const dataSlice: any = props.data.slice(start, end);
        setVisibleData(dataSlice);
    };

    useEffect(setVisibleDataEffectCb, [props.data, currentPage]);

    return (
        <>
            <ListGroup>
                {
                    visibleData.map((item: any) => (
                        <ListItem id={item.id} title={item.name} key={item.id}/>
                    ))
                }
            </ListGroup>
            <Paginator currentPage={currentPage} dataLength={props.data.length}/>
        </>
    )
};

export default ListItems;
