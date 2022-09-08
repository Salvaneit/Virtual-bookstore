import React from 'react'
import './Book.css'

function Book({book, onDelete}) {
  const{name, preview, author, price} = book

  function handleDelete(){
    onDelete(book.id)
  }

  return (
    <div className='book'>
      <div className='content'>
        <h3>{name}</h3>
        <p>{preview}</p>
        <p>Author: {author.name}</p>
        <p>Price: {price} </p>
        <div className='icons'>
          {/* <i className="fa-solid fa-square-plus"></i> */}
          <i className="fa-sharp fa-solid fa-trash" onClick={handleDelete} ></i>
        </div>
      </div>
    </div>
  )
}

export default Book