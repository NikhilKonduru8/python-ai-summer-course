
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#000" wireframe />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.3, 0.1, 8, 24]} />
        <meshStandardMaterial color="#666" wireframe />
      </mesh>
    </Float>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Floating objects scattered around */}
        <FloatingCube position={[-3, 2, -2]} />
        <FloatingCube position={[4, -1, -3]} />
        <FloatingCube position={[-2, -3, 1]} />
        
        <FloatingSphere position={[2, 3, -1]} />
        <FloatingSphere position={[-4, 1, 2]} />
        <FloatingSphere position={[3, -2, 0]} />
        
        <FloatingTorus position={[0, 4, -2]} />
        <FloatingTorus position={[-3, -2, 1]} />
        <FloatingTorus position={[5, 1, -1]} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
