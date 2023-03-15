import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, useControls, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { DiamondSolid } from "../DiamondSolid";
import { DiamondBlue } from "../DiamondBlue";
import { Crown } from "../Crown";

const style = {
  threeJsCanvas: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    // zIndex: "22222",
    // border: "solid red",
    background: "linear-gradient(to right, rgb(50,50,50), black, rgb(50,50,50))",
    // pointerEvents: "none",
  },
};

function DiamondTop() {
  // const props = useTexture({ map: "images/red-cyber.jpg" });
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[1, 1, 8]} />
      {/* <meshStandardMaterial {...props} /> */}
      <meshStandardMaterial color="#1a1a1a" />
    </mesh>
  );
}

function DiamondBottom() {
  // const props = useTexture({ map: "images/red-cyber.jpg" });
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={meshRef} position={[0, -1.15, 0]} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[1, 1.3, 8]} />
      {/* <meshStandardMaterial {...props} /> */}
      <meshStandardMaterial color="#1a1a1a" />
    </mesh>
  );
}

function StarsAnim() {
  const starsRef = useRef(null);
  useFrame(() => {
    if (!starsRef.current) {
      return;
    }
    starsRef.current.rotation.x += 0.0005;
  });
  return <Stars ref={starsRef} />;
}

function SpotLightHelper() {
  const spotLightRef = useRef(null);

  // useHelper(spotLightRef, THREE.SpotLightHelper);
  return <spotLight ref={spotLightRef} position={[-2, 5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />;
}

function SpotLightHelper2() {
  const spotLightRef = useRef(null);

  // useHelper(spotLightRef, THREE.SpotLightHelper);
  return <spotLight ref={spotLightRef} position={[2, 5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />;
}

function SpotLightHelper3() {
  const spotLightRef = useRef(null);

  // useHelper(spotLightRef, THREE.SpotLightHelper);
  return <spotLight ref={spotLightRef} position={[-2, -5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />;
}

function SpotLightHelper4() {
  const spotLightRef = useRef(null);

  // useHelper(spotLightRef, THREE.SpotLightHelper);
  return <spotLight ref={spotLightRef} position={[2, -5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />;
}

export function ThreeFiberCanvas() {
  return (
    <Canvas style={style.threeJsCanvas} camera={{ position: [0, 0, 5] }}>
      {/* <OrbitControls /> */}
      {/* <ambientLight /> */}
      {/* <hemisphereLight  args={["white", "lightgray", 4]}/> */}
      {/* <pointLight position={[0, -3, 4]} intensity={3} /> */}
      <SpotLightHelper />
      <SpotLightHelper2 />
      <SpotLightHelper3 />
      <SpotLightHelper4 />
      <Crown position={[0, 0.245, 0]} scale={0.5} />
      {/* <DiamondSolid position={[0, -1.5, 0]} /> */}
      <DiamondBlue position={[0, -0.45, 0]} scale={1.35} />
      <StarsAnim />
    </Canvas>
  );
}
