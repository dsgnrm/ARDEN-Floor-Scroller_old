import React, {useRef, useEffect} from 'react'
import {useGLTF} from '@react-three/drei/core/useGLTF'
import * as THREE from 'three'

export default function Model(props) {

  const group = useRef()
  const {nodes, materials} = useGLTF('./assets/glb/building.gltf')

  const floorPass = props.fun;
  const id = props.currentMesh;

  const floors = Object.values(nodes);

  // floorPass(floors.length)

  const selectedMaterial = new THREE.MeshPhysicalMaterial({color: 'green'})
  const unselectedMaterial = new THREE.MeshPhysicalMaterial({color: '#D4D4D4'})
  // +++++++++++++++++++ Reloads every time?
  const Building = () => (floors.map((_, i) => <mesh
    key={i}
    material={id === i
    ? selectedMaterial
    : unselectedMaterial}
    geometry={nodes[`meshID-${i}`].geometry}/>))
  // +++++++++++++++++++
  return (
    <group ref={group} {...props} dispose={null}>
      <Building/>
    </group>
  )
}

useGLTF.preload('/building.gltf')
