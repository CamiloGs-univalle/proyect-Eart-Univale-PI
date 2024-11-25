import { useRef, useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const CameraController = ({ targetRef }) => {
    const { camera, gl } = useThree();
    const [isOrbiting, setIsOrbiting] = useState(false);
    const mouse = useRef([0, 0]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = [
                (e.clientX / window.innerWidth) * 2 - 1,
                -(e.clientY / window.innerHeight) * 2 + 1,
            ];
        };

        const handleMouseDown = () => setIsOrbiting(true);
        const handleMouseUp = () => setIsOrbiting(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (targetRef.current) {
            camera.position.lerp(targetRef.current.position, 0.1);
            camera.lookAt(targetRef.current.position);
        }
    }, [targetRef, camera]);

    return null;
};

export default CameraController;
