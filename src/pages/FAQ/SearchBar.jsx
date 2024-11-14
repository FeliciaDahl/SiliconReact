import React from 'react'

const SearchBar = ({searchInput, setSearchInput}) => {
  return (
    <div className='searchbar'>
        <input className='input search-input' type="text" placeholder='Search..' value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)}/>
    </div>
  )
}

export default SearchBar