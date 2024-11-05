/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function City3d(props) {
  const { nodes, materials } = useGLTF('/model3D/city.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">  
        <mesh
          name="Bottels2"
          castShadow
          receiveShadow
          geometry={nodes.Bottels2.geometry}
          material={materials.BottlesMaterial}
          userData={{ name: 'Bottels2' }}
        />
        <mesh
          name="Bottles1"
          castShadow
          receiveShadow
          geometry={nodes.Bottles1.geometry}
          material={materials.BottlesMaterial}
          userData={{ name: 'Bottles1' }}
        />
        <group name="Builidings" userData={{ name: 'Builidings' }}>
          <mesh
            name="Builidings_1"
            castShadow
            receiveShadow
            geometry={nodes.Builidings_1.geometry}
            material={materials.MaterialBlack}
          />
          <mesh
            name="Builidings_2"
            castShadow
            receiveShadow
            geometry={nodes.Builidings_2.geometry}
            material={materials.MaterialAzul}
          />
          <mesh
            name="Builidings_3"
            castShadow
            receiveShadow
            geometry={nodes.Builidings_3.geometry}
            material={materials.MaterialPink}
          />
          <mesh
            name="Builidings_4"
            castShadow
            receiveShadow
            geometry={nodes.Builidings_4.geometry}
            material={materials.MaterialWhite}
          />
        </group>
        <mesh
          name="Cajas1"
          castShadow
          receiveShadow
          geometry={nodes.Cajas1.geometry}
          material={materials.BoxesMaterial}
          userData={{ name: 'Cajas1' }}
        />
        <mesh
          name="Cajas2"
          castShadow
          receiveShadow
          geometry={nodes.Cajas2.geometry}
          material={materials.BoxesMaterial}
          userData={{ name: 'Cajas2' }}
        />
        <mesh
          name="Cart"
          castShadow
          receiveShadow
          geometry={nodes.Cart.geometry}
          material={materials.CartMaterial}
          userData={{ name: 'Cart' }}
        />
        <mesh
          name="EggCarton"
          castShadow
          receiveShadow
          geometry={nodes.EggCarton.geometry}
          material={materials.EggMaterial}
          userData={{ name: 'EggCarton' }}
        />
        <group name="Ground" userData={{ name: 'Ground' }}>
          <mesh
            name="Ground_1"
            castShadow
            receiveShadow
            geometry={nodes.Ground_1.geometry}
            material={materials.MaterialBlackFloor}
          />
          <mesh
            name="Ground_2"
            castShadow
            receiveShadow
            geometry={nodes.Ground_2.geometry}
            material={materials.MaterialWhiteFloor}
          />
        </group>
        <mesh
          name="Pallet1"
          castShadow
          receiveShadow
          geometry={nodes.Pallet1.geometry}
          material={materials.BoxesMaterial}
          userData={{ name: 'Pallet1' }}
        />
        <mesh
          name="Pallet2"
          castShadow
          receiveShadow
          geometry={nodes.Pallet2.geometry}
          material={materials.BoxesMaterial}
          userData={{ name: 'Pallet2' }}
        />
        <mesh
          name="PlasticBottles"
          castShadow
          receiveShadow
          geometry={nodes.PlasticBottles.geometry}
          material={materials.Plastic_Bottles}
          userData={{ name: 'PlasticBottles' }}
        />
        <mesh
          name="WasteBasket1"
          castShadow
          receiveShadow
          geometry={nodes.WasteBasket1.geometry}
          material={materials.WasteMaterial}
          userData={{ name: 'WasteBasket1' }}
        />
        <mesh
          name="WasteBasket2"
          castShadow
          receiveShadow
          geometry={nodes.WasteBasket2.geometry}
          material={materials.WasteMaterial}
          userData={{ name: 'WasteBasket2' }}
        />
        <mesh
          name="WasteBasket3"
          castShadow
          receiveShadow
          geometry={nodes.WasteBasket3.geometry}
          material={materials.WasteMaterial}
          userData={{ name: 'WasteBasket3' }}
        />
        <mesh
          name="WasteBasket4"
          castShadow
          receiveShadow
          geometry={nodes.WasteBasket4.geometry}
          material={materials.WasteMaterial}
          userData={{ name: 'WasteBasket4' }}
        />
      </group>
    </group>
  )
}  


useGLTF.preload('/model3D/city.glb')
export default City3d;


