import Image from "next/image";

const galleryImages = [
  "/forestlake-1600w.jpg",
  "/gallery_img2.jpg",
  "/wcu4.webp",
  
];

const GalleryPreview = () => (
  <section className="py-16 bg-white relative">
    <h1 className="text-4xl font-bold mb-4 text-center " style={{color: '#557553'}}>Pictorial</h1>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center">
      
      <div className="flex-1 grid grid-cols-3 grid-rows-1 gap-2 overflow-x-auto scrollbar-hide " style={{ scrollBehavior: "smooth" }}>
        {galleryImages.slice(0, 6).map((img, i) => (
          <div key={img} className="relative w-80 h-80 aspect-square rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <Image src={img} alt={`Gallery ${i + 1}`} fill  className="object-cover w-80 h-80" />
          </div>
        ))}
      </div>
      <div className="md:absolute md:top-8 md:right-8 mt-6 md:mt-0">
        <a
          href="/gallery"
          className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors shadow" style={{ backgroundColor: '#cf5f1f' }}
        >
          Visit Our Gallery
        </a>
      </div>
    </div>
  </section>
);

export default GalleryPreview;