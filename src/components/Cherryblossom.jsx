import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cherryblossom(props) {
  const { nodes, materials } = useGLTF('/models/cherry-blossom/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[88.121, 0, 0]} rotation={[Math.PI / 2, 0, -1.26]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.foliage} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.bark} position={[-0.066, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.foliage} position={[-0.066, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.bark} position={[88.121, 0, 0]} rotation={[Math.PI / 2, 0, -1.26]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.bark} position={[-72.204, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.foliage} position={[-72.204, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/cherry-blossom/scene.gltf')
