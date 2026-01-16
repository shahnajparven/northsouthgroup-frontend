import React from 'react'

const NorthsouthGarments = () => {
  return (
    <div className="w-full text-gray-800">

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1561365452-adb940139ffa?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Northsouth Garments Ltd
          </h1>
          <p className="text-gray-200 max-w-3xl text-lg md:text-xl">
            A leading export-oriented garment manufacturer delivering
            world-class apparel with precision, ethics, and innovation.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Garment Factory"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            About Northsouth Garments
          </h2>
          <p className="leading-relaxed mb-4">
            Northsouth Garments Ltd is a fully compliant, export-focused
            apparel manufacturing company serving global fashion brands.
            With cutting-edge machinery and skilled professionals, we
            ensure premium quality garments at competitive prices.
          </p>
          <p className="leading-relaxed">
            Our commitment to sustainability, ethical labor practices,
            and continuous innovation has earned us trust across
            international markets including Europe, North America, and Asia.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
            Our Product Range
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Men's Wear",
                img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
              },
              {
                title: "Women's Wear",
                img: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Kids Wear",
                img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Sportswear",
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="p-5 text-center font-semibold">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Advanced Manufacturing
          </h2>
          <p className="mb-4 leading-relaxed">
            Our production facilities are equipped with modern sewing lines,
            automated cutting machines, and strict quality checkpoints.
            Each garment passes through rigorous inspection processes
            to ensure global compliance standards.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>ISO & BSCI compliant factories</li>
            <li>Skilled workforce & safety standards</li>
            <li>High-volume production capacity</li>
            <li>On-time global delivery</li>
          </ul>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661346155109-b3c30085c744?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Production Line"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* SUSTAINABILITY */}
      <section className="bg-green-700 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sustainability & Ethics
          </h2>
          <p className="max-w-4xl mx-auto leading-relaxed">
            Northsouth Garments Ltd prioritizes environmentally responsible
            production. We use eco-friendly fabrics, reduce waste, ensure
            fair wages, and maintain safe working environments for all
            employees.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner With Northsouth Garments
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Looking for a reliable garment manufacturing partner?
          Contact us today to discuss your sourcing and production needs.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};



export default NorthsouthGarments