import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';

function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: any) {
    const { scene } = useGLTF(url) as any;
    return <primitive object={scene} scale={scale} position={position} rotation={rotation} />;
}

const FloatingWorld: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[5] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Model url="/glb/h.glb" scale={1.2} position={[-2.5, 0, 0]} rotation={[0, 0.5, 0]} />
                    </Float>

                    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                        <Model url="/glb/garden.glb" scale={1.0} position={[2.5, -0.5, 0]} rotation={[0.2, -0.3, 0]} />
                    </Float>

                    <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
                        <Model url="/star.glb" scale={1.5} position={[0, 2.8, 0]} rotation={[0, 0, 0]} />
                    </Float>

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default FloatingWorld;
