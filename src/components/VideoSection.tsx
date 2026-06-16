import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl lg:text-5xl font-display font-medium mb-8 text-[#0a192f] leading-tight">
              Come lavora lo studio Giacomelli
            </h2>
            <div className="text-lg lg:text-xl text-gray-600 space-y-6 leading-relaxed">
              <p>
                In questo video Alessandro Giacomelli spiega il metodo di lavoro dello studio:
                un approccio alla consulenza finanziaria basato su ascolto, pianificazione e responsabilità.
              </p>
              <p>
                Ogni percorso è costruito su misura, con l’obiettivo di accompagnare persone e famiglie
                nelle decisioni finanziarie più importanti, oggi e nel lungo periodo.
              </p>
            </div>
          </div>
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100 relative">
            <iframe 
              src="https://player.vimeo.com/video/1147004931?title=0&byline=0&portrait=0" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
