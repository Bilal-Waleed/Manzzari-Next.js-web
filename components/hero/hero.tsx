import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center py-12 lg:py-20 px-6 lg:px-16">
     
      <div className="flex flex-col justify-center items-start text-center lg:text-left mb-8 lg:mb-0 w-full lg:w-1/2">
        <h1 className="max-w-[496px] font-bold text-[40px]">
          IMPECCABLE <div className="text-[#A29875]"></div>CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>


        {/* Explore Now Button (with colored box inside) */}
        <div className="relative w-full sm:w-auto">
          <button className="relative px-8 py-3 text-lg font-semibold text-white bg-[#A29875] rounded-md overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-[#8b7a5d] transform group-hover:scale-110 transition-all duration-300"></span>
            <span className="relative z-10">Explore Now</span>
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
          <Image
            src="/image.jpg"
            alt="Jewelry Image"
            width={450} // Adjust width as necessary
            height={500} // Adjust height as necessary
            className="w-full h-auto rounded-lg shadow-lg border-4 border-[#A29875] hover:border-[#8b7a5d] transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
