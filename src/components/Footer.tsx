import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111649] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Logo & Info */}
          <div className="md:col-span-12 lg:col-span-6">
            <h2 className="font-serif text-5xl lg:text-6xl tracking-tight mb-8" style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}>
              Giacomelli
            </h2>
            <div className="space-y-8 text-lg text-white/90 leading-relaxed max-w-xl">
              <p>
                Alessandro Giacomelli — Dottore Commercialista,
                Consulente Finanziario Autonomo, Certified Financial
                Planner e Registered Life Planner®.
              </p>
              <p>
                Da oltre vent'anni aiuto persone e famiglie a pianificare la
                propria serenità finanziaria con un approccio olistico e
                indipendente.
              </p>
            </div>
          </div>

          {/* Contatti */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold mb-8">Contatti</h3>
            <div className="space-y-6 text-lg text-white/90">
              <p className="leading-relaxed">
                Via Roma, 123<br />
                Edificio B<br />
                00100 Roma (RM)
              </p>
              <p>
                +39 012 3456789 | +39<br />
                333 1234567
              </p>
              <p>
                <a href="mailto:info@studio-dummy.it" className="text-[#3a5af5] hover:text-[#4d6bf6] transition-colors break-words">
                  info@studio-dummy.it
                </a>
              </p>
            </div>
          </div>

          {/* Trasparenza */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-xl font-bold mb-8">Trasparenza</h3>
            <ul className="space-y-4 text-lg text-white/90 mb-10">
              <li><a href="#" className="underline hover:text-white transition-colors">Informativa</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors">Codice Etico</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
            <button className="bg-[#3a5af5] text-white px-8 py-3.5 rounded-full font-medium text-lg hover:bg-[#2b4ced] transition-colors w-full sm:w-auto">
              Contattaci
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3a5af5] text-white/90 py-4 px-6 text-sm lg:text-base">
        <div className="max-w-[1440px] mx-auto">
          Copyright 2026 — ® All Rights Reserved — Dott. Alessandro Giacomelli — P.I. 12345678901
        </div>
      </div>
    </footer>
  );
}
