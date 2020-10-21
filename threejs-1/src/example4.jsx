import React from 'react'
import * as THREE from 'three'

export default function Example() {
  React.useLayoutEffect(() => {
    const scene = new THREE.Scene()

    const frontSpot = new THREE.SpotLight(0xeeeece)
    frontSpot.position.set(1000, 1000, 1000)
    scene.add(frontSpot)

    const frontSpot2 = new THREE.SpotLight(0xddddce)
    frontSpot2.position.set(-500, -500, -500)
    scene.add(frontSpot2)

    scene.background = new THREE.Color(0x282c34)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000,
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('app').appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(20, 20, 20)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)

    mesh.scale.x = 0.1
    mesh.scale.y = 0.1
    mesh.scale.z = 0.1

    scene.add(mesh)

    const animate = function () {
      requestAnimationFrame(animate)

      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.005
      mesh.rotation.z += 0.005

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <div />
}
