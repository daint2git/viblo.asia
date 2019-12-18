import React from 'react'

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

export default Button
