import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navigation({ currentTab, setCurrentTab }: { currentTab: number, setCurrentTab: (val: number) => void }) {
  const tabs = ['Home 1', 'Home 2'];
  
  const menuItems = [
    { label: 'Home', active: true },
    { label: 'Chi Sono' },
    { label: 'Privati', hasDropdown: true },
    { label: 'Aziende' },
    { label: 'Formazione' },
    { label: 'Contenzioso' },
    { label: 'Video e Guide' },
    { label: 'Blog' },
    { label: 'Informazioni', hasDropdown: true },
    { label: 'Contatti' },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
    if (nextSibling) {
      nextSibling.style.display = 'block';
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 bg-white z-[100] border-b border-gray-100 shadow-sm py-4 lg:py-0">
        <div className="max-w-[1600px] mx-auto px-6 lg:h-[90px] flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo from attachment - falls back to styled text if image not found in public folder */}
            <img 
              src="/logo.png" 
              alt="Giacomelli" 
              className="h-10 lg:h-12 object-contain" 
              onError={handleImageError}
            />
            <span 
              className="hidden font-serif text-[2.5rem] tracking-tight text-[#6d6b67] leading-none" 
              style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}
            >
              Giacomelli
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {menuItems.map((item, idx) => (
              <a 
                key={idx}
                href="#"
                className={`flex items-center gap-1.5 text-[0.95rem] font-semibold transition-colors ${
                  item.active ? 'text-[#2a52de]' : 'text-[#121a3f] hover:text-[#2a52de]'
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="stroke-[2.5]" />}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* DEV HELPER: layout switcher */}
      <div className="fixed bottom-6 left-6 z-[100] bg-white p-1 rounded-full shadow-lg border border-gray-200 opacity-50 hover:opacity-100 transition-opacity">
        <div className="flex gap-1">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTab(idx)}
              className={`px-4 py-2 rounded-full font-medium text-xs transition-all duration-300 ${
                currentTab === idx 
                  ? 'bg-[#2a52de] text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
