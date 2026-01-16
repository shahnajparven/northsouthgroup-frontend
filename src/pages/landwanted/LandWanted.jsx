import { useState, useEffect, useCallback, useMemo } from "react";
import realEstateImg1 from "../../assets/images/realEstateImg1.jpg";
import realEstateImg2 from "../../assets/images/realEstateImg2.jpg";
import realEstateImg3 from "../../assets/images/realEstateImg3.jpg";
import heroLogo from "../../assets/images/heroLogo.gif";
import map from "../../assets/images/map.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import TrustNorthSouth from "./TrustNorthSouth";
import VentureForm from "./VentureForm";

const LandWanted = () => {
  const slides = useMemo(
    () => [realEstateImg1, realEstateImg2, realEstateImg3],
    []
  );

  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Using useCallback reduces unnecessary re-renders
  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    [slides.length]
  );

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % slides.length),
    [slides.length]
  );
  return (
    <div>
      <div className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
        <div>
          {/* Center Logo */}
          <div
            className="
  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  p-2 sm:p-4 
  z-50 
  bg-white/70 
  border-4 border-dotted border-gray-500 
  rounded-full
"
          >
            <img
              src={heroLogo}
              alt="Centered"
              className="
      w-24 h-24 
      sm:w-32 sm:h-32 
      md:w-40 md:h-40 
      lg:w-60 lg:h-60
      object-contain 
      rounded-[10px] 
      lg:rounded-[50px] 
      p-1 sm:p-2
    "
            />
          </div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
  mt-[180px]  /* Adjust spacing under the logo */
  p-2 sm:p-4 z-50 flex flex-col items-center justify-center gap-6"
          >
            <div className="text-[30px] text-white font-bold">LAND WANTED</div>
            {/* DOWN ARROW */}
            <div className="mt-2 animate-bounce">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <IoIosArrowDown size={24} className="text-blue-700" />
              </div>
            </div>
          </div>
        </div>
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            loading="lazy"
            decoding="async"
            className={`
      absolute inset-0 
      w-full 
      h-full 
      object-cover 
      transition-opacity duration-700 ease-linear
      ${current === index ? "opacity-100" : "opacity-0"}

      sm:object-cover
      md:object-cover
      lg:object-fill
    `}
            style={{ willChange: "opacity" }}
          />
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 active:scale-90 transition-all"
        >
          <IoIosArrowBack size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60 active:scale-90 transition-all"
        >
          <IoIosArrowForward size={22} />
        </button>
      </div>
      <div className="relative">
        <img src={map} alt="map" />
        <div className="absolute right-[10%] top-[40%]">
          <h1 className="text-[40px] text-[#212529]">LAND WANTED</h1>
          <h5 className="text-[30px] text-[#212529]">
            For joint venture Development
          </h5>
          <p className="text-[18px] text-[#212529]">
            ANY PRIME LOCATION OF DHAKA
          </p>
        </div>
      </div>

      <div><TrustNorthSouth/></div>
      <div>
        <VentureForm/>
      </div>
    </div>
  );
};

export default LandWanted;
