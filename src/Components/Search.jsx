import React from 'react'
import { BiSearch } from "react-icons/bi"

function Search() {
    return (
        <div className='search'>
            <div className="icon">
                <BiSearch />
            </div>
            <input type="text" placeholder='Search Brands' />
        </div>
    )
}

export default Search