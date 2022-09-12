import React, { useState } from 'react'
import './Book.css'
import UpdateForm from './UpdateForm'

function Book({book, onDelete, onUpdate}) {
  const{name, preview, author, price} = book
  const [update, setUpdate] = useState(false)

  function handleDelete(){
    onDelete(book.id)
  }

  function handleUpdate() {
    setUpdate(!update)
  }

  function bookUpdate(formData) {
    setUpdate(!update)
    onUpdate(formData)
  }

  return (
    <div className='book'>
      <div className='content'>
        <h3>{name}</h3>
        <p>{preview}</p>
        <p>Author: {author.name}</p>
        <p>Price: {price} </p>
        <div className='icons'>
        <i class="fa-solid fa-pen-to-square" onClick={handleUpdate} ></i>
          <i className="fa-sharp fa-solid fa-trash" onClick={handleDelete} ></i>
        </div>
      </div>
      {update? <UpdateForm book={book} handleUpdate={bookUpdate} />: null }
    </div>
  )
}

export default Book