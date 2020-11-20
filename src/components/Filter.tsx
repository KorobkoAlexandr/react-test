import React from "react";
import './Filter.scss';
import { useSelector } from "react-redux";
import { getVeiclesClasses } from "../selectors/vehiclesSelectors";

const Filter = (props: {onSelect: any}) => {
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
                    vehiclesClasses.map((value: string, ind: number) => (<option value={value} key={ind}>{value.toUpperCase()}</option>))
                }
            </select>
            <label htmlFor="filter" className="filter-label">
                Filter by Class
            </label>
        </div>
    )
}

export default Filter;
