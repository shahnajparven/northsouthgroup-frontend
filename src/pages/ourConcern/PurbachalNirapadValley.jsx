import React from 'react'
import NirapadValley from '../../assets/images/ns4.jpg'
const PurbachalNirapadValley = () => {
  return (

    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <img
          src={NirapadValley}
          alt="Purbachal Nirapad Valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Purbachal Nirapad Valley
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              A Secure, Green & Modern Living Destination
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition">
              Explore the Project
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="About Purbachal"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
              About Purbachal Nirapad Valley
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Purbachal Nirapad Valley is a thoughtfully planned residential
              project offering a safe, peaceful, and eco-friendly lifestyle in
              the heart of Purbachal. Designed with modern urban planning and
              natural harmony, it ensures long-term comfort and security.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With excellent connectivity to Dhaka city and a calm environment,
              it is an ideal choice for families, professionals, and investors.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-green-700">
            Project Highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Gated & Secure Community",
              "Wide Roads & Planned Layout",
              "Green Parks & Open Spaces",
              "Modern Drainage System",
              "Nearby Schools & Hospitals",
              "High Investment Potential",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                <p className="text-gray-600">
                  Designed to provide maximum comfort, safety, and long-term
                  value for residents and investors alike.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Safety & Security First
            </h2>
            <p className="leading-relaxed mb-4">
              Security is the foundation of Purbachal Nirapad Valley. The project
              is designed to ensure complete peace of mind for every resident.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>24/7 Security Surveillance</li>
              <li>Controlled Entry & Exit Points</li>
              <li>Well-Lit Roads & Pathways</li>
              <li>Boundary Walls & Checkpoints</li>
            </ul>
          </div>
          <img
            src="/images/purbachal-security.jpg"
            alt="Security"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Location & Investment */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-700">
              Prime Location Advantage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Located in Purbachal, the project offers easy access to major roads,
              educational institutions, hospitals, and commercial hubs, making
              daily life convenient and stress-free.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-700">
              A Smart Investment Choice
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With rising demand and rapid development in Purbachal, investing in
              Nirapad Valley ensures strong future appreciation and secure
              ownership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Build Your Future at Purbachal Nirapad Valley
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience secure living, green surroundings, and modern facilities
          designed for a better tomorrow.
        </p>
        <button className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-full text-lg transition">
          Contact Us Today
        </button>
      </section>
    </div>
 )
}

export default PurbachalNirapadValley