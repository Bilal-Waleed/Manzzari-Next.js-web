import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:py-12 px-0 lg:px-28">
     
      <div className="flex flex-col justify-center items-start text-center lg:text-left mb-8 lg:mb-0 w-full lg:w-1/2">
        <h1 className="font-bold text-[40px] text-gray-800">
          IMPECCABLE <div className="text-[#A29875]"></div>CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="text-base text-gray-600 mb-6">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>

        <div className="w-full sm:w-auto">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-[#A29875] rounded-md ">
            <span>Explore Now</span>
          </button>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full xl:max-w-xl flex justify-end"> 
          <Image
            src="/image.jpg"
            alt="Jewelry Image"
            width={200} 
            height={250}
            className="w-full max-w-sm"
          />
          </div>
      </div>
    </div>
  );
}
