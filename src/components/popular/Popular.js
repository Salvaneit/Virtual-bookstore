import React from 'react'
import { useEffect, useState } from 'react'
import './Popular.css'
import NewBookForm from './NewBookForm'

function Popular() {

  const[newBookForm, setNewBookForm] = useState(false)

  function handleClick() {
    setNewBookForm(!newBookForm)
  }

  function handleFormSubmit() {
    console.log("submitted")
  }

  return (
    <div>
      <button className='post-book' onClick={handleClick}> {newBookForm ? 'Hide form': 'Add a book'} </button>
      {newBookForm ? <NewBookForm onFormSubmit={handleFormSubmit} />: null}
    </div>
  )
}

export default Popular