import React, { useContext } from 'react'
import { BiSearch } from "react-icons/bi"
import MainContext from '../Context/MainContext'


function Search() {
    const { search, setSearch } = useContext(MainContext);
    return (
        <form className='search'>
            <div className="icon">
                <BiSearch />
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Brands' />
        </form>
    )
}

export default Search