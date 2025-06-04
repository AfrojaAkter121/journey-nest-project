import Navbar from './Navbar'

export default function Header() {
  return (
    <header
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://i.ibb.co/84g2fL4X/pexels-kovyrina-1879288.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navbar Inside Header */}
      {/* <div className="relative z-30 pt-1">
        <Navbar />
      </div> */}

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-start px-4 h-full pt-32 pl-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">
          Discover Your Dream <br /> Destinations Here!
        </h1>
        <p className="mb-6 max-w-xl">
          Whether you seek the thrill of adventure, the tranquility <br /> of serene landscapes, or the cultural richness <br />
          of far-off lands, we’re here to turn your dreams into reality.
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="px-6 py-3 rounded-l-full text-black bg-[#D7E95D]/80">Explore</button>
          <button className="bg-white/60 px-6 py-3 rounded-r-full text-green-900 hover:bg-gray-200 font-bold">Read More</button>
        </div>
      </div>
    </header>
  );
}
