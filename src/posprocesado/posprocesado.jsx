import React from 'react';
import { EffectComposer, Vignette, SSAO } from '@react-three/postprocessing';

const PostProcessing = () => {
    return (
        <EffectComposer>
            <Vignette offset={0.3} darkness={0.2} eskil={false} />
            <SSAO />
        </EffectComposer>
    );
};

export default PostProcessing;
