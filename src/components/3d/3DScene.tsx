import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A glowing node that subtly pulses
function Node({ position, delay = 0 }: { position: THREE.Vector3, delay?: number }) {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!materialRef.current) return;
    // Pulse emissive intensity
    const intensity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.5;
    materialRef.current.emissiveIntensity = intensity;
  });

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial 
        ref={materialRef}
        color="#000000" 
        emissive="#ffffff"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

// The complete network
export default function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);

  // Define network nodes (Hexagon with corner pointing upwards)
  const nodes = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const radius = 2.5;
    // Math.PI / 2 is top (90 degrees). We go around in 60 deg (PI/3) steps.
    for (let i = 0; i < 6; i++) {
      const angle = Math.PI / 2 + i * (Math.PI / 3);
      arr.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    // Optional: add a center node to make it a more complex network
    arr.push(new THREE.Vector3(0, 0, 0));
    return arr;
  }, []);

  // Define connections (paths between nodes)
  const connections = useMemo(() => {
    const paths: THREE.CatmullRomCurve3[] = [];
    
    // Only connect corners to the center node (index 6) to remove the outer perimeter
    const links = [
      [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6]
    ];

    links.forEach(([startIdx, endIdx]) => {
      const start = nodes[startIdx];
      const end = nodes[endIdx];
      
      // Keep lines perfectly straight to emphasize the geometric hexagon shape
      const curve = new THREE.CatmullRomCurve3([start, end]);
      paths.push(curve);
    });
    return paths;
  }, [nodes]);

  // Slowly scale in and tilt based on pointer (card inspect hover)
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const safeDelta = Math.min(delta, 0.1);

    // Smoothly scale up to 1
    if (groupRef.current.scale.x < 0.999) {
      groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), safeDelta * 2);
    } else if (groupRef.current.scale.x !== 1) {
      groupRef.current.scale.setScalar(1);
    }

    // Inspect hover effect: tilt slightly based on mouse position over the canvas
    const targetRotationX = (state.pointer.y * Math.PI) / 10;
    const targetRotationY = (state.pointer.x * Math.PI) / 10;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, safeDelta * 5);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, safeDelta * 5);
  });

  return (
    <group ref={groupRef} scale={0}>
      {/* Render paths as tubes */}
      {connections.map((curve, idx) => (
        <mesh key={`tube-${idx}`}>
          <tubeGeometry args={[curve, 20, 0.02, 8, false]} />
          <meshStandardMaterial 
            color="#000000" 
            transparent 
            opacity={0.3} 
            roughness={0.5} 
            metalness={0.8} 
          />
        </mesh>
      ))}

      {/* Render nodes */}
      {nodes.map((pos, idx) => (
        <Node key={`node-${idx}`} position={pos} delay={idx} />
      ))}
    </group>
  );
}
