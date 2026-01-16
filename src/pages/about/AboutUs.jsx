import { Link } from "react-router-dom";
import hero1 from "../../assets/images/aboutBanner1.jpg";
import hero2 from "../../assets/images/aboutBanner2.jpg";
import hero3 from "../../assets/images/aboutBanner3.jpg";
import Banner from "../Banner";

import img1 from "../../assets/images/ShaidulIsalmSazu.jpeg";
import img2 from "../../assets/images/Usuf.jpg";
import img3 from "../../assets/images/MahbububullHossain.jpg";
import img4 from "../../assets/images/OUMARFARUKPhoto.jpg";
import img5 from "../../assets/images/01.jpg";
import img6 from "../../assets/images/CEOsir.jpg";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import About from "./About";
import SocialImg from "./SocialImg";
import useReveal from "../../components/useReveal";

const cards = [
  {
    id: 1,
    title: "Md. Shaidul Islam Sazu",
    description: "Chairman",
    img: img1,
  },
  {
    id: 2,
    title: "Md.Usuf Ali Khan",
    description: "Managing Director",
    img: img2,
  },
  {
    id: 3,
    title: "Md. Mahbububul Hossain Khan",
    description: "Director(Marketing)",
    img: img3,
  },
  {
    id: 3,
    title: "Oumar Faruk",
    description: "Director(HR & Admin)",
    img: img4,
  },
  {
    id: 3,
    title: "Mst. Shajeratul Yiaken",
    description: "Director",
    img: img5,
  },
  {
    id: 3,
    title: "Brig. Gen. Md. Mahfuzur Rahman",
    description: "CEO",
    img: img6,
  },
];

const AboutUs = ({ className = "" }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Assign custom navigation buttons after mount
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const ref = useReveal();
  return (
    <div className="mt-8">
      <div>
        <Banner slides={[hero1, hero2, hero3]} buttons={[]} />
      </div>
      <div>
        <About />
      </div>
      <section className="py-20 text-white" id="portfolio">
        <div className="w-full px-5">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-2">
            {/* Section Title */}
            <div className="w-full mx-auto py-8">
              <h2
                ref={ref}
                className={`slide-title ${className} font-bold text-[#0f7771] text-[20px] md:text-[30px] lg:text-[40px] p-2`}
              >
                Board of Director
              </h2>
            </div>
            {/* Arrow Buttons (Top Right) */}
            <div className="flex gap-2 z-50">
              <button
                ref={prevRef}
                className="bg-green-100 p-4 rounded-full hover:bg-green-600 text-green-700 hover:text-green-100"
              >
                <IoIosArrowBack size={20} />
              </button>
              <button
                ref={nextRef}
                className="bg-green-100 p-4 rounded-full hover:bg-green-600 text-green-700 hover:text-green-100"
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={3.5} // show 3 full + partial card
            spaceBetween={30} // gap between cards
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            onSwiper={setSwiperInstance}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.2 }, // desktop 3.5 cards
            }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={card.id}>
                <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  {/* Image */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Title (slides up on hover) */}
                  <h3 className="absolute bottom-10 left-5 text-xl font-semibold transition-all duration-500 group-hover:-translate-y-6">
                    {card.title}
                  </h3>

                  {/* Description (appears on hover) */}
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm">{card.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <SocialImg />
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col flex-center items-center">
        <h2 className="text-4xl font-bold mb-6">OUR MISSION</h2>
        <p className="mb-4 text-black">
          To provide quality and sustainable living accommodation to our valued
          clients.
        </p>
        <h2 className="text-4xl font-bold mb-6">OUR VISION</h2>
        <p className="mb-4 text-black">
          To be the leading and finest housing and real estate company in
          Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
