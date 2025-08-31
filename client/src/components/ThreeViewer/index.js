import React, { Suspense, Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

function WireframeModel({ url }) {
  const { scene } = useGLTF(url)

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone()

  // Convert all meshes to wireframe with glowing blue material
  clonedScene.traverse(child => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0x00aaff,
        emissive: 0x0088dd,
        emissiveIntensity: 1.2,
        wireframe: true,
        transparent: true,
        opacity: 0.9,
        metalness: 0.1,
        roughness: 0.4,
      })
    }
  })

  return <primitive object={clonedScene} />
}

function FallbackModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={0x00aaff}
        emissive={0x0088dd}
        emissiveIntensity={1.2}
        wireframe
        transparent
        opacity={0.9}
        metalness={0.1}
        roughness={0.4}
      />
    </mesh>
  )
}

class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Model loading error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <FallbackModel />
    }

    return this.props.children
  }
}

function ThreeViewer() {
  return (
    <div className="w-100 mb-4" style={{ height: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '15px',
          border: '2px solid #798bef',
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00aaff" />
        <pointLight position={[-10, -10, 5]} intensity={0.4} color="#0066cc" />
        <fog attach="fog" args={['#1a1a2e', 8, 15]} />

        <ModelErrorBoundary>
          <Suspense
            fallback={
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                  color={0x00aaff}
                  emissive={0x0088dd}
                  emissiveIntensity={0.8}
                  wireframe
                  transparent
                  opacity={0.8}
                  metalness={0.1}
                  roughness={0.4}
                />
              </mesh>
            }
          >
            <WireframeModel
              url={`${process.env.PUBLIC_URL}/3d/low_poly_character.glb`}
            />
          </Suspense>
        </ModelErrorBoundary>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          minDistance={2}
          maxDistance={10}
        />

        <EffectComposer>
          <Bloom
            intensity={5.0}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.4}
            height={300}
            radius={0.2}
          />
          <Bloom
            intensity={1.0}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.4}
            height={300}
            radius={0.5}
          />
        </EffectComposer>
      </Canvas>

      {/* Loading indicator */}
      <div className="text-center mt-2">
        <small className="text-muted">
          Click and drag to rotate • Scroll to zoom
        </small>
      </div>
    </div>
  )
}

export default ThreeViewer
