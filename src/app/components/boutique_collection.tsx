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
    <div style={{backgroundColor:'#cad5c5', borderRadius: '30px', padding: '5px', marginBottom: '3px', width:'90%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}}>  
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8  " style={ {color: '#557553'}}>
      Our Boutique Collection
    </h2>
    <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
      Great Lakes Collection offers a selection of authentic African-style safari lodges located in East Africa’s most iconic national parks. Our lodges are designed to immerse you in the heart of nature, while our strong ties to the local communities bring the experience to life. We strive to provide guests with unforgettable stays and foster a meaningful connection with the natural world.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {lodges.map((lodge) => (
        <div key={lodge.name} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center" style={{color:'#557553'}}>
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
            <Image src={lodge.image} alt={lodge.name} fill className="object-cover" />
          </div>
          <h3 className="text-lg font-semibold mb-1">{lodge.name}</h3>
          <p className=" font-medium" style={{color: '#cf5f1f' }}>{lodge.park}</p>
          <p className="text-gray-500 text-sm">{lodge.country}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-10">
      <a
        href="/collection"
        className="  text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors shadow" style={ {backgroundColor: '#557553'}}
      >
        View Our Collection
      </a>
    </div>
     </div>
  </section>

);

export default BoutiqueCollection;