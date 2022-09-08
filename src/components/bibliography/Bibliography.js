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

 //Post new book on database and rerender page
  function handleFormSubmit(formData) {
    fetch("https://books-bay-app.herokuapp.com/authors",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((obj) => setAuthorsData([...authorsData, obj]))
  }

  //fetch author data
  useEffect(() => {
    fetch("https://books-bay-app.herokuapp.com/authors")
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