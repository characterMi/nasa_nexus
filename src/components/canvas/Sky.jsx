import { Stars } from '@react-three/drei'
import { Sun, Clouds } from '../'
const Sky = ({ start }) => {
    return (
        <mesh>
            <Stars count={50000} />ّ
            <Sun start={start} />
            <Clouds start={start} />
        </mesh>
    )
}

export default Sky