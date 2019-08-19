import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 200px;
  background-color: red;
  color: white;
`

const Content = styled.p`
  width: 100px;
  font-size: 20px;
  background-color: blue;
  color: inherit;

  &:hover {
    background-color: green;
  }
`

const Example = props => (
  <Wrapper>
    <Content {...props} />
  </Wrapper>
)

ReactDOM.render(<Example>Hello</Example>, document.getElementById('app'))
