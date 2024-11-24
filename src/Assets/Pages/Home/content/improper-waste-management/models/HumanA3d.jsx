import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Human3d(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model3D/humanwalker.glb');
  const { actions } = useAnimations(animations, group);

  // Estado para la posición y rotación del modelo
  const [position, setPosition] = useState([-3, 0.4, 6]); // Posición inicial
  const [rotation, setRotation] = useState([0, 0, 0]); // Rotación inicial
  const [isMoving, setIsMoving] = useState(false);

  // Mapeo de direcciones a ángulos de rotación (eje Y en radianes)
  const directionToRotation = {
    w: 0, // Frente (z negativo)
    s: Math.PI, // Atrás (z positivo)
    a: Math.PI / 2, // Izquierda (x negativo)
    d: -Math.PI / 2, // Derecha (x positivo)
  };

  // Manejo de eventos de teclado
  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    const step = 1; // Distancia de movimiento por cada pulsación
    setIsMoving(true);

    setPosition((prevPosition) => {
      const [x, y, z] = prevPosition;

      switch (key) {
        case 's': // Adelante
          setRotation([0, directionToRotation.s, 0]);
          return [x, y, z - 0.1];
        case 'w': // Atrás
          setRotation([0, directionToRotation.w, 0]);
          return [x, y, z + 0.1];
        case 'd': // Izquierda
          setRotation([0, directionToRotation.d, 0]);
          return [x - 0.1, y, z];
        case 'a': // Derecha
          setRotation([0, directionToRotation.a, 0]);
          return [x + 0.1, y, z];
        default:
          return prevPosition;
      }
    });
  };

  const handleKeyUp = () => {
    setIsMoving(false);
  };

  // Activar la animación de caminar
  useEffect(() => {
    if (isMoving) {
      actions['Armature|Take 001|BaseLayer']?.play();
    } else {
      actions['Armature|Take 001|BaseLayer']?.stop();
    }
  }, [isMoving, actions]);

  // Agregar y eliminar eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <group ref={group} {...props} position={position} rotation={rotation} dispose={null}>
      <group name="Scene">
        <group name="rp_nathan_animated_003_walking" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="rp_nathan_animated_003_walking_CTRL">
            <group name="Armature">
              <skinnedMesh
                name="rp_nathan_animated_003_walking_geo"
                geometry={nodes.rp_nathan_animated_003_walking_geo.geometry}
                material={materials.rp_nathan_animated_003_mat}
                skeleton={nodes.rp_nathan_animated_003_walking_geo.skeleton}
              />
              <primitive object={nodes.rp_nathan_animated_003_walking_root} />
            </group>
          </group>
          <group name="rp_nathan_animated_003_walking_geoGRP" />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/model3D/humanwalker.glb');

export default Human3d;

