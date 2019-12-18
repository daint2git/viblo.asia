import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('With color', () => (
    <>
      <Button color="red">red</Button>
      <Button color="green">green</Button>
      <Button color="blue">blue</Button>
    </>
  ))
  .add('With size', () => (
    <>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
    </>
  ))
