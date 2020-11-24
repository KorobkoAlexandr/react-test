import React, { useState } from "react";
import './SearchInput.scss'

const SearchInput = (props) => {
    const [search, setValue] = useState('');

    const inputChanged = (e) => {
        const value = e.target.value;
        setValue(value);
        props.onSearch(value);
    }

    return (
        <div className="search-input">
            <input
                type="text"
                value={search}
                placeholder="Search By Name"
                onChange={inputChanged}/>
        </div>
    )
}

export default SearchInput;
