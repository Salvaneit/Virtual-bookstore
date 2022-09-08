import React, { useEffect, useState } from 'react'
import './Filter.css'

function Filter({onCategoryChange, onSearchChange, search}) {

  const [authors, setAuthors] = useState([])

  useEffect(() => {
    fetch('https://books-bay-app.herokuapp.com/authors')
      .then((res) => res.json())
      .then((data) => setAuthors(data) )
  },[])

  const options = authors.map((author) => {
    return <option value={author.name}>{author.name}</option>
  })

  return (
    <div className='filter'>
      <input className='search' type='text' name='search' placeholder='Search book...' value={search} onChange={onSearchChange} />
      <select name='sort' onChange={onCategoryChange}>
        <option value='All'>All</option>
        {options}
      </select>
    </div>
  )
}

export default Filter