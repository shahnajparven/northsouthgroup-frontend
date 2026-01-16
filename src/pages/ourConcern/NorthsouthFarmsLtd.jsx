import React from 'react'

const NorthsouthFarmsLtd = () => {

  return (

    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Northsouth Farms Ltd
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Cultivating nature, nurturing communities, and growing a sustainable
            future through modern and eco-friendly agriculture.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80"
            alt="About Northsouth Farms"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">About Northsouth Farms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Northsouth Farms Ltd is dedicated to sustainable agricultural
              development by integrating modern farming techniques with natural
              ecosystems. Our mission is to produce healthy, high-quality food
              while preserving the environment for future generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We work closely with local communities, experts, and modern
              technologies to ensure ethical, efficient, and environmentally
              responsible farming operations.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
                text: "Eco-friendly practices that protect land, water, and biodiversity.",
              },
              {
                title: "Innovation",
                img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
                text: "Modern farming solutions powered by research and technology.",
              },
              {
                title: "Integrity",
                img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
                text: "Honest practices that ensure trust and quality in every harvest.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl mb-4 h-48 w-full object-cover"
                />
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FARMING PRACTICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Modern Farming Practices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our farms adopt advanced irrigation systems, organic soil
              management, and data-driven cultivation methods to ensure maximum
              yield with minimal environmental impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By balancing innovation with tradition, we deliver nutritious and
              safe agricultural products to the market.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80"
            alt="Modern farming"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Grow With Northsouth Farms</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Partner with us to build a healthier, greener, and more sustainable
          agricultural future for Bangladesh and beyond.
        </p>
        <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center">
        © {new Date().getFullYear()} Northsouth Farms Ltd. All rights reserved.
      </footer>
    </div>

 
  )
}

export default NorthsouthFarmsLtd