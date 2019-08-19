import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
  wrapper: {
    width: 200,
    backgroundColor: 'red',
    color: 'white',
  },
  content: {
    width: 100,
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'inherit',
  },
}

const Example = props => (
  <div style={styles.wrapper}>
    <p style={styles.content} {...props} />
  </div>
)

ReactDOM.render(<Example>Hello</Example>, document.getElementById('app'))
