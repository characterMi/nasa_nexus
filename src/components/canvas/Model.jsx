import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGLTF } from '@react-three/drei';

const Model = ({ start }) => {
    const rocket = useRef();
    const space_rocket = useGLTF("/nasa_nexus/nexus/scene.gltf");
    const [isMobile, setIsMobile] = useState(false)
    const animate = () => {
        window.requestAnimationFrame(animate);
        rocket.current.rotation.y += 0.005
    }
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 400px)')
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)
        const ctx = gsap.context(() => {
            start && gsap.to(rocket.current.position, { duration: 10, y: -2, ease: "ease" })
            start && animate()
        })
        return () => {
            ctx.revert()
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [start])

    return (
        <mesh>
            <ambientLight intensity={1} />
            <primitive
                ref={rocket}
                object={space_rocket.scene}
                scale={isMobile ? 0.007 : 0.009}
                position={[0, -3, -0.3]}
                rotation={[0, 0, 0]}
            />
        </mesh>
    )
}

export default Model