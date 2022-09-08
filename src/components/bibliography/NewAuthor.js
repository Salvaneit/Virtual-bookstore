import React, { useState } from 'react'

function NewAuthor({onFormSubmit}) {

  const[formData, setFormData] = useState({
    name: "",
    about: ""
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
      about: ""
    })
  }

  return (
    <div>
      <h2>Add an author:</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' type='text' name='name' onChange={handleChange} value={formData.name} />
        <input placeholder='About' type='text' name='about' onChange={handleChange} value={formData.about} />
        <input type='submit' value='Post author' />
      </form>
    </div>
  )
}

export default NewAuthor