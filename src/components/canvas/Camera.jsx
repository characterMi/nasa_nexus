import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Loader } from "../";

const CameraRig = ({ start, setStart, children }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 30], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <directionalLight
        intensity={5}
        color={"#ff6b00"}
        position={[200, 80, 5]}
      />
      <Suspense fallback={null}>
        <group>{children}</group>
      </Suspense>
      <Loader start={start} onStart={() => setStart(true)} />
      <Preload all />
    </Canvas>
  );
};

export default CameraRig;
