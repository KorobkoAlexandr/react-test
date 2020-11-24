import React from "react";
import * as PropTypes from 'prop-types';
import './Filter.scss';
import { useSelector } from "react-redux";
import { getVeiclesClasses } from "../selectors/vehiclesSelectors";

const Filter = (props) => {
    const vehiclesClasses = useSelector(getVeiclesClasses)

    return (
        <div className="filter-container">
            <select
                onChange={props.onSelect}
                name="filter"
                className="filter-select"
                id="filter">
                <option>None</option>
                {
                    vehiclesClasses.map((value, ind) => (<option value={value} key={ind}>{value.toUpperCase()}</option>))
                }
            </select>
            <label htmlFor="filter" className="filter-label">
                Filter by Class
            </label>
        </div>
    )
}

Filter.propTypes = {
    onSelect: PropTypes.func.isRequired
};

export default Filter;
