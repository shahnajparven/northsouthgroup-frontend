import land1 from '../../assets/images/land1.jpg'
import land2 from '../../assets/images/land2.jpg'
const imageCards = [
  { src: land1, title: "The Sanctum Road 81, Gulshan" },
  { src: land1, title: "The Sanctum Road 81, Gulshan" },
  { src: land1, title: "TThe Sanctum Road 81, Gulshan" },
  { src:land1, title: "The Sanctum Road 81, Gulshan" },
  { src: land2, title: "The Sanctum Road 81, Gulshan" },
  { src: land2, title: "The Sanctum Road 81, Gulshan" },
  { src: land2, title: "The Sanctum Road 81, Gulshan" },
  { src: land2, title: "The Sanctum Road 81, Gulshan" },
];

const VentureForm = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
   <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-3xl font-bold text-center mb-4">Start Your Joint Venture Today</h1>
  <p className="text-center text-gray-600 mb-6">
    A Better Tomorrow Starts with North South Group Today
  </p>

  <form className="space-y-6">
    {/* Owner Information */}
    <h2 className="text-xl font-semibold text-gray-700">OWNER INFORMATION</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-600">Name*</label>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-600">Address*</label>
        <input
          type="text"
          placeholder="Address"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-600">Phone*</label>
        <input
          type="tel"
          placeholder="Phone"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-600">Email*</label>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>

    {/* Land Information */}
    <h2 className="text-xl font-semibold text-gray-700 mt-4">LAND INFORMATION</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-600">Category*</label>
        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Select Category</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Agricultural</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-600">Location*</label>
        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Select Location</option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Khulna</option>
        </select>
      </div>
      <div className="flex flex-col md:col-span-2">
        <label className="mb-1 font-medium text-gray-600">Size (Katha)*</label>
        <input
          type="text"
          placeholder="Size of the land"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
    >
      Submit
    </button>
  </form>

 
</div>
 <div>
     <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {imageCards.map((card, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-black/70 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold text-center px-2">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>

  </div>

</div>
  )
}

export default VentureForm