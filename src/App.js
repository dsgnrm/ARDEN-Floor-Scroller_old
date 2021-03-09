// import ReactDOM, {render} from 'react-dom'
import React, {useRef, useState, Suspense, useEffect, createContext} from 'react'
import * as THREE from 'three'
import {Canvas, useFrame, useThree, extend} from 'react-three-fiber'
import {useGLTF} from '@react-three/drei/core/useGLTF'
import {Html, PerspectiveCamera, OrbitControls, Sphere} from '@react-three/drei'
import BuildingShellLoader from './components/BuildingShellLoader/BuildingShellLoader'
import './App.css'

const numFloors = 5;
const PlaneOffset = 40;

function Plans({yPos, xPos}) {

  let planeNo = [
    0,
    2,
    3,
    4,
    5,
    6
  ];

  const Planes = () => (planeNo.map((_, i) => <mesh position={[
    xPos, yPos - PlaneOffset * i,
    0
  ]}>
    <boxBufferGeometry args={[30, 30, 30]} attach="geometry"/>
    <meshPhysicalMaterial attach="material" color={"white"}/>
  </mesh>))

  return (

    <group>
      <Planes/>
    </group>
  )
}

function App() {

  const xPos = 20;
  
  let [yPos,
    setyPos] = useState(PlaneOffset)

  const wheel = (e) => {
    setyPos(yPos += (e.nativeEvent.deltaY * 0.07))
  }

  return (
    <div className="App">
      <div className="container1">
        <div id="div2" onWheel= {(e) => wheel(e)}>
          <div id="div3">
            <Canvas
              orthographic
              camera={{
              zoom: 10,
              position: [0, 0, 300]
            }}>
              <Plans yPos={yPos} xPos={xPos}/>
              <ambientLight intensity={0.3}/>
              <pointLight position={[30, 30, 30]}/>

              <BuildingShellLoader value={yPos} offset={PlaneOffset}/> 
            </Canvas>

          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
