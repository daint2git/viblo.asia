import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello'

ReactDOM.render(
  <Hello
    name="Tokuda Shigeo"
    age={69}
    skills={['La Hán đẩy xe bò', 'vác cày qua núi', 'tiên ông trồng củ cải']}
  />,
  document.getElementById('root'),
)
