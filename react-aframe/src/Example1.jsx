import React from 'react'

const Example = () => {
  return (
    <a-scene>
      <a-box position="0 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  )
}

export default Example
