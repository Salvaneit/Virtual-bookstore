import React from 'react'
import { useEffect, useState } from 'react'
import './Popular.css'

function Popular() {

  const[newBookForm, setNewBookForm] = useState(false)

  function handleClick() {
    setNewBookForm(!newBookForm)
  }

  return (
    <div>
      <button className='post-book' onClick={handleClick}> {newBookForm ? 'Hide form': 'Add a book'} </button>
    </div>
  )
}

export default Popular