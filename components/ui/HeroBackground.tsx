import styles from '../../styles/HeroBackground.module.scss';
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

type cubeRef = null | any;

const Cube = (props: any) => {
  const [screenYPosition, setScreenYPosition] = useState(0);
  const cubeRef: cubeRef = useRef(null);

  useFrame((state, delta) => {
    if (cubeRef.current && cubeRef.current.rotation) {
      cubeRef.current.rotation.x = cubeRef.current.rotation.y += 0.003;
    }
  });

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     setScreenYPosition(window.scrollY);
  //   });
  // }, []);

  // let rotate = screenYPosition / 270;
  // let rotate = 0;

  return (
    <mesh ref={cubeRef} {...props} position={props.position} castShadow rotation={[0.72, 0.32, 0.14]}>
      <boxGeometry args={props.args} />
      <meshLambertMaterial attach="material" color="white" opacity={0.9} />
    </mesh>
  );
};

const HeroBackground = () => {
  const [screenYPosition, setScreenYPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(1400);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScreenYPosition(window.scrollY);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  let moveDown = screenYPosition / 2.8;

  const determineCubeSize = () => {
    if (screenWidth > 1000) {
      return [6, 6, 6];
    } else {
      return [4, 4, 4];
    }
  };

  const determineCubePostion = () => {
    if (screenWidth > 1000) {
      return [4.5, 1.2, -1.2];
    } else {
      return [4.5, 0, -1.2];
    }
  };

  return (
    <div className={styles.animationContainer} style={{ top: -270 + moveDown }}>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <directionalLight
          castShadow
          position={[0, 20, 0]}
          intesity={1.2}
          shadow-mapSize-width={1000}
          shadow-mapSize-height={1000}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[-0, -10, 0]} intensity={0.5} />
        <pointLight position={[8, 10, 10]} intensity={0.5} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            {/* <meshStandardMaterial attach="material" color="yellow" /> */}
            <shadowMaterial opacity={0.2} />
          </mesh>
        </group>
        <Cube args={determineCubeSize()} position={determineCubePostion()} />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
