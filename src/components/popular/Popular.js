import React from 'react'
import { useEffect, useState } from 'react'
import './Popular.css'
import NewBookForm from './NewBookForm'
import Book from './Book'

function Popular() {
  const[newBookForm, setNewBookForm] = useState(false)
  const [data, setData] = useState([])


  // fetch events data from api
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then((r) => setData(r))
  }, [])
  // console.log(data)

  //Display form onclick
  function handleClick() {
    setNewBookForm(!newBookForm)
  }

 //Post new book on database and rerender page
 function handleFormSubmit(formData) {
  fetch("http://localhost:9292/books",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
    .then((res) => res.json())
    .then((obj) => setData([...data, obj]))
}

  //Pass books data as props to Book component
  const displayBooks = data.map((book) => {
    return <Book key={book.id} book={book} onDelete={onDelete} />
  })

    //Render events in rows of 4
  //Mutates displayEvents into arrays of groups of 4
  function renderBooks() {
    let books = []
    let size = 3

    for(let i = 0; i < displayBooks.length; i += size ) {
      books.push(displayBooks.slice(i, i + size))
    }
    const renderBooks = books.map((booksRow) => {
      return <div className='books'>{booksRow}</div>
    })

    return renderBooks
  }

  // Handle delete
  function onDelete(id) {
    fetch('http://localhost:9292/books/:id')
  }

  return (
    <div>
      <button className='post-book' onClick={handleClick}> {newBookForm ? 'Hide form': 'Add a book'} </button>
      {newBookForm ? <NewBookForm onFormSubmit={handleFormSubmit} />: null}
      {renderBooks()}
    </div>
  )
}

export default Popular