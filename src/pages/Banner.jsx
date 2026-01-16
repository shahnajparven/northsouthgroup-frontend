
import { useState, useEffect, useCallback, useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import heroLogo from "../assets/images/heroLogo.gif";

export default function Banner({ slides, buttons }) {
  const slideImages = useMemo(() => slides, [slides]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideImages.length]);

  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev - 1 + slideImages.length) % slideImages.length),
    [slideImages.length]
  );

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % slideImages.length),
    [slideImages.length]
  );


  return (
   <div
  data-aos="fade-up"
  data-aos-duration="3000"
  className="
    relative w-full
    h-[40vh]      
    md:h-[70vh]   
    lg:h-screen  
    overflow-hidden
    flex items-center justify-center
  "
>

      {/* Center Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      p-2 sm:p-4 z-50 bg-white/70 border-4 border-dotted 
                      border-gray-500 rounded-full">

        <img
          src={heroLogo}
          alt="Centered"
          className="
            w-20 h-20 
            sm:w-28 sm:h-28 
            md:w-40 md:h-40 
            lg:w-56 lg:h-56 
            object-contain rounded-[15px] p-2
          "
        />
      </div>

      {/* Buttons */}
     <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 
                z-30 flex flex-nowrap justify-center gap-3 sm:gap-5">
  {buttons.map((btn, i) => (
    <Link key={i} to={btn.link}>
      <button
        className="bg-black/70 border-2 border-green-500 text-white
                   font-semibold px-4 py-2
                   whitespace-nowrap
                   text-xs sm:text-sm md:text-lg lg:text-lg
                   rounded-lg shadow-lg hover:scale-110 transition-all"
      >
        {btn.text}
      </button>
    </Link>
  ))}
</div>

      {/* Slides */}
      {slideImages.map((src, index) => (
       <img
  key={index}
  src={src}
  alt="banner"
  className={`absolute inset-0 w-full h-full
              object-cover sm:object-cover
              max-h-screen
              transition-opacity duration-300
              ${current === index ? "opacity-100" : "opacity-0"}`}
 />

      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 
                   bg-black/40 p-2 sm:p-3 rounded-full text-white 
                   hover:bg-black/60"
      >
        <IoIosArrowBack size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 
                   bg-black/40 p-2 sm:p-3 rounded-full text-white 
                   hover:bg-black/60"
      >
        <IoIosArrowForward size={22} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 flex gap-3">
        {slideImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition 
                        ${current === i ? "bg-white scale-125" : "bg-gray-400"}`}
          />
        ))}
      </div>
     
    </div>
  );
}
