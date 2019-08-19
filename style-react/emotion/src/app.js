import React from 'react'
import ReactDOM from 'react-dom'
import { Global, css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

const Wrapper = styled.div(props => {
  console.log(props)
  return {
    width: '200px',
    backgroundColor: 'red',
    color: 'white',
  }
})

const Content = styled.p`
  width: 100px;
  font-size: 20px;
  background-color: blue;
  color: inherit;

  &:hover {
    background-color: green;
  }
`

const Button = styled.button`
  padding: 32px;
  background-color: lightgray;
  font-size: 24px;
  border-radius: 4px;
  color: ${props => {
    if (props.primary) return 'turquoise'
    if (props.danger) return 'hotpink'
    return 'black'
  }};
  font-weight: bold;

  &:hover {
    color: white;
  }
`

const BasicText = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const StyledBasicText = styled(BasicText)`
  color: hotpink;
  background-color: white;
  border: 1px solid hotpink;
`

const Section = styled.section`
  background: #333;
`

const Aside = Section.withComponent('aside')

const Child = styled.div`
  background-color: white;
  color: red;
`

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const MediaQueryComponent = styled.div`
  ${() => mq({ color: ['green', 'gray', 'hotpink'] })}
`

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const KeyframesComponent = styled.div`
  ${() => css`
    color: white;
    animation: ${bounce} 1s ease infinite;
  `}
`

const Example = props => (
  <React.Fragment>
    <Global
      styles={css`
        * {
          font-size: 25px;
        }
      `}
    />
    <Wrapper as="main">
      <Content {...props} />
      <Button>This my button component.</Button>
      <Button primary>This is a primary button.</Button>
      <StyledBasicText>Some Text</StyledBasicText>
      <Section>This is a section</Section>
      <Aside>This is an an aside</Aside>
      <hr />
      <Parent>
        <Child>green</Child>
      </Parent>
      <Child>red</Child>
      <hr />
      <br />
      <MediaQueryComponent>SomeText</MediaQueryComponent>
      <hr />
      <br />
      <KeyframesComponent>some bouncing text!</KeyframesComponent>
    </Wrapper>
  </React.Fragment>
)

ReactDOM.render(<Example>Hello</Example>, document.getElementById('app'))
