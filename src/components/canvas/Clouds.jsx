import { Cloud } from '@react-three/drei'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Clouds = ({ start }) => {
    const offsetX = 10;
    const top_clouds = useRef()
    const right_clouds = useRef()
    const left_clouds = useRef()
    const animate_clouds = () => {
        window.requestAnimationFrame(animate_clouds)
        top_clouds.current.position.x += 0.01;
        if (top_clouds.current.position.x >= offsetX) {
            top_clouds.current.position.x = -offsetX
        }
    }
    useEffect(() => {
        const ctx = gsap.context(() => {
            start && gsap.to(right_clouds.current.position, { duration: 5, x: -2, ease: "ease-out" })
            start && gsap.to(left_clouds.current.position, { duration: 5, x: 2, ease: "ease-out" })
            start && animate_clouds()
        })
        return () => {
            ctx.revert()
        }
    }, [start])
    return (
        <group>
            <ambientLight intensity={1} />
            <mesh ref={top_clouds} position={[-10, 0, 0]}>
                <Cloud position={[-3, 1.5, -10]} scale={0.5} opacity={0.03} />
                <Cloud position={[0, 1.5, -8]} scale={0.8} opacity={0.06} />
            </mesh>
            <mesh ref={right_clouds}>
                <Cloud position={[5, -2, 2]} scale={0.5} opacity={0.4} />
                <Cloud position={[6, -1, -2]} scale={0.2} opacity={0.5} />
            </mesh>
            <mesh ref={left_clouds}>
                <Cloud position={[-5, -2.5, -2]} scale={0.5} opacity={0.3} />
                <Cloud position={[-6, -1, -2]} scale={0.3} opacity={0.5} />
                <Cloud position={[-7, 0, -2]} scale={0.5} opacity={0.5} />
            </mesh>
        </group>
    )
}

export default Clouds