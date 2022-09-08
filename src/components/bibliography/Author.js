import React from 'react'
import './Author.css'

function Author({author}) {

  const{id, name, about, books} = author

  const booksArray = books.map((book) => {
    return book.name
  })

  return (
    <div className='author-card' >
      <div className='content'>
        <h3>{name}</h3>
        <p>{about}</p>
        <p>Books: {booksArray.join(", ")}</p>
        <p>Author id: {id}</p>
      </div>
    </div>
  )
}

export default Author