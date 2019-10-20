import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import BirdStore from './BirdStore'
import BirdView from './BirdView'

const App = () => (
  <Provider BirdStore={BirdStore}>
    <BirdView />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))
