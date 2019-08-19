import React from 'react'
import ReactDOM from 'react-dom'
import styles from './app.css'

const Example = props => (
  <div className={styles.wrapper}>
    <p className={styles.content} {...props} />
  </div>
)

ReactDOM.render(<Example>Hello</Example>, document.getElementById('app'))
