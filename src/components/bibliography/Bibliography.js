import React, { useState } from 'react'
import './Bibliography.css'
import NewAuthor from './NewAuthor'

function Bibliography() {
  const[addAuthorForm, setAddAuthorForm] = useState(false)

  //Toggle new author form
  function handleClick() {
    setAddAuthorForm(!addAuthorForm)
  }

  //Handle new author form submit
  function handleFormSubmit(formData){
    console.log("Submit")
  }

  return (
    <div>
      <button className='add-author' onClick={handleClick}>{addAuthorForm? "Hide form" : "Add an author"}</button>
      {addAuthorForm? <NewAuthor onFormSubmit={handleFormSubmit} />: null}
    </div>
  )
}

export default Bibliography