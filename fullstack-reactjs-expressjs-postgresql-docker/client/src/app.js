import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const ProductList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
)

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    axios({ method: 'get', url: `${API_URL}/products` })
      .then(response => setList(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h2>Product list</h2>
      <ProductList list={list} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
