import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  colors: {
    red: 'red',
    green: 'green',
    blue: 'blue',
  },
  sizes: {
    small: 16,
    medium: 20,
    large: 24,
  },
}

const Button = ({ color = 'green', size = 'medium', ...rest }) => (
  <button
    type="button"
    style={{
      color: styles.colors[color],
      fontSize: styles.sizes[size],
    }}
    {...rest}
  />
)

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(styles.colors)),
  size: PropTypes.oneOf(Object.keys(styles.sizes)),
}

export default Button
