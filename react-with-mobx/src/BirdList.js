import React from 'react'
import { observer } from 'mobx-react'

const BirdList = ({ birds, birdCount }) => (
  <>
    <h3>Bird List</h3>
    <ul>
      {birds.map(bird => (
        <li key={bird.id} style={{ color: bird.color }}>
          {bird.name}
        </li>
      ))}
    </ul>
    <p>
      Have {birdCount} bird{birdCount > 1 ? 's' : ''}
    </p>
  </>
)

export default observer(BirdList)
