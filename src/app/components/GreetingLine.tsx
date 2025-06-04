import Image from "next/image";

const GreetingLine = () => (
  <div className="relative flex justify-center items-center py-10">
    {/* Background pattern image */}
    <div className="absolute inset-0 w-full h-full z-0">
      <Image
        src="/patterns/animal-pattern.jpg" // Place your animal pattern image in public/patterns/
        alt="Animal pattern background"
        fill
        className="object-cover opacity-40"
        priority
      />
    </div>
    {/* Translucent greeting box */}
    <div className="relative z-10 bg-white/80 rounded-2xl shadow-lg px-8 py-6 max-w-2xl mx-auto text-center backdrop-blur-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
        Karibu! Welcome to East Africa’s Untamed Beauty
      </h1>
      <p className="text-gray-700 text-base sm:text-lg">
        Discover breathtaking landscapes, rich cultures, and mesmerizing wildlife. 
        Join us for an enriching journey that supports local communities and the environment. 
        Let’s explore beyond the wild—together.
      </p>
    </div>
  </div>
);

export default GreetingLine;