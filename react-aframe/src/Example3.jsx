import React from 'react'

const Example = () => {
  return (
    <a-scene>
      <a-entity
        gltf-model="url(/models/dragonite/scene.gltf)"
        position="0 0 -10"
        scale="0.02 0.02 0.02"
        rotation="0 45 0"
      ></a-entity>
    </a-scene>
  )
}

export default Example
