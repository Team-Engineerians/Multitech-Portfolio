import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start relative overflow-hidden px-4 py-10">
      {/* Navigation */}
      <div className="relative w-full max-w-6xl mx-auto mb-8 h-12">
      {/* Contact Button absolutely positioned in the top-right */}
        <div className="absolute right-0 top-0">
          <button className="bg-gray-100 px-4 py-2 rounded-full shadow text-sm">Contact</button>
        </div>

      {/* Nav links centered horizontally */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
        <div className="flex gap-12 text-sm font-medium">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Career</a>
          <a href="#">Gallery</a>
        </div>
      </div>
    </div>


      {/* Hero Text */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
          Connecting Talent, <br /> Empowering Carrers.
        </h1>
        <p className="text-gray-600 text-lg">
          Unlock Global Opportunities with Expert Manpower Solutions
        </p>
      </div>

      {/* Background Globe Image */}
      <div className="top-100 w-full h-[600px] mt-8 flex justify-center z-0 pointer-events-none">
        <Image
          src="/global.png" // Put your globe image in public folder
          alt="Globe"
          width={1000}
          height={500}
          className="object-fill opacity-90"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute left-10 top-56 z-10 space-y-4">
        <Image src="/visa.png" alt="Visa" width={240} height={240} />
        <Image src="/coin.png" alt="Dollar" width={240} height={240} />
      </div>
      <div className="absolute right-10 top-56 z-10 space-y-4 flex flex-col items-end">
        <Image src="/plane.png" alt="Plane" width={40} height={40} />
        <div className="w-16 h-3 bg-orange-500 rounded-full"></div>
      </div>

      {/* Stats Cards */}
    <div className="absolute z-10 mt-150 px-4 w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl w-full">
        {/* Card 1: Industry */}
        <div className="relative rounded-xl h-72 p-4 text-white overflow-hidden flex flex-col justify-end items-start">
          <Image
            src="/pipes.png"
            alt="Industry"
            fill
            className="absolute inset-0 object-cover"
          />
          <div className="z-10">
            <div className="text-3xl font-bold">20+</div>
            <div className="text-sm">Industries served</div>
          </div>
        </div>

        {/* Card 2: Happy Clients */}
        <div className="bg-[#5483a2] rounded-xl p-4 h-72 text-white shadow-md text-center flex flex-col justify-center items-center">
          <div className="text-3xl font-bold">1K</div>
          <div className="text-sm">Happy Clients</div>
        </div>

        {/* Card 3: People Deployed */}
        <div className="bg-white rounded-xl p-4 h-72 shadow-md text-center flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-black">200K</div>
          <div className="text-sm text-gray-600 mt-1">People Deployed</div>
        </div>

        {/* Card 4: Branches */}
        <div className="relative rounded-xl h-72 p-4 text-white overflow-hidden flex flex-col justify-end items-start">
          <Image
            src="/map.jpeg"
            alt="Branches"
            fill
            className="absolute inset-0 object-cover"
          />
          <div className="z-10">
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm">+ Branches</div>
          </div>
        </div>

        {/* Card 5: Learn More */}
        <div className="bg-[#6c90ad] rounded-xl p-4 h-72 flex flex-col justify-center items-center text-white">
          <button className="bg-white text-blue-700 text-sm px-4 py-2 rounded-full hover:scale-105 transition">
            Learn more →
          </button>
        </div>
      </div>
    </div>
</div>

  );
}
