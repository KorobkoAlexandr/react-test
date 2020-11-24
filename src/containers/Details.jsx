import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Details.scss'
import Button from "react-bootstrap/cjs/Button";

const Details = (props) => {
    const { id } = useParams();
    const vehicle = useSelector((state) => state.vehicles.entities.find(v => v.id === id));
    const history = useHistory();

    const parseDate = (date) => {
        return !!date ? new Date("2014-12-10T15:36:25.724000Z").toLocaleString() : '';
    };

    const goBack = () => {
        history.goBack();
    };

    return vehicle ? (
        <div className="details-container">

            <div className="details-header">
                <h3>Name: {vehicle?.name}</h3>
                <Button variant="primary" onClick={goBack}>Back</Button>
            </div>
            <ul className="details-list">
                <li className="details-list__item">
                    <b>Model:</b> {vehicle?.model}
                </li>
                <li className="details-list__item">
                    <b>Build date:</b> {parseDate(vehicle?.created)}
                </li>
                <li className="details-list__item">
                    <b>Manufacturer:</b> {vehicle?.manufacturer}
                </li>
                <li className="details-list__item">
                    <b>Passengers:</b> {vehicle?.passengers}
                </li>
                <li className="details-list__item">
                    <b>Length:</b> {vehicle?.length}
                </li>
                <li className="details-list__item">
                    <b>Crew:</b> {vehicle?.crew}
                </li>
                <li className="details-list__item">
                    <b>Cargo Capacity:</b> {vehicle?.cargo_capacity}
                </li>
                <li className="details-list__item">
                    <b>Vehicle Class:</b> {vehicle?.vehicle_class}
                </li>
            </ul>
        </div>
    ): null;
};

export default Details;
