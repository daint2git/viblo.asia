import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'

const Example = props => (
  <div className="wrapper">
    <p className="content" {...props} />
  </div>
)

ReactDOM.render(<Example>Hello</Example>, document.getElementById('app'))
