import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Center } from "@react-three/drei"; 
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Cat from "../components/Cat.jsx";  
import './Hero.css'; 

const Hero = () => {
  const [animationName, setAnimationName] = useState("Idle");

  const toggleAnimation = () => {
    setAnimationName((prev) => (prev === "Idle" ? "Faster" : "Idle"));
  };

  return (
    <section className="w-full flex flex-col relative">
      <div 
        className="w-full" 
        style={{ height: "800px", border: "1px solid red", marginBottom: "0" }}
      >
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[-8, 0, 5]} />
            <ambientLight intensity={0.5} color={"#FFA500"} />
            <directionalLight position={[10, 20, 15]} intensity={3} />

            <Center position={[-2, 0, 0]}>
              <Cat animationName={animationName} origin={[0, 0, -2.7]} /> {/* <------ passed `origin` prop */}
            </Center>

             {/* red marker at origin */}
            <mesh position={[0, -1.5, 0]}>
              <sphereGeometry args={[0.1, 32, 32]} /> {/* small sphere */}
              <meshBasicMaterial color="red" />
            </mesh>


            <OrbitControls 
              maxPolarAngle={Math.PI / 2} 
              minPolarAngle={Math.PI / 3} 
              enableZoom={true}
              minDistance={5}      
              maxDistance={8}  
              maxAzimuthAngle={Math.PI / 20} 
              minAzimuthAngle={-Math.PI / 2} 
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="toggle-container">
          {animationName !== "Faster" && <span className="faster-text">FASTER!</span>}
        </div>
        <label className="toggle-switch">
          <input 
            type="checkbox" 
            onChange={toggleAnimation} 
            checked={animationName === "Faster"} 
          />
          <span className="slider"></span>
        </label>
      </div>
    </section>
  );
};

export default Hero;
