import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Treeanimate(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/tree-animate/scene.gltf')
  const { actions } = useAnimations(animations, group)


  // useEffect(() => {
  //   actions["Idle"].reset().fadeIn(0.6).play()
  //   return () => actions["Idle"].fadeOut(0.6)
  // }, [])

 
  const newProps = { ...props, name: "Big Tree"}
  
  return (
    <group ref={group} {...newProps} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Bark_9_2">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Bark} />
              </group>
              <group name="Leaf_6_3">
                <mesh name="mesh_1" geometry={nodes.mesh_1.geometry} material={materials.Leaf} morphTargetDictionary={nodes.mesh_1.morphTargetDictionary} morphTargetInfluences={nodes.mesh_1.morphTargetInfluences} />
                <mesh name="mesh_1_1" geometry={nodes.mesh_1_1.geometry} material={materials.Branch} morphTargetDictionary={nodes.mesh_1_1.morphTargetDictionary} morphTargetInfluences={nodes.mesh_1_1.morphTargetInfluences} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/tree-animate/scene.gltf')
