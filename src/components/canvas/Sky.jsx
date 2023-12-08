import { Stars } from "@react-three/drei";
import { Clouds } from "../";
const SkyContainer = ({ start }) => {
  return (
    <mesh>
      <Stars count={50000} />
      <Clouds start={start} />
    </mesh>
  );
};

export default SkyContainer;
