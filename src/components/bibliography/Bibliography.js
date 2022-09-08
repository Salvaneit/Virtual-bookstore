import React, { useState, useEffect } from 'react'
import Author from './Author'
import './Bibliography.css'
import NewAuthor from './NewAuthor'

function Bibliography() {
  const[addAuthorForm, setAddAuthorForm] = useState(false)
  const[authorsData, setAuthorsData] = useState([])

  //Toggle new author form
  function handleClick() {
    setAddAuthorForm(!addAuthorForm)
  }

  //Handle new author form submit
  function handleFormSubmit(formData){
    console.log("Submit")
  }

  //fetch author data
  useEffect(() => {
    fetch("http://localhost:9292/authors")
      .then((res) => res.json())
      .then((r) => setAuthorsData(r))
  }, [])

    //Pass books data as props to Book component
  const displayAuthors = authorsData.map((author) => {
    return <Author key={author.id} author={author} />
  })


  function renderAuthors() {
    let authors = []
    let size = 3

    for(let i = 0; i < displayAuthors.length; i += size ) {
      authors.push(displayAuthors.slice(i, i + size))
    }
    const renderAuthors = authors.map((authorsRow) => {
      return <div className='books'>{authorsRow}</div>
    })

    return renderAuthors
  }

  return (
    <div>
      <button className='add-author' onClick={handleClick}>{addAuthorForm? "Hide form" : "Add an author"}</button>
      {addAuthorForm? <NewAuthor onFormSubmit={handleFormSubmit} />: null}
      {renderAuthors()}
    </div>
  )
}

export default Bibliography