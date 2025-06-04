import Image from "next/image";

const features = [
  {
    title: "Authentic Experiences",
    desc: "Discover East Africa through the eyes of local experts. Our safaris immerse you in genuine cultural encounters and breathtaking natural landscapes.",
    image: "/forestlake-1600w.jpg", // Replace with your image
  },
  {
    title: "Expertise & Passion",
    desc: "With over two decades of experience, our passionate team ensures every detail of your safari is thoughtfully planned for an unforgettable adventure.",
    image: "/forestlake-1600w.jpg", // Replace with your image
  },
  {
    title: "Sustainability at Heart",
    desc: "We are committed to responsible tourism, conservation efforts, and community upliftment, ensuring your journey leaves a positive impact.",
    image: "/forestlake-1600w.jpg", // Replace with your image
  },
  {
    title: "Tailor-Made Journeys",
    desc: "No two travelers are the same. We design personalized itineraries that cater to your interests, whether it’s wildlife safaris, gorilla trekking, or cultural tours.",
    image: "/forestlake-1600w.jpg", // Replace with your image
  },
];

const WhyChooseUs = () => (
  <section className="py-16 bg-gray-50" id="why-choose-us">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-green-800">
      Why Choose Us
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {features.map((f) => (
        <div key={f.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-4">
            <Image src={f.image} alt={f.title} fill className="object-cover rounded-xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-10">
      <a
        href="/about"
        className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors shadow"
      >
        About Us
      </a>
    </div>
  </section>
);

export default WhyChooseUs;