import Image from "next/image";

const GreetingLine = () => (
  <div className="relative flex justify-center items-center py-10">
    {/* Background pattern image */}
    <div className="absolute inset-0 w-full h-full z-0">
      <Image
        src="/animal-footprint.jpg" // Place your animal pattern image in public/patterns/
        alt="Animal pattern background"
        fill
        className="object-cover opacity-60"
        priority
      />
    </div>
    {/* Translucent greeting box */}
    <div className="relative z-10 bg-white/80 rounded-2xl shadow-lg px-8 py-6 max-w-2xl mx-auto text-center backdrop-blur-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
        Karibu!
      </h1>
      <p className="text-gray-700 text-base sm:text-lg">
        Welcome! Experience the untamed beauty of East Africa with us! From the seductive landscapes covering some of the world’s most amazing mountains, thickest forests, deepest lakes and longest rivers, to the mesmerizing wildlife that lives in these serene environments. From the people that inhabit the spaces between to their rich cultures that leave you wanting more.

We believe in enrichment. Enriching the lives of the people we work with, the communities we pass through, and the environment we live in. By choosing us, you gain a piece of this enrichment by being part of us, and through the experience we share with you.
        
      </p>
      <p className="mt-4 text-green-600 font-bold">
         Let’s explore beyond the wild together.
      </p>
    </div>
  </div>
);

export default GreetingLine;