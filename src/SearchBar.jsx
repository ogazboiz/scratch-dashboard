import React from 'react'

import Searchicon from "./assets/searchicons.svg";
import "./SearchBar.css"
function SearchBar() {
  return (
    <div className='input-wrapper'>
        <img className="search-icon" src={Searchicon} alt="search icon" />
        <input placeholder="Search Content..."/>
    </div>
    
  )
}

export default SearchBar