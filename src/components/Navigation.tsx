import React from 'react';

export default function Navigation({ currentTab, setCurrentTab }: { currentTab: number, setCurrentTab: (val: number) => void }) {
  const tabs = ['Home 1', 'Home 2', 'Home 3', 'Home 4', 'Home 5'];
  
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-light px-2 py-2 rounded-full flex gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentTab(idx)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
              currentTab === idx 
                ? 'bg-accent text-white shadow-lg shadow-accent/30' 
                : 'text-primary hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
