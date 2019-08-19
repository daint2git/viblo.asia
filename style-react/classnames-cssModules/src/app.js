import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames/bind'
import styles from './app.css'

const cx = classNames.bind(styles)

const Example = props => (
  <div className={cx('wrapper', { centering: true })}>
    <p className={cx('content')} {...props} />
  </div>
)

ReactDOM.render(<Example>Hello</Example>, document.getElementById('app'))
