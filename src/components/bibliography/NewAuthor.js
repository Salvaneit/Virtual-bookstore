import React, { useState } from 'react'

function NewAuthor() {

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

  return (
    <div>
      <h2>Add an author</h2>
      <form>
        <input placeholder='Name' type='text' name='name' onChange={handleChange} value={formData.name} />
        <input placeholder='About' type='text' name='about' onChange={handleChange} value={formData.about} />
      </form>
    </div>
  )
}

export default NewAuthor