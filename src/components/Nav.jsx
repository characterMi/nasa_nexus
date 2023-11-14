import { useEffect } from "react"
import Nasa from "../assets/nasa_icon.svg"
import { navLinks } from "../constants"
import gsap from "gsap"

const Nav = ({ start }) => {
    useEffect(() => {
        start && gsap.to('.navbar', { duration: 0.3, y: '0%' })
    }, [start])
    return (
        <section className={`fixed navbar max-w-[1400px] duration-300 translate-y-[-100%] text-white w-full h-20 z-50 bg-transparent backdrop-blur-lg ${start ? 'block' : 'hidden'}`}>
            <div className="absolute w-[100%] h-[100%] opacity-25 bg-sky-600 -z-10" />
            <div className="flex justify-between px-2 sm:px-10 xl:px-20 w-[100%] h-[100%]">
                <div className="h-[100%] flex items-center">
                    <img
                        src={Nasa}
                        alt="Logo"
                        className="w-auto object-contain h-[100%]"
                    />
                    <h1 className="text-2xl max-[420px]:hidden sm:text-4xl ml-2 sm:ml-5">Nexus SSTO</h1>
                </div>
                <ul className="flex gap-5 sm:gap-10 justify-between text-xl sm:text-2xl items-center">
                    {navLinks.map((link, index) => (
                        <li key={index} className="menu_item hover:text-cyan-500">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Nav