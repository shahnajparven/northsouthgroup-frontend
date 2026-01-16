import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "aos/dist/aos.css";
import "../../index.css";
import useReveal from "../../components/useReveal";
import { useReviewStore } from "../../store/review/reviewStore";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { getYouTubeEmbedUrl } from "../../components/VideoUtility";


const Testimonials = ({ className = "" }) => {
const ref = useReveal();

 const { reviews,loadReviews,isLoading } = useReviewStore();
  
     useEffect(() => {
     loadReviews()
     }, [loadReviews])
  
      if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
       <div> <FaSpinner className="animate-spin" size={50}/></div>
      </div>
    );
  }
  return (
    <section  data-aos="fade-up"
     data-aos-duration="3000" className="bg-white text-white py-10 lg:py-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="py-8 px-4">
          <p className="uppercase tracking-widest text-gray-500 font-bold text-base leading-relaxed p-2">
            Testimonials
          </p>
          <h2 ref={ref} className={`slide-title ${className} text-sm md:text-2xl lg:text-4xl uppercase font-bold text-[#0f7771] p-2`}>
            What customers
            <br />
            say about us
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          effect="fade"
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={1000}
          // pagination={{ clickable: true }}
          fadeEffect={{ crossFade: true }}
          className="pb-14" // bottom padding for extra space
        >
          {reviews.map((t) => {
  const embedUrl = getYouTubeEmbedUrl(t.reviewVideo);

  return (
    <SwiperSlide key={t._id || t.id}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-12">
        
        {/* Video */}
        <div className="w-full lg:w-1/2 relative overflow-hidden shadow-xl">
          {embedUrl && (
            <iframe
              className="w-full h-60 md:h-70 lg:h-80 rounded-xl transform hover:scale-105 transition duration-500"
              src={embedUrl}
              title={t.title || "Review video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-md md:text-xl lg:text-2xl font-bold mb-6 text-black">
            {t.title}
          </h2>

          <p className="mb-4 text-black">{t.description}</p>

          <div className="py-2">
            <p className="text-gray-900 text-md font-bold">{t.name}</p>
            <p className="text-gray-900 text-md">{t.designation}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
})}

        </Swiper>
        <div className="relative w-full flex justify-center gap-8 mt-8">
          <button className="swiper-button-prev bg-green-100 p-4 rounded-full hover:bg-green-600 text-green-700 hover:text-green-100">
            <IoIosArrowBack size={20} />
          </button>

          <button className="swiper-button-next bg-green-100 p-4 rounded-full hover:bg-green-600 text-green-700 hover:text-green-100">
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
