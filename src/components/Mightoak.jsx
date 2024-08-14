import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mightoak(props) {
  const { nodes, materials } = useGLTF('/models/might-oak/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -2.93]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.foliage} />
      </group>
      <group position={[0, 0, 125.087]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_13.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.foliage} />
      </group>
      <group position={[0, 0, -107.7]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_18.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.foliage} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.foliage} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.bark} position={[0, 0, -2.93]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.bark} position={[0, 0, 125.087]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.bark} position={[0, 0, -107.7]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/might-oak/scene.gltf')
