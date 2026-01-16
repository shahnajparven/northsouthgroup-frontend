import news from "../../assets/images/news.jpg";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useReveal from "../../components/useReveal";
import { useNewsEventsStore } from "../../store/newsEvent/newsEventStore";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const NewsEvent = ({ className = "" }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const { newsEvents, loadNewsEvents, isLoading } = useNewsEventsStore();

  useEffect(() => {
    loadNewsEvents();
  }, [loadNewsEvents]);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <div>
          {" "}
          <FaSpinner className="animate-spin" size={50} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full">
        <img
          src={news}
          alt="Privacy Policy"
          className="w-full h-64 md:h-96 lg:h-[100vh] object-cover rounded-lg"
        />

        {/* Centered Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            News And Event
          </h2>
        </div>
      </div>

      <div className="py-8">
        <marquee className="text-2xl text-green-700">
          Our upcomming Project: Northsouth tours & travels, Northsoutn
          Foundation & Northsouth Butterfly Resort & Park !!!!
        </marquee>
      </div>
      <hr className="border-t-4 border-green-500" />

      <section className="pt-4 text-white" id="portfolio">
        <div className="w-full px-5 py-8">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-2">
            {/* Section Title */}
            <div className="w-full mx-auto py-8">
              <h2
                ref={ref}
                className={`slide-title ${className} font-bold text-[#0f7771] text-[20px] md:text-[30px] lg:text-[40px] p-2`}
              >
                News Events
              </h2>
            </div>
            {/* Arrow Buttons (Top Right) */}
            <div className="flex gap-2">
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
            {newsEvents.map((card, i) => (
              <SwiperSlide key={card.id}>
                <Link to={`/newsEventDetails/${card._id}`}>
                  <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    {/* Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[50dvh] object-cover transform transition duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    {/* Title (slides up on hover) */}
                    <h3 className="absolute bottom-25 left-5 text-xl font-semibold transition-all duration-500 group-hover:-translate-y-6">
                      {card.title}
                    </h3>

                    {/* Description (appears on hover) */}
                    <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm">
                        {card.description.length > 200
                          ? `${card.description.slice(0, 200)}...`
                          : card.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default NewsEvent;
