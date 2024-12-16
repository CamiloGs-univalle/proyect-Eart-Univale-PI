import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Model2Soil3(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model3D/agricu.glb');
  const { actions } = useAnimations(animations, group);

  // Estados para el comportamiento de caminar y detenerse
  const [isMoving, setIsMoving] = useState(false);
  const [angle, setAngle] = useState(0); // Ángulo actual en el círculo
  const [radius] = useState(10); // Radio del círculo (puedes modificarlo para cambiar el tamaño)

  // Incremento del ángulo por frame
  const angleIncrement = 0.02; // Ajusta este valor para cambiar la velocidad de giro

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving((prev) => !prev); // Alterna entre caminar y detenerse
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  // Actualizar posición y rotación en círculo si está en movimiento
  useEffect(() => {
    let animationFrame;

    const move = () => {
      if (isMoving) {
        setAngle((prevAngle) => prevAngle + angleIncrement); // Incrementa el ángulo
      }
      animationFrame = requestAnimationFrame(move);
    };

    move();

    return () => cancelAnimationFrame(animationFrame);
  }, [isMoving, angleIncrement]);

  // Calcular posición y rotación en el círculo basado en el ángulo
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const rotationY = Math.PI / 2 - angle; // Ajustar la rotación para que mire hacia la dirección del movimiento

  // Reproducir o detener la animación según el estado de movimiento
  useEffect(() => {
    if (isMoving) {
      actions["Presentation"]?.play();
    } 
  }, [isMoving, actions]);

  console.log(animations); // animartion

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="Plane_67">
                  <group
                    name="3DGeom-5_68"
                    position={[-1.072, -2.104, 0]}
                    scale={[14.387, 13.36, 1]}>
                    <group name="_70">
                      <group name="_69">
                        <mesh
                          name="Object_8"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_8.geometry}
                          material={materials['Material-1']}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="ransomes_sims_and_jefferies_71"
                  position={[2.241, 0, 2.574]}
                  rotation={[0, 0, 0.549]}
                  scale={0.25}>
                  <group name="Sketchfab_model_72">
                    <group name="Object_2_73">
                      <group name="_75">
                        <group name="_74">
                          <mesh
                            name="Object_14"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_14.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_3_76">
                      <group name="_78">
                        <group name="_77">
                          <mesh
                            name="Object_18"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_4_79">
                      <group name="_81">
                        <group name="_80">
                          <mesh
                            name="Object_22"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_22.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_5_82">
                      <group name="_84">
                        <group name="_83">
                          <mesh
                            name="Object_26"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_26.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_6_85">
                      <group name="_87">
                        <group name="_86">
                          <mesh
                            name="Object_30"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_30.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_7_88">
                      <group name="_90">
                        <group name="_89">
                          <mesh
                            name="Object_34"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_34.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_8_91">
                      <group name="_93">
                        <group name="_92">
                          <mesh
                            name="Object_38"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_38.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_9_94">
                      <group name="_96">
                        <group name="_95">
                          <mesh
                            name="Object_42"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_42.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_10_97">
                      <group name="_99">
                        <group name="_98">
                          <mesh
                            name="Object_46"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_46.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_11_100">
                      <group name="_102">
                        <group name="_101">
                          <mesh
                            name="Object_50"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_50.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_12_103">
                      <group name="_105">
                        <group name="_104">
                          <mesh
                            name="Object_54"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_54.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_13_106">
                      <group name="_108">
                        <group name="_107">
                          <mesh
                            name="Object_58"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_58.geometry}
                            material={materials.Tractold}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Tractor-Lamborghini-V2018_109"
                  position={[-3.105, -2.151, 0.026]}
                  rotation={[0, 0, -1.137]}
                  scale={2}>
                  <group name="TTT_110" scale={0.056}>
                    <group name="lamborghini_111">
                      <group
                        name="lamborghini_112"
                        position={[1.219, -3.969, 0.108]}
                        rotation={[0.017, -0.611, 1.6]}
                        scale={0.072}>
                        <group name="3DGeom-1_113">
                          <group name="_115">
                            <group name="_114">
                              <mesh
                                name="Object_66"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_66.geometry}
                                material={materials.material}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="lamborghini_116"
                        position={[1.219, -3.969, 0.108]}
                        rotation={[0.017, -0.611, 1.6]}
                        scale={0.034}>
                        <group name="3DGeom-2_117">
                          <group name="_119">
                            <group name="_118">
                              <mesh
                                name="Object_71"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_71.geometry}
                                material={materials.material_3}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="lamborghini_120"
                        position={[1.219, -3.969, 0.108]}
                        rotation={[0.017, -0.611, 1.6]}
                        scale={0.062}>
                        <group name="3DGeom-3_121">
                          <group name="_123">
                            <group name="_122">
                              <mesh
                                name="Object_76"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_76.geometry}
                                material={materials.Shin}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="lamborghini_124"
                        position={[1.219, -3.969, 0.108]}
                        rotation={[0.017, -0.611, 1.6]}
                        scale={0.034}>
                        <group name="3DGeom-4_125">
                          <group name="_127">
                            <group name="_126">
                              <mesh
                                name="Object_81"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_81.geometry}
                                material={materials.Salon}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="lamborghini_128"
                        position={[1.219, -3.969, 0.108]}
                        rotation={[0.017, -0.611, 1.6]}
                        scale={0.049}>
                        <group name="3DGeom-5_129">
                          <group name="_131">
                            <group name="_130">
                              <mesh
                                name="Object_86"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_86.geometry}
                                material={materials.Nacl}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Talking_132" position={[-4.542, -7.036, 0.003]} scale={6.5}>
                  <group name="Assembly-21_133" scale={0.001}>
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_95"
                        geometry={nodes.Object_95.geometry}
                        material={materials['256_256_256_9']}
                        skeleton={nodes.Object_95.skeleton}
                      />
                      <skinnedMesh
                        name="Object_99"
                        geometry={nodes.Object_99.geometry}
                        material={materials['256_256_256_5']}
                        skeleton={nodes.Object_99.skeleton}
                      />
                      <skinnedMesh
                        name="Object_103"
                        geometry={nodes.Object_103.geometry}
                        material={materials['256_256_256_4']}
                        skeleton={nodes.Object_103.skeleton}
                      />
                      <skinnedMesh
                        name="Object_107"
                        geometry={nodes.Object_107.geometry}
                        material={materials['256_256_256']}
                        skeleton={nodes.Object_107.skeleton}
                      />
                      <skinnedMesh
                        name="Object_111"
                        geometry={nodes.Object_111.geometry}
                        material={materials['256_256_256_6']}
                        skeleton={nodes.Object_111.skeleton}
                      />
                      <skinnedMesh
                        name="Object_115"
                        geometry={nodes.Object_115.geometry}
                        material={materials['256_256_256_7']}
                        skeleton={nodes.Object_115.skeleton}
                      />
                      <skinnedMesh
                        name="Object_119"
                        geometry={nodes.Object_119.geometry}
                        material={materials['256_256_256_3']}
                        skeleton={nodes.Object_119.skeleton}
                      />
                      <skinnedMesh
                        name="Object_123"
                        geometry={nodes.Object_123.geometry}
                        material={materials['256_256_256_2']}
                        skeleton={nodes.Object_123.skeleton}
                      />
                      <skinnedMesh
                        name="Object_127"
                        geometry={nodes.Object_127.geometry}
                        material={materials['256_256_256_2']}
                        skeleton={nodes.Object_127.skeleton}
                      />
                      <skinnedMesh
                        name="Object_131"
                        geometry={nodes.Object_131.geometry}
                        material={materials['256_256_256_8']}
                        skeleton={nodes.Object_131.skeleton}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
export default Model2Soil3;
useGLTF.preload('/model3D/agricu.glb');
