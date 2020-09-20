import React from 'react'

const Example = () => {
  React.useLayoutEffect(() => {
    AFRAME.registerComponent('event-click', {
      init() {
        this.el.addEventListener('click', () => {
          alert('clicked')
        })
      },
    })
  }, [])

  return (
    <a-scene>
      <a-entity
        gltf-model="url(/models/dragonite/scene.gltf)"
        position="3 0 -10"
        scale="0.02 0.02 0.02"
        event-click
      ></a-entity>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  )
}

export default Example
