import React from 'react'

const NorthsouthButterfly = () => {

  return (
    <div className="w-full text-gray-800">

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)", // Replace with butterfly/resort image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Northsouth Butterfly Resort & Park
          </h1>
          <p className="text-gray-200 max-w-3xl text-lg md:text-xl">
            Experience nature, luxury, and relaxation all in one place. Welcome to the serene escape of Northsouth Butterfly.
          </p>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1663054229938-005de427370c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with resort image
          alt="Resort View"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            About Northsouth Butterfly
          </h2>
          <p className="leading-relaxed mb-4">
            Northsouth Butterfly Resort & Park is a paradise where nature meets comfort. Nestled in lush greenery, our resort offers luxurious accommodations, serene landscapes, and unforgettable experiences for all our guests.
          </p>
          <p className="leading-relaxed">
            From peaceful butterfly gardens to adventurous outdoor activities, Northsouth Butterfly provides a unique escape from the everyday hustle, ideal for families, couples, and nature enthusiasts.
          </p>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
            Our Facilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Butterfly Garden",
                img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
              },
              {
                title: "Luxury Cottages",
                img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
              },
              {
                title: "Swimming Pool",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
              },
              {
                title: "Adventure Trails",
                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
              },
              {
                title: "Indoor Activities",
                img: "https://images.unsplash.com/photo-1751235641041-d5037f5ceb87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Restaurants & Cafes",
                img: "https://plus.unsplash.com/premium_photo-1705479743069-6b49fffa6a21?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <div className="p-5 text-center font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">Fun Activities</h2>
          <p className="mb-4 leading-relaxed">
            Guests can enjoy guided butterfly garden tours, nature walks, bird watching, and adventure trails. For kids, there are outdoor games and interactive learning zones.
          </p>
          <p className="leading-relaxed">
            Each activity is designed to create a memorable and immersive experience with nature, ensuring relaxation and enjoyment for all ages.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1502082553048-f009c37129b9" 
          alt="Activities"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Guest Experiences</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahat Ahmed",
                feedback:
                  "An amazing experience! The butterfly garden and luxury cottages were breathtaking.",
              },
              {
                name: "Sadia Hossain",
                feedback:
                  "Perfect getaway! The resort staff were very friendly, and the facilities were top-notch.",
              },
              {
                name: "Tariq Islam",
                feedback:
                  "Nature at its best. My family and I loved every moment at Northsouth Butterfly Resort.",
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

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Plan Your Visit Today!</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Experience the magic of nature and luxury at Northsouth Butterfly Resort & Park. Book your stay, explore our facilities, and make unforgettable memories.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition">
          Book Now
        </button>
      </section>
    </div>
  );
};


export default NorthsouthButterfly