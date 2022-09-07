import React from 'react'
import './Book.css'

function Book({book}) {
  const{name, preview, author, price} = book
  return (
    <div className='book'>
      <div className='content'>
        <h3>{name}</h3>
        <p>{preview}</p>
        <p>Author: {author.name}</p>
        <p>Price: {price} </p>
        <div className='icons'>
          <i class="fa-solid fa-square-plus"></i>
          <i class="fa-sharp fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  )
}

export default Book