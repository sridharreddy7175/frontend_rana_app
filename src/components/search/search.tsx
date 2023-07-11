import React, { useState } from 'react'

export const Search = () => {
const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput= (e:any) => {
    const search = e.target.value;
    setSearchTerm(search)
  }

  const onClickSearch = () => {
    console.log("saerch text :", searchTerm);
   
  }

  return (
    <div className='row'>
        <div className='col-md-3 ms-2 ps-3 my-1 '>
            <input  type="text" className='form-control search' placeholder='search' onChange={handleSearchInput}></input><span className='search-position' onClick={onClickSearch}><i className="bi bi-search"></i></span>
        </div>
    </div>
  )
}
