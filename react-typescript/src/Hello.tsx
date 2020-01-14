import React from 'react'

interface Props {
  name: string
  age: number
  skills: string[]
}

const Hello: React.FC<Props> = ({ name, age, skills }) => (
  <div>
    Name: {name}
    <br/>
    Age: {age}
    <br/>
    Skills: {skills.join(', ')}
  </div>
)

export default Hello
