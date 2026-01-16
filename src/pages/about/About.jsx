import "aos/dist/aos.css";
import "../../index.css";
import { useState } from "react";
import useReveal from "../../components/useReveal";
import aboutVideo from "../../assets/videos/review2.mp4";
import { getYouTubeEmbedUrl } from "../../components/VideoUtility";


export default function About({ className = ""  }) {
  const videoUrl="https://youtu.be/kobE1ZGqrLc?si=OLsJlhP0MhKmJl62";
  const ref = useReveal();
  const [expanded, setExpanded] = useState(false);

   const embedUrl = getYouTubeEmbedUrl(videoUrl);

  if (!embedUrl) return null;

  return (
    <section id="aboutUs" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div
          className="lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="uppercase tracking-widest text-gray-500 font-bold text-base leading-relaxed p-2">
            About Us
          </p>
          <h2
            ref={ref}
            className={`slide-title ${className} text-sm md:text-2xl lg:text-4xl uppercase font-bold py-4`}
          >
            Overview of North South
          </h2>

             <div className="text-gray-300 text-base space-y-4">
      <p className={`transition-all duration-300 leading-relaxed ${expanded ? "" : "line-clamp-10"}`}
 >
        North South Group is a pioneering housing and real estate company in
        Bangladesh, dedicated to addressing the accommodation challenges
        faced by the residents of Dhaka City and its surrounding regions.
        With a vision to transform lives through exceptional living spaces,
        our company takes pride in offering a diverse range of residential
        and industrial projects. Comprising of seven esteemed sister
        concerns, we have successfully established four notable ventures,
        including Purbachal North South Green City at Bhulta-Gausia,
        Rupganj, Narayanganj, North South Industrial City at Kaliganj,
        Gazipur, Purbachal Nirapad Valley adjacent RAJUK Purbachal 2no
        Sector, and North South Duplex Home at Kaliganj, Gazipur.
        Additionally, we operate two other entities, namely North South Auto
        Rice Mill situated at Bogura and North South Agro Farm situated at
        Bhulta-Gausia, Rupganj, Narayanganj. Since our inception in 2019,
        we have embarked on a transformative journey, committed to providing
        excellence, innovation, and sustainable solutions in the realm of
        real estate and urban development.
      </p>

      <button
        className="text-blue-500 font-semibold hover:underline"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "See Less" : "See More"}
      </button>
    </div>
        </div>

        {/* Video */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden rounded-xl shadow-xl"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <iframe
            className="w-full h-60 md:h-70 lg:h-80 rounded-xl transform hover:scale-105 transition duration-500"
            src={embedUrl}
            title="About North South Consortium Ltd."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
