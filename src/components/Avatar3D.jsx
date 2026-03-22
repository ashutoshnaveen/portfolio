import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Avatar3D({ position = [0, -1.8, 0], scale = 1.8 }) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/avatar.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      firstAction?.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  // Model has its own animation — no extra floating needed

  return (
    <group ref={group} position={position} scale={scale} rotation={[0, 0, 0]} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/avatar.glb');
