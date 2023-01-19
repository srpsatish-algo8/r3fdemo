import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import "./styles.css";
import { useState } from "react";

function Box() {
  return (
    <mesh userData={{ hello: "Satish Kumar Singh" }} position={[0, 1, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  );
}

function MotorPump() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <mesh onClick={()=> setOpen(!open)} position={[4, 1, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[0.5, 0.5, 1, 16]} />
        <meshStandardMaterial attach="material" color="#008080" />
      </mesh>
      {open && (
        <Html>
          <div style={{ padding: "1rem" }}>
            <h4>Pump is Clicked</h4>
          </div>
          <button onClick={()=> setOpen(false)}>Close</button>
        </Html>
      )}
    </>
  );
}

function Pipe() {
  return (
    <mesh position={[2, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderBufferGeometry attach="geometry" args={[0.2, 0.2, 4, 16]} />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  );
}

const App = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 5, 5]} />
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <group>
        <MotorPump />
        <Pipe />
        <Box />
        <Plane />
      </group>
    </Canvas>
  );
};

export default App;
