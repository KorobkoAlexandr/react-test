import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import ListGroup from "react-bootstrap/cjs/ListGroup";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { getVehiclesCurrentPage } from "../selectors/vehiclesSelectors";
import Paginator from "./Paginator";

const ListItems = (props) => {
    const [visibleData, setVisibleData] = useState([]);
    const currentPage = useSelector(getVehiclesCurrentPage);

    const setVisibleDataEffectCb = () => {
        const start = (currentPage - 1) * 5;
        const end = currentPage * 5;
        const dataSlice = props.data.slice(start, end);
        setVisibleData(dataSlice);
    };

    useEffect(setVisibleDataEffectCb, [props.data, currentPage]);

    return (
        <>
            <ListGroup>
                {
                    visibleData.map((item) => (
                        <ListItem id={item.id} title={item.name} key={item.id}/>
                    ))
                }
            </ListGroup>
            <Paginator currentPage={currentPage} dataLength={props.data.length}/>
        </>
    )
};

ListItems.propTypes = {
    data: PropTypes.array.isRequired
}

export default ListItems;
