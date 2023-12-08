import { aboutScrollAnimation } from "../lib/scroll-animation";
import { sourceLinks } from "../constants";
import NEXUS from "../assets/NEXUS.jpg";
import { useEffect } from "react";

const Details = () => {
  useEffect(() => {
    aboutScrollAnimation();
  }, []);

  return (
    <section className="text-xl sm:text-2xl font-medium absolute top-20 sm:top-40">
      <div className="w-[100%] px-2 mb-20 sm:px-10 xl:px-20 flex flex-col lg:flex-row justify-between">
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="opacity-0 name z-20 text-3xl mb-5">
            <span className="text-red-400 text-4xl">The NEXUS</span> reusable
            rocket
          </h1>
          <h1 className="opacity-0 about z-20">
            was a concept design created in the 1960s. It was intended as the
            next leap beyond the Saturn V, carrying up to eight times more
            payload. Several versions were designed, including 12,000 and 24,000
            short ton vehicles with payloads of one thousand and two thousand
            short tons respectively. The larger version had a diameter of 202
            feet (61.5 metres). It was never built
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-sky-400 ml-3 text-sky-600"
              href="https://en.m.wikipedia.org/wiki/General_Dynamics_Nexus"
            >
              ( Source )
            </a>
          </h1>
          <div className="flex flex-col max-[420px]:gap-1 gap-5 justify-center items-start mt-10 font-bold text-sky-600">
            <h1 className="text-black text-2xl sm:text-4xl opacity-0 -ml-20 links">
              if you want more information
            </h1>
            {sourceLinks.map((link, index) => (
              <a
                target="_blank"
                rel="noreferrer noopener"
                key={index}
                className="hover:text-sky-400 text-[18px] max-[420px]:text-[14px] sm:text-[26px]  opacity-0 -ml-20 links"
                href={link.link}
              >
                {link.value}
              </a>
            ))}
          </div>
        </div>
        <img
          src={NEXUS}
          alt="nexus"
          className="mt-10 object-cover lg:mt-0 rounded-[20px] w-[100%] lg:w-[40%] shadow-2xl nexus opacity-0"
        />
      </div>
    </section>
  );
};

export default Details;
