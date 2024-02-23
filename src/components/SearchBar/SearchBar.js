import React from 'react'
import './Search.css'
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg'
 
export default function SearchBar() {
  return (
    <React.Fragment>
    <div className='searchBox-container' >
        <input className='searchBox' type='text' placeholder='Search a album of your choice' />
        <button className='searchIcon-btn' >
            <SearchIcon />
        </button>
        
    </div>
        
    </React.Fragment>
  )
}
