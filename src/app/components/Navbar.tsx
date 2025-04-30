'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
 



interface SafariItem {
  name: string;
  href: string;
}

interface CollectionItem {
  name: string;
  href: string;
}

interface Collection {
  title: string;
  items: CollectionItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: SafariItem[] | Collection[];
}

interface NavbarProps {
  openAkili: () => void;
}

export default function Navbar({ openAkili }: NavbarProps) {
   
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

   

  const safaris: SafariItem[] = [
    { name: '7 Day Uganda Discovery Safari', href: '#' },
    { name: '15 Day Uganda Classic Safari', href: '#' },
    { name: '4 Day Rwanda Gorilla Safari', href: '#' },
    { name: '5 Day Volcanoes and Lakes of Rwanda', href: '#' },
    { name: '11 Day Rwanda Discovery Safari', href: '#' },
  ];

  const collections: Collection[] = [
    {
      title: 'Boutique  ',
      items: [
        { name: 'Elephant Plains Lodge', href: '#' },
        { name: 'Primate Lodge Kibale', href: '#' },
        { name: 'Mwamba Lodge Tarangire', href: '#' },
        { name: 'Pibidi Lodge', href: '#' },
      ]
    },
    {
      title: 'Adventure  ',
      items: [
        { name: 'Simba Safari Camp', href: '#' },
        { name: 'Budongo Forest Activities', href: '#' },
      ]
    }
  ];

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '#' },
    { name: 'Safaris', href: '#', dropdown: safaris },
    { name: 'Collections', href: '#', dropdown: collections },
    { name: 'Community', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const isSafariDropdown = (dropdown: SafariItem[] | Collection[]): dropdown is SafariItem[] => {
    return Array.isArray(dropdown) && dropdown.length > 0 && 'name' in dropdown[0];
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 bg-white/300 backdrop-blur-4xl shadow-md mx-8 border-0 rounded-md" style={{backdropFilter: 'blur(100px)',background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-0 ">
        <div className="flex items-center justify-between h-16 border-0">
          <div className="flex-shrink-0 border-0">
            <Link href="#" className="block border-0">
              <Image
                src="/gls-m_logo.svg"
                alt="Great Lakes Safari Logo"
                width={240}
                height={80}
                className="brightness-80"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block border-0">
            <div className="ml-6 flex items-center space-x-6 border-0 ">
              {navigation.map((item) => (
                <div key={item.name} className="relative border-0 ">
                  {item.dropdown ? (
                    <div
                      className="group border-0"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className=" flex items-center text-gray-900 hover:text-primary-600 transition-colors text-lg border-0" style={{ color: '#FFFFFF'  }}>
                        <span className="text-lg border-0" style={{ fontSize: '1.0rem' }}>{item.name}</span>
                        
                        {activeDropdown === item.name ? (
                          <ChevronUp className="ml-1 h-4 w-4 border-0" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4 border-0" />
                        )}
                      </button>
                      {activeDropdown === item.name && (
  <div className={`absolute top-full left-0   bg-white py-4 mt-2 border-0 shadow-lg rounded-md`} style={{width: isSafariDropdown(item.dropdown) ? '300px' : '400px'}}>
    {isSafariDropdown(item.dropdown) ? (
      item.dropdown.map((subItem) => (
        <Link
          key={`${item.name}-${subItem.name}`}
          href={subItem.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600 border-0" style={{color: '#2B5D34'}}
        >
          {subItem.name}
              </Link>
      ))
    ) : (
      <div className="grid grid-cols-2 gap-6 px-4 border-0">
        {item.dropdown.map((collection, index) => (
          <div key={`${item.name}-${collection.title}-${index}`} className="border-0">
            <h3 className="px-2 py-1 text-sm  text-gray-500 uppercase tracking-wider border-0 font-bold" style={{color: '#cf5f1f' }}>
              {collection.title}
            </h3>
            {collection.items.map((subItem) => (
              <Link
                key={`${item.name}-${collection.title}-${subItem.name}`}
                href={subItem.href}
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600 rounded-md transition border-0"
                style={{color: '#2B5D34'}}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    )}
  </div>
)}

                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-900 hover:text-primary-600 transition-colors   text-lg border-0  "
                      style={{ color: '#FFFFFF',  fontSize: '1.0rem' }}
                    >
                      {item.name}
              </Link>
                  )}
                </div>
              ))}
              <button
                 
                onClick={openAkili}
                className="btn-primary ml-4 text-lg border-0 bg-green-800   w-19 h-8 align-center rounded-lg"
                style={{ backgroundColor: '#cf5f1f' }}
              >
               <span className="align-center text-lg border-0 px-2" > Akili-AI </span>
                </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-900 hover:text-primary-600 focus:outline-none border-0"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              ) : (
                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-0`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-0">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary-600 hover:bg-gray-50 border-0 flex items-center "
                  >
                    {item.name}
                    
                        {activeDropdown === item.name ? (
                          <ChevronUp className="ml-1 h-4 w-4 border-0" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4 border-0" />
                        )}
                  </button>
                  {activeDropdown === item.name && (
                    <div className="pl-4 border-0 rounded-md">
                      {isSafariDropdown(item.dropdown) ? (
                        item.dropdown.map((subItem) => (
                          <Link
                            key={`${item.name}-${subItem.name}`}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary-600 hover:bg-gray-50 border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))
                      ) : (
                        item.dropdown.map((collection, index) => (
                          <div key={`${item.name}-${collection.title}-${index}`} className="border-0 rounded-md">
                            <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 border-0">
                              {collection.title}
                            </h3>
                            {collection.items.map((subItem) => (
                              <Link
                                key={`${item.name}-${collection.title}-${subItem.name}`}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary-600 hover:bg-gray-50 border-0"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary-600 hover:bg-gray-50 border-0"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="border-0 ">
          <button
            
            onClick={openAkili}
            className="block px-3 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 border-0 rounded-md bg-green-800"
            style={{ backgroundColor: '#cf5f1f' }}
          >
           Ask Akili-AI
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
