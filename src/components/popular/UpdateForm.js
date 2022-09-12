import React, {useState} from 'react'

function UpdateForm({book, handleUpdate}) {

  const{id, name, preview, author, price} = book

  const[formData, setFormData] = useState({
    id: id,
    name: name,
    preview: preview,
    price: price,
    author_id: author.id
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

  function handleSubmit() {
    handleUpdate(formData)
  }

  return (
    <div>
    <h3>Update book</h3>
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

export default UpdateForm