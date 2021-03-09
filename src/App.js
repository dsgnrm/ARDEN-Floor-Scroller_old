import React, {useState} from 'react'
import {Canvas} from 'react-three-fiber'
import BuildingShellLoader from './components/BuildingShellLoader/BuildingShellLoader'
import './App.css'

const planOffset = 40;

function Plans({yPos, xPos}) {
  // _-_-_-_-_-_-_-_- Placehoder just to use map function ....
  let planeNo = [0,1,2,3,4,5];

  const Planes = () => (planeNo.map((_, i) => <mesh position={[
    xPos, yPos - planOffset * i,
    0
  ]}>
    <boxBufferGeometry args={[40, 30, 30]} attach="geometry"/>
    <meshPhysicalMaterial attach="material" color={"white"}/>
  </mesh>))

  return (
    <group>
      <Planes/>
    </group>
  )
}

function App() {
  const xPos = 30;
  let [yPos,
    setyPos] = useState(planOffset)

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
              <BuildingShellLoader value={yPos} offset={planOffset}/> 
            </Canvas>
          </div>
        </div>
      </div>
    </div>

  );
}
export default App;
