import React, { ChangeEvent, useState } from "react";
import './SearchInput.scss'

const SearchInput = (props: {onSearch: any}) => {
    const [search, setValue] = useState('');

    const inputChanged = (e: ChangeEvent<HTMLInputElement>) => {
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
