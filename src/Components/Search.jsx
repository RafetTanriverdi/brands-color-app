import React,{useContext} from 'react'
import { BiSearch } from "react-icons/bi"
import MainContext from '../Context/MainContext'


function Search() {
    const {search,setsearch} = useContext(MainContext);


    return (
        <form className='search'>
            <div className="icon">
                <BiSearch />
            </div>
            <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='Search Brands' />
        </form>
    )
}

export default Search