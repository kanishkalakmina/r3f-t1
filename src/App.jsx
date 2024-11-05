import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls, Environment, GizmoHelper, GizmoViewport } from '@react-three/drei';
import Earth from '../public/Earth'

function EarthRotation() {
  const earthRef = useRef();
  useFrame(() => {
    earthRef.current.rotation.x += 0.0003;
    earthRef.current.rotation.y += 0.0003;
    earthRef.current.rotation.z += 0.0003;
  })

  return (
    <mesh ref={earthRef}>
      <OrbitControls/>
      <Earth position={[0,0,0]}/>
      <Environment preset='sunset' />
      <ambientLight />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Canvas style={{ height: '100vh', width: '100vw' }} shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <GizmoHelper alignment='bottom-right' margin={[80,80]}>
          <GizmoViewport/>
        </GizmoHelper>
        <EarthRotation />
      </Canvas>
      <div style={{position: [20,56,89], color:'white'}}>hello</div>
    </div>
  );
}

export default App;
