import React, { useState } from 'react'
import './Bibliography.css'
import NewAuthor from './NewAuthor'

function Bibliography() {
  const[addAuthorForm, setAddAuthorForm] = useState(false)

  function handleClick() {
    setAddAuthorForm(!addAuthorForm)
  }

  return (
    <div>
      <button className='add-author' onClick={handleClick}>{addAuthorForm? "Add an author" : "Hide form"}</button>
      {addAuthorForm? <NewAuthor />: null}
    </div>
  )
}

export default Bibliography