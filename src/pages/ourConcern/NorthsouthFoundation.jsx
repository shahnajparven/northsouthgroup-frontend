import React from 'react'

const NorthsouthFoundation = () => {

  return (
 
    <div className="w-full text-gray-800">

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1593442808882-775dfcd90699?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", // Replace with foundation related image
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Northsouth Foundation
          </h1>
          <p className="text-gray-200 max-w-3xl text-lg md:text-xl">
            Empowering communities, transforming lives, and creating a better future for all.
          </p>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1723809828438-94b1351d04c0?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with real image
          alt="Foundation Work"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            About Northsouth Foundation
          </h2>
          <p className="leading-relaxed mb-4">
            Northsouth Foundation is committed to improving lives through education, healthcare, and sustainable community development. We work closely with local communities to create programs that make a lasting impact.
          </p>
          <p className="leading-relaxed">
            Our team believes in empowering individuals with the knowledge, skills, and resources needed to build a brighter future. Every initiative is designed to ensure long-term social and economic benefits for the communities we serve.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
            Our Programs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Education Initiatives",
                img: "https://plus.unsplash.com/premium_photo-1742926577749-e05ee300c1ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Healthcare Programs",
                img: "https://images.unsplash.com/photo-1659019479972-82d9e3e8cfb7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Community Development",
                img: "https://plus.unsplash.com/premium_photo-1723672870034-93eb64a3aaae?q=80&w=804&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

      {/* IMPACT */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Our Impact
          </h2>
          <ul className="list-disc ml-6 space-y-3">
            <li>Over 10,000 children educated through our programs</li>
            <li>Healthcare services provided to over 50,000 individuals</li>
            <li>Empowered local communities with sustainable development</li>
            <li>Partnered with NGOs and government for large-scale initiatives</li>
          </ul>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661746632807-00d21bac5826?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Impact Work"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Stories From the Community
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Fatima Rahman",
                feedback:
                  "The foundation's education program changed my life. I can now provide for my family.",
              },
              {
                name: "Rahim Khan",
                feedback:
                  "Healthcare services provided by Northsouth Foundation helped my village immensely.",
              },
              {
                name: "Ayesha Siddiqui",
                feedback:
                  "I am proud to be part of their community development program. Truly life-changing.",
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
        <h2 className="text-3xl font-bold mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Support Northsouth Foundation by volunteering, donating, or partnering with us. Together, we can build a brighter, stronger community.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition">
          Get Involved
        </button>
      </section>

    </div>
  );
};


export default NorthsouthFoundation