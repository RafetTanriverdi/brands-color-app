import React, { useContext } from 'react'
import { BiDownload, BiLink } from 'react-icons/bi'
import MainContext from '../Context/MainContext'
import { GrClose } from "react-icons/gr"

function Download() {

  const { selectedBrands,setselectedBrands } = useContext(MainContext)
  return (
    <div className='download'>
      <div className="actions">
        <BiLink />
        <BiDownload />
      </div>


      <div className="selected" onClick={()=>setselectedBrands([])}>
       <GrClose /> 
        {selectedBrands.length} Brand{selectedBrands.length > 1 && "s"} Collected
      </div>
    </div>
  )
}

export default Download