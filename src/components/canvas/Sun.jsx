import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Sun = ({ start }) => {
    const sun = useGLTF("/nasa_nexus/sun/scene.gltf");
    const sunRef = useRef();
    const animate = () => {
        window.requestAnimationFrame(animate)
        sunRef.current.rotation.y += 0.001
    }
    useEffect(() => {
        const ctx = gsap.context(() => {
            start && gsap.to(sunRef.current.position, { duration: 10, y: 2, ease: "ease" })
            start && animate()
        })
        return () => {
            ctx.revert()
        }
    }, [start])
    return (
        <mesh>
            <pointLight intensity={20} color={"#ff6b00"} />
            <primitive
                ref={sunRef}
                object={sun.scene}
                scale={0.1}
                position={[0, 3, -10]}
                rotation={[0, 0, 0]}
            />
        </mesh>
    )
}

export default Sun