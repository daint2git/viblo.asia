import React, { useState } from 'react'
import { observer } from 'mobx-react'

const BirdForm = ({ addBird }) => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('red')

  const handleSubmit = event => {
    event.preventDefault()
    addBird({ name, color })
    setName('')
    setColor('red')
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleColorChange = event => {
    setColor(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Bird Form</h3>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <select value={color} onChange={handleColorChange}>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
        <option value="blue">blue</option>
      </select>
      <br />
      <button type="submit">add bird</button>
    </form>
  )
}

export default observer(BirdForm)
