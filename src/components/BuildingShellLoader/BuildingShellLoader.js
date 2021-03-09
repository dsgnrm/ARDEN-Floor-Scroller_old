import React, {useState, Suspense, useEffect} from 'react'
import { useFrame, } from 'react-three-fiber'
import Model from './gltfjsx/Building'
import './BuildingShellLoader.css'

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

function LookAt() {
  //-_-_-_-_- Focus on Start
  /*
  const {camera} = useThree()
  camera.lookAt(0, 50, 0);
  */

  //-_-_-_-_- Aways Focus
  useFrame(state => {
    state
      .camera
      .lookAt(0, 50, 0);
    state
      .camera
      .updateProjectionMatrix()
  })
  return null
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-MAIN
function BuildingShellLoader({value}) {
  console.log(value);
  const [selectedID,
    setSelectedID] = useState();

  useEffect(() => {
    if (value > 0 && value < 60) {
      setSelectedID(0)
    } else if (value > 60 && value < 100) {
      setSelectedID(1)
    } else if (value > 100 && value < 150) {
      setSelectedID(2)
    } else if (value > 150 && value < 200) {
      setSelectedID(3)
    } else if (value > 200 && value < 250) {
      setSelectedID(4)
    } else if (value > 250 && value < 300) {
      setSelectedID(5)
    } else {
      setSelectedID(null)
    }

  }, [value])

  // +++++++++++++++++ PLaceholder
  let floors = [1,2,3,4,5,6];

  // let numFloors = floors.length
  // +++++++++++++++++

  const scale = 0.24
  return (

    <group
      scale={[scale, scale, scale]}
      position={[-30, 30, -100]}
      rotation={[.2, 2, 0]}>
      <Suspense fallback={null}>
        <Model currentMesh={selectedID} value={value}/>
      </Suspense>
    </group>
  )
}
export default BuildingShellLoader
