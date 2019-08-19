/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReactDOM from 'react-dom'

const wrapperStyle = css`
  width: 200px;
  background-color: red;
  color: white;
`

const contentStyle = css`
  width: 100px;
  font-size: 20px;
  background-color: blue;
  color: inherit;

  &:hover {
    background-color: green;
  }
`

const Example = props => (
  <div css={wrapperStyle}>
    <p css={contentStyle} {...props} />
  </div>
)

ReactDOM.render(<Example>Hello</Example>, document.getElementById('app'))
