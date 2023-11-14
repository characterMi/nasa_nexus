import { useEffect, useState } from "react"
import { CameraRig, Sky, Model, Nav, Details } from "./components"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [start, setStart] = useState(false)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    const currentPath = window.location.href;
    if (currentPath.includes("#preview") || currentPath.includes("#about")) {
      window.location.href = "/"
    };
  }, [])
  return (
    <>
      <section className="app">
        <Nav start={start} />
        <section className='w-full h-screen z-0 absolute max-w-[1350px]'>
          <CameraRig start={start} setStart={setStart}>
            <Model start={start} />
          </CameraRig>
        </section>
        <section id="preview" className="preview-section -z-10 h-screen sticky w-full bg-black">
          <CameraRig start={start} setStart={setStart}>
            <Sky start={start} />
          </CameraRig>
        </section>
        <section id="about" className="about-section w-full relative">
          <Details />
        </section>
      </section>
    </>
  )
}

export default App
