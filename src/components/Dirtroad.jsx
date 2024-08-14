import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Dirtroad(props) {
  const { nodes, materials } = useGLTF('/models/roads/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/roads/scene.gltf')
