// ModelCoin3D.js
import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useScore } from '../Quiz/MarcadorContext';
 // Importa el contexto

const ModelCoin3D = ({ position }) => {
  const { nodes, materials } = useGLTF("/model3D/coin.glb");
  const [isCollected, setIsCollected] = useState(false);
  const { increaseScore } = useScore(); // Obtener la función para aumentar el puntaje

  const handleCollect = () => {
    if (!isCollected) {
      setIsCollected(true); // Marcar la moneda como recogida
      increaseScore(); // Llamar para aumentar el puntaje
    }
  };

  return !isCollected ? (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        handleCollect(); // Llamar a la función para recoger la moneda
      }}
    >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["gold_coin_texture.png"]}
      />
    </group>
  ) : null;
};

export default ModelCoin3D;
useGLTF.preload("/model3D/coin.glb");
