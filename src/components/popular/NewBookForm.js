import React, { useState } from 'react'
import './NewBookForm.css'

function NewBookForm({ onFormSubmit }) {

  const[formData, setFormData] = useState({
    name: "",
    preview: "",
    price: "",
    author_id: ""
  })

  //update form data
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //handle form submit
  function handleSubmit(e) {
    e.preventDefault()
    onFormSubmit(formData)
    setFormData({
      name: "",
      preview: "",
      price: "",
      author_id: ""
    })
  }

  return (
    <div>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit} >
        <input placeholder='Name' type='text' name='name' onChange={handleChange} value={formData.name} />
        <input placeholder='Preview' type='text' name='preview' onChange={handleChange} value={formData.preview} />
        <input placeholder='Price' type='number' name='price' onChange={handleChange} value={formData.price} />
        <input placeholder='Author id' type='number' name='author_id' onChange={handleChange} value={formData.author_id} />
        <input type='submit' value='Post book' />
      </form>
    </div>
  )
}

export default NewBookForm