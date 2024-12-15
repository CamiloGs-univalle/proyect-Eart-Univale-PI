// ScenaCoin.js
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';

import ScoreBoard from './ScoreBoard'; // Componente para mostrar el puntaje
import ModelCoin3D from '../coin/ModelCoin3D';

const ScenaCoin = () => {
  const [coins] = useState([
    { id: 1, position: [4, 12, 15] },
    { id: 2, position: [-10, 8, -5] },
    { id: 3, position: [0, 6, 10] },
  ]);

  return (
    <div className="scene">
      <ScoreBoard /> {/* El marcador siempre está visible */}
      <Canvas camera={{ position: [0, 10, 25], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {coins.map((coin) => (
          <ModelCoin3D key={coin.id} position={coin.position} />
        ))}
      </Canvas>
    </div>
  );
};

export default ScenaCoin;
