import React from 'react'

const NorthsouthToursTravels = () => {
  return (
     <div className="w-full text-gray-800">

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Northsouth Tours & Travels
          </h1>
          <p className="text-gray-200 max-w-3xl text-lg md:text-xl">
            Discover new destinations, unforgettable experiences, and
            hassle-free journeys with Northsouth Tours & Travels.
          </p>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661955277307-bcc3679bbbdc?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Traveling"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            About Us
          </h2>
          <p className="leading-relaxed mb-4">
            Northsouth Tours & Travels has been delivering memorable
            travel experiences for years. From domestic adventures to
            international journeys, we craft personalized trips
            that make every moment count.
          </p>
          <p className="leading-relaxed">
            Our team of experienced travel experts ensures seamless
            bookings, reliable accommodations, and exciting itineraries,
            so you can explore the world without worry.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Domestic Tours",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
              },
              {
                title: "International Tours",
                img: "https://images.unsplash.com/photo-1694712646760-fd17923a71dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Hotel Booking",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
              },
              {
                title: "Transportation",
                img: "https://images.unsplash.com/photo-1716005789363-f0b863bfd7a8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            Why Choose Northsouth Tours & Travels
          </h2>
          <ul className="list-disc ml-6 space-y-3">
            <li>Experienced travel consultants</li>
            <li>Customized tour packages</li>
            <li>24/7 support during your travel</li>
            <li>Affordable pricing & deals</li>
            <li>Trusted by thousands of happy travelers</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel Experience"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            What Our Travelers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                feedback:
                  "Northsouth Tours & Travels made my honeymoon unforgettable! Everything was seamless.",
              },
              {
                name: "Michael Lee",
                feedback:
                  "Best domestic travel experience ever! Highly recommend them for organized trips.",
              },
              {
                name: "Priya Das",
                feedback:
                  "Amazing service and amazing tours. I felt safe and cared for throughout the trip.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white text-gray-800 rounded-xl p-6 shadow-lg">
                <p className="italic mb-4">"{t.feedback}"</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Plan Your Next Journey With Us
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Let Northsouth Tours & Travels craft your dream vacation. Contact us
          for custom packages, travel advice, and exclusive deals.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition">
          Contact Us
        </button>
      </section>

    </div>
  )
}

export default NorthsouthToursTravels