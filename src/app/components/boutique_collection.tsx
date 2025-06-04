import Image from "next/image";

const lodges = [
  {
    name: "Elephant Plains Lodge",
    park: "Queen Elizabeth National Park",
    country: "UGANDA",
    image: "/forestlake-1600w.jpg",
  },
   
  {
    name: "Primate Lodge Kibale",
    park: "Kibale National Park",
    country: "UGANDA",
    image: "/forestlake-1600w.jpg",
  },
  {
    name: "Mwamba Lodge Tarangire",
    park: "Tarangire National Park",
    country: "TANZANIA",
    image: "/forestlake-1600w.jpg",
  },
];

const BoutiqueCollection = () => (
  <section className="py-16 bg-gray-50" id="boutique-collection">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-green-800">
      Our Boutique Collection
    </h2>
    <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
      Great Lakes Collection offers a selection of authentic African-style safari lodges located in East Africa’s most iconic national parks. Our lodges are designed to immerse you in the heart of nature, while our strong ties to the local communities bring the experience to life. We strive to provide guests with unforgettable stays and foster a meaningful connection with the natural world.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {lodges.map((lodge) => (
        <div key={lodge.name} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center">
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
            <Image src={lodge.image} alt={lodge.name} fill className="object-cover" />
          </div>
          <h3 className="text-lg font-semibold mb-1">{lodge.name}</h3>
          <p className="text-green-800 font-medium">{lodge.park}</p>
          <p className="text-gray-500 text-sm">{lodge.country}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-10">
      <a
        href="/collection"
        className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors shadow"
      >
        View Our Collections
      </a>
    </div>
  </section>
);

export default BoutiqueCollection;