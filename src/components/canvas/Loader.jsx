import { Html, useProgress } from '@react-three/drei';
import BG from "../../assets/nexus_bg.jpg"
import { useEffect } from 'react';

const Loader = ({ start, onStart, simple }) => {
  const { progress } = useProgress()
  useEffect(() => {
    if (!start) {
      document.body.style = "overflow: hidden"
    } else {
      setTimeout(() => {
        document.body.style = "overflow: auto"
      }, 10000);
    }
  }, [start])

  return (
    <Html>
      <div className={`z-50 bg-black loader ${start ? "started" : ""}`}>
        <img src={BG} alt="background" className='opacity-40 w-[100%] h-[100%] object-cover' />
        <div className='text-white absolute top-[0%] w-[100%] h-[100%] flex flex-col justify-center items-center'>
          <span className='text-[20px]'>
            {progress.toFixed(1)}%
          </span>
          {progress == 100 &&
            <button onClick={onStart} className='rounded-[6px] box-border text-[#fff] btn bg-button_gradient outline-none mt-5 h-[50px] text-[1.4em] font-semibold p-[4px] relative decoration-none w-[7em] z-[2]'>
              <span className='items-center bg-[#0e0e10] rounded-[6px] flex justify-center btn-span h-[100%] duration-500 w-[100%]'>
                Start
              </span>
            </button>}
        </div>
      </div>
    </Html>
  )
}

export default Loader