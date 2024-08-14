import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mapletree(props) {
  const { nodes, materials } = useGLTF('/models/maple-tree/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-171.632, 0, 0]} rotation={[Math.PI / 2, 0, 2.361]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.foliage} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.bark} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.foliage} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.bark} position={[136.652, 0, 0]} rotation={[Math.PI / 2, 0, 1.312]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.foliage} position={[136.652, 0, 0]} rotation={[Math.PI / 2, 0, 1.312]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.bark} position={[-171.632, 0, 0]} rotation={[Math.PI / 2, 0, 2.361]} />
    </group>
  )
}

useGLTF.preload('/models/maple-tree/scene.gltf')
