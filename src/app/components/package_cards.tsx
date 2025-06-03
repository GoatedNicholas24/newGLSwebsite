import Image from "next/image";
import React, { useState, useEffect } from "react";
type SafariPackageCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const SafariPackageCard = ({
  image,
  title,
  description,
  link,
}: SafariPackageCardProps) => {
  
  return (
    
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-auto bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
      >
        Learn More
      </a>
    </div>
  </div>
);
}

const safariPackages = [
  {
    image: "/forestlake-1600w.jpg", // Replace with your actual image paths
    title: "Uganda Classic Safari",
    description:
      "A 15-day journey through Uganda’s top parks: wildlife, primates, and culture. Includes game drives, gorilla & chimp tracking, and scenic lakes.",
    link: "#",
  },
  {
    image: "/forestlake-1600w.jpg",
    title: "Uganda Discovery Safari",
    description:
      "A 7-day adventure ideal for primate lovers and wildlife seekers. Chimpanzee & gorilla tracking, game drives, and beautiful landscapes.",
    link: "#",
  },
  {
    image: "/forestlake-1600w.jpg",
    title: "Ultimate Uganda 20th Anniversary Safari",
    description:
      "An epic 21-day exploration of Uganda’s national parks, wildlife, and culture. The ultimate way to experience the Pearl of Africa.",
    link: "#",
  },
];

const SafariPackagesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <section
      className="-mt-16 relative z-10 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-labelledby="safari-packages-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {safariPackages.map((pkg) => (
          <SafariPackageCard key={pkg.title} {...pkg} />
        ))}
      </div>
    </section>
  ) : (
    <section
      className="-mt-16 relative z-10 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-labelledby="safari-packages-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {safariPackages.map((pkg) => (
          <SafariPackageCard key={pkg.title} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default SafariPackagesSection;