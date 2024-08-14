import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Animatedoak(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/animated-oak/scene.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)



  // useEffect(() => {
  //   actions["Idle"].reset().fadeIn(0.6).play()
  //   return () => actions["Idle"].fadeOut(0.6)
  // }, [])
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_941">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Mesh_0_939" />
                  <group name="Mesh_1_940" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.bark} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.foliage} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.foliage} skeleton={nodes.Object_10.skeleton} />
                </group>
              </group>
              <group name="Armature001_2255" position={[119.008, 0, 0]} rotation={[-Math.PI, 1.354, -Math.PI]}>
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <group name="Mesh_0001_2253" />
                  <group name="Mesh_1001_2254" />
                  <skinnedMesh name="Object_954" geometry={nodes.Object_954.geometry} material={materials.bark} skeleton={nodes.Object_954.skeleton} />
                  <skinnedMesh name="Object_956" geometry={nodes.Object_956.geometry} material={materials.foliage} skeleton={nodes.Object_956.skeleton} />
                  <skinnedMesh name="Object_957" geometry={nodes.Object_957.geometry} material={materials.foliage} skeleton={nodes.Object_957.skeleton} />
                  <skinnedMesh name="Object_958" geometry={nodes.Object_958.geometry} material={materials.foliage} skeleton={nodes.Object_958.skeleton} />
                </group>
              </group>
              <group name="Armature002_3079" position={[-127.224, 0, 0]}>
                <group name="GLTF_created_2">
                  <primitive object={nodes.GLTF_created_2_rootJoint} />
                  <group name="Mesh_0002_3077" />
                  <group name="Mesh_1002_3078" />
                  <skinnedMesh name="Object_2274" geometry={nodes.Object_2274.geometry} material={materials.bark} skeleton={nodes.Object_2274.skeleton} />
                  <skinnedMesh name="Object_2276" geometry={nodes.Object_2276.geometry} material={materials.foliage} skeleton={nodes.Object_2276.skeleton} />
                  <skinnedMesh name="Object_2277" geometry={nodes.Object_2277.geometry} material={materials.foliage} skeleton={nodes.Object_2277.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/animated-oak/scene.gltf')
