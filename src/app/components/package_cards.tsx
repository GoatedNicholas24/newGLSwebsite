import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 overflow-hidden flex flex-col min-w-[300px] max-w-xs w-full mx-2">
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
};

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
  {
    image: "/forestlake-1600w.jpg",
    title: "Ultimate Uganda 20th Anniversary Safari 2",
    description:
      "An epic 21-day exploration of Uganda’s national parks, wildlife, and culture. The ultimate way to experience the Pearl of Africa.",
    link: "#",
  },
  {
    image: "/forestlake-1600w.jpg",
    title: "Ultimate Uganda 20th Anniversary Safari 3",
    description:
      "An epic 21-day exploration of Uganda’s national parks, wildlife, and culture. The ultimate way to experience the Pearl of Africa.",
    link: "#",
  },
];

const SCROLL_AMOUNT = 340; // px, adjust to card width + margin

const SafariPackagesSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll every 20 seconds
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If at end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
        }
      }
    };
    autoScrollInterval.current = setInterval(scroll, 15000);
    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  return isMobile ? (
    <section
      className="-mt-16 relative z-10 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-labelledby="safari-packages-heading"
    >
       
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          aria-label="Scroll left"
          onClick={handleScrollLeft}
          className="flex absolute left-0 z-20 bg-green-100 hover:bg-green-200 rounded-full shadow p-2 transition-colors"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2 w-full px-12"
          style={{ scrollBehavior: "smooth" }}
        >
          {safariPackages.map((pkg) => (
            <div key={pkg.title} className="snap-start flex-shrink-0">
              <SafariPackageCard {...pkg} />
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          onClick={handleScrollRight}
          className="flex absolute right-0 z-20 bg-green-100 hover:bg-green-200 rounded-full shadow p-2 transition-colors"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  ) : (
    <section
      className="-mt-16 relative z-10 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-labelledby="safari-packages-heading"
    >
      
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          aria-label="Scroll left"
          onClick={handleScrollLeft}
          className="flex absolute left-0 z-20 bg-white/80 hover:bg-green-100 rounded-full shadow p-2 transition-colors"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2 w-full px-12"
          style={{ scrollBehavior: "smooth" }}
        >
          {safariPackages.map((pkg) => (
            <div key={pkg.title} className="snap-start flex-shrink-0">
              <SafariPackageCard {...pkg} />
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          onClick={handleScrollRight}
          className="flex absolute right-0 z-20 bg-white/80 hover:bg-green-100 rounded-full shadow p-2 transition-colors"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SafariPackagesSection;