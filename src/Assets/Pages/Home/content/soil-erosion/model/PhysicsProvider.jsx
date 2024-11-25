import { Physics } from "@react-three/cannon";

const PhysicsProvider = ({ children }) => (
    <Physics
        gravity={[0, -9.81, 0]}
        allowSleep={true}
        defaultContactMaterial={{ restitution: 0.1 }}
    >
        {children}
    </Physics>
);

export default PhysicsProvider;
