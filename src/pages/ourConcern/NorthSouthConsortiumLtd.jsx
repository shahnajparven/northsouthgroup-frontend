import React from 'react'

const NorthSouthConsortiumLtd = () => {
  return (
    <>
  <section class="relative h-screen w-full">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      alt="Northsouth Consortium"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 flex items-center justify-center h-full text-center px-6">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Northsouth Consortium Ltd
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-8">
          Building sustainable businesses, innovative projects, and future-ready
          solutions across industries.
        </p>
        <a
          href="#about"
          class="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Discover More
        </a>
      </div>
    </div>
  </section>


  <section id="about" class="py-20 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-green-700">
          About Northsouth Consortium Ltd
        </h2>
        <p class="mb-4 leading-relaxed">
          Northsouth Consortium Ltd is a diversified business organization committed
          to excellence, innovation, and sustainable growth. We operate across
          multiple sectors, delivering value-driven solutions that empower
          communities and businesses alike.
        </p>
        <p class="mb-4 leading-relaxed">
          With a strong foundation built on trust, professionalism, and integrity,
          Northsouth Consortium Ltd continues to expand its footprint by embracing
          modern technologies, strategic partnerships, and visionary leadership.
        </p>
        <p class="leading-relaxed">
          Our mission is to bridge opportunities between the present and the future,
          ensuring long-term success for our stakeholders.
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="About Northsouth"
          class="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>

  <section class="bg-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-14 text-green-700">
        Our Core Services
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-4">Business Development</h3>
          <p>
            Strategic planning, market analysis, and growth-focused solutions to
            help businesses scale efficiently and sustainably.
          </p>
        </div>
        <div class="p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-4">Project Management</h3>
          <p>
            End-to-end project execution with a focus on quality, timelines, and
            cost-effective delivery.
          </p>
        </div>
        <div class="p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-4">Investment & Consulting</h3>
          <p>
            Professional advisory services to guide smart investments and informed
            decision-making.
          </p>
        </div>
        <div class="p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-4">Sustainable Solutions</h3>
          <p>
            Eco-friendly and future-oriented solutions designed to support
            environmental and social responsibility.
          </p>
        </div>
        <div class="p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-4">Technology Integration</h3>
          <p>
            Leveraging modern technologies to optimize operations, enhance
            productivity, and drive innovation.
          </p>
        </div>
        <div class="p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-4">Global Partnerships</h3>
          <p>
            Building strong alliances across borders to unlock new opportunities
            and shared success.
          </p>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default NorthSouthConsortiumLtd