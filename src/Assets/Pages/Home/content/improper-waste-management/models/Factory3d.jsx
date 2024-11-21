import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Factory3d(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model3D/factory.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Factory"
          castShadow
          receiveShadow
          geometry={nodes.Factory.geometry}
          material={materials['Material.005']}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'Factory' }}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.006']}
          position={[-7.904, -0.021, -0.554]}
          rotation={[Math.PI, 0, 0]}
          userData={{ name: 'Cube' }}
        />
        <mesh
          name="River1"
          castShadow
          receiveShadow
          geometry={nodes.River1.geometry}
          material={materials['Material.002']}
          morphTargetDictionary={nodes.River1.morphTargetDictionary}
          morphTargetInfluences={nodes.River1.morphTargetInfluences}
          position={[-38.281, -0.023, -17.125]}
          rotation={[0, 1.569, 0]}
          scale={[2.685, 1, 1.862]}
          userData={{
            targetNames: [
              'frame_0000',
              'frame_0001',
              'frame_0002',
              'frame_0003',
              'frame_0004',
              'frame_0005',
              'frame_0006',
              'frame_0007',
              'frame_0008',
              'frame_0009',
              'frame_0010',
              'frame_0011',
              'frame_0012',
              'frame_0013',
              'frame_0014',
              'frame_0015',
              'frame_0016',
              'frame_0017',
              'frame_0018',
              'frame_0019',
              'frame_0020',
              'frame_0021',
              'frame_0022',
              'frame_0023',
              'frame_0024',
              'frame_0025',
              'frame_0026',
              'frame_0027',
              'frame_0028',
              'frame_0029',
              'frame_0030',
              'frame_0031',
              'frame_0032',
              'frame_0033',
              'frame_0034',
              'frame_0035',
              'frame_0036',
              'frame_0037',
              'frame_0038',
              'frame_0039',
              'frame_0040',
              'frame_0041',
              'frame_0042',
              'frame_0043',
              'frame_0044',
              'frame_0045',
              'frame_0046',
              'frame_0047',
              'frame_0048',
              'frame_0049',
              'frame_0050',
              'frame_0051',
              'frame_0052',
              'frame_0053',
              'frame_0054',
              'frame_0055',
              'frame_0056',
              'frame_0057',
              'frame_0058',
              'frame_0059',
              'frame_0060',
              'frame_0061',
              'frame_0062',
              'frame_0063',
              'frame_0064',
              'frame_0065',
              'frame_0066',
              'frame_0067',
              'frame_0068',
              'frame_0069',
              'frame_0070',
              'frame_0071',
              'frame_0072',
              'frame_0073',
              'frame_0074',
              'frame_0075',
              'frame_0076',
              'frame_0077',
              'frame_0078',
              'frame_0079',
              'frame_0080',
              'frame_0081',
              'frame_0082',
              'frame_0083',
              'frame_0084',
              'frame_0085',
              'frame_0086',
              'frame_0087',
              'frame_0088',
              'frame_0089',
              'frame_0090',
              'frame_0091',
              'frame_0092',
              'frame_0093',
              'frame_0094',
              'frame_0095',
              'frame_0096',
              'frame_0097',
              'frame_0098',
              'frame_0099',
            ],
            name: 'River1',
          }}
        />
        <mesh
          name="River_2"
          castShadow
          receiveShadow
          geometry={nodes.River_2.geometry}
          material={materials['Material.003']}
          morphTargetDictionary={nodes.River_2.morphTargetDictionary}
          morphTargetInfluences={nodes.River_2.morphTargetInfluences}
          position={[-38.243, -0.006, -3.72]}
          rotation={[0, 1.569, 0]}
          scale={[2.685, 1, 1.862]}
          userData={{
            targetNames: [
              'frame_0000',
              'frame_0001',
              'frame_0002',
              'frame_0003',
              'frame_0004',
              'frame_0005',
              'frame_0006',
              'frame_0007',
              'frame_0008',
              'frame_0009',
              'frame_0010',
              'frame_0011',
              'frame_0012',
              'frame_0013',
              'frame_0014',
              'frame_0015',
              'frame_0016',
              'frame_0017',
              'frame_0018',
              'frame_0019',
              'frame_0020',
              'frame_0021',
              'frame_0022',
              'frame_0023',
              'frame_0024',
              'frame_0025',
              'frame_0026',
              'frame_0027',
              'frame_0028',
              'frame_0029',
              'frame_0030',
              'frame_0031',
              'frame_0032',
              'frame_0033',
              'frame_0034',
              'frame_0035',
              'frame_0036',
              'frame_0037',
              'frame_0038',
              'frame_0039',
              'frame_0040',
              'frame_0041',
              'frame_0042',
              'frame_0043',
              'frame_0044',
              'frame_0045',
              'frame_0046',
              'frame_0047',
              'frame_0048',
              'frame_0049',
              'frame_0050',
              'frame_0051',
              'frame_0052',
              'frame_0053',
              'frame_0054',
              'frame_0055',
              'frame_0056',
              'frame_0057',
              'frame_0058',
              'frame_0059',
              'frame_0060',
              'frame_0061',
              'frame_0062',
              'frame_0063',
              'frame_0064',
              'frame_0065',
              'frame_0066',
              'frame_0067',
              'frame_0068',
              'frame_0069',
              'frame_0070',
              'frame_0071',
              'frame_0072',
              'frame_0073',
              'frame_0074',
              'frame_0075',
              'frame_0076',
              'frame_0077',
              'frame_0078',
              'frame_0079',
              'frame_0080',
              'frame_0081',
              'frame_0082',
              'frame_0083',
              'frame_0084',
              'frame_0085',
              'frame_0086',
              'frame_0087',
              'frame_0088',
              'frame_0089',
              'frame_0090',
              'frame_0091',
              'frame_0092',
              'frame_0093',
              'frame_0094',
              'frame_0095',
              'frame_0096',
              'frame_0097',
              'frame_0098',
              'frame_0099',
            ],
            name: 'River 2',
          }}
        />
        <mesh
          name="Barreltoxic"
          castShadow
          receiveShadow
          geometry={nodes.Barreltoxic.geometry}
          material={materials['Material.008']}
          position={[-26.081, 3.1, -8.105]}
          rotation={[-0.035, 0, 0]}
          scale={[0.034, 0.034, 0.028]}
          userData={{ name: 'Barreltoxic' }}
        />
        <mesh
          name="Barreltoxic001"
          castShadow
          receiveShadow
          geometry={nodes.Barreltoxic001.geometry}
          material={materials['Material.007']}
          position={[-22.164, 4.071, -2.711]}
          rotation={[-0.035, 0, 0]}
          scale={[0.034, 0.034, 0.028]}
          userData={{ name: 'Barreltoxic.001' }}
        />
        <mesh
          name="Barreltoxic002"
          castShadow
          receiveShadow
          geometry={nodes.Barreltoxic002.geometry}
          material={materials['Material.004']}
          position={[-18.704, 5.233, -7.069]}
          rotation={[-0.035, 0, 0]}
          scale={[0.034, 0.034, 0.028]}
          userData={{ name: 'Barreltoxic.002' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/factory.glb')


export default Factory3d;