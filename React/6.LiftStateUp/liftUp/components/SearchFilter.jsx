import { useState } from 'react'
import './style.css'


function SearchFilter(props) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchFilter
