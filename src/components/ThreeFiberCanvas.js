import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, useControls, useHelper } from "@react-three/drei";
import { DiamondSolid } from "../DiamondSolid";
import { Crown } from "../Crown";

const style = {
  threeJsCanvas: {
    width: "100%",
    height: "calc(100% + 60px)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "-2",
    // border: "solid red",
    background: "black",
    // pointerEvents: "none",
  },
};

// function StarsAnim() {
//   const starsRef = useRef(null);
//   useFrame(() => {
//     if (!starsRef.current) {
//       return;
//     }
//     starsRef.current.rotation.x += 0.0005;
//   });
//   return <Stars ref={starsRef} />;
// }

// window.addEventListener("scroll", starsAnim);

// function SpotLightHelper() {
//   const spotLightRef = useRef(null);

//   useHelper(spotLightRef, THREE.SpotLightHelper);
//   return <spotLight ref={spotLightRef} position={[0, 5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />;
// }

// function SpotLightHelper2() {
//   const spotLightRef = useRef(null);

//   useHelper(spotLightRef, THREE.SpotLightHelper);
//   return <spotLight ref={spotLightRef} position={[0, -5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />;
// }

export function ThreeFiberCanvas() {
  return (
    <Canvas style={style.threeJsCanvas} camera={{ position: [0, 1, 5] }}>
      {/* <OrbitControls /> */}
      {/* <ambientLight /> */}
      {/* <hemisphereLight  args={["white", "white", 4]}/> */}
      {/* <pointLight position={[0, -3, 4]} intensity={3} /> */}
      {/* <SpotLightHelper /> */}
      <spotLight position={[0, 5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />
      {/* <SpotLightHelper2 /> */}
      <spotLight position={[0, -5, 0]} intensity={5} args={["white", 5, 10, Math.PI * 0.2]} />
      <Crown position={[0, 0.245, 0]} scale={0.4} />
      <DiamondSolid position={[0, -1.16, 0]} scale={0.016} />
      {/* <DiamondBlue position={[0, -0.45, 0]} scale={1.35} /> */}
      {/* <StarsAnim /> */}
      <Stars />
    </Canvas>
  );
}
