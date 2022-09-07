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
      </div>
    </div>
  )
}

export default Book