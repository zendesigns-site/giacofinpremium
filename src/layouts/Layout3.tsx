import { T } from '../data';
import { ArrowRightCircle, Target, Briefcase, FileText } from 'lucide-react';

export default function Layout3() {
  return (
    <div className="min-h-screen bg-[#f4f6fa] text-primary font-sans">
      {/* 1. HERO - Magazine Editorial Style */}
      <section className="bg-white px-6 lg:px-12 py-32 rounded-b-[4rem] shadow-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-12 gap-8 items-end">
             <div className="lg:col-span-8">
               <h1 className="text-[12vw] lg:text-[6rem] font-display font-extrabold leading-[0.9] tracking-tighter text-primary">
                 Organizza <br/> il patrimonio.
               </h1>
             </div>
             <div className="lg:col-span-4 pb-4">
               <p className="text-xl font-medium leading-relaxed text-secondary mb-8">
                 {T.hero.subtitle}
               </p>
               <button className="bg-primary text-white border-none px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-accent transition w-full lg:w-auto text-center">
                 {T.hero.cta}
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* 2 & 3. BENTO GRID: Problema + Soluzione */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Problema Box */}
            <div className="lg:col-span-7 bg-primary text-white p-10 lg:p-16 rounded-[2rem] relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <span className="uppercase tracking-widest font-bold text-accent mb-6 block">Il Contesto</span>
                <h2 className="text-3xl font-display font-bold leading-snug mb-10">{T.problema.text}</h2>
              </div>
              <div className="flex flex-wrap gap-3 relative z-10">
                {T.problema.cols.map((col, idx) => (
                  <span key={idx} className="bg-white/10 px-5 py-3 rounded-full text-sm font-medium backdrop-blur-md">
                     {col}
                  </span>
                ))}
              </div>
            </div>

            {/* Soluzione Box */}
            <div className="lg:col-span-5 bg-white p-10 lg:p-14 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between">
              <div>
                <span className="uppercase tracking-widest font-bold text-accent mb-6 block">L'Obiettivo Reale</span>
                <p className="text-2xl font-bold font-display text-primary leading-tight mb-8">{T.soluzione.text}</p>
                <div className="space-y-3 mb-8">
                  {T.soluzione.questions.slice(0,3).map((q, i) => (
                    <div key={i} className="flex gap-3 items-center font-medium text-gray-500">
                      <Target size={16} className="text-warm" /> {q}
                    </div>
                  ))}
                  <p className="text-sm font-bold text-accent pt-2">...e molte altre domande.</p>
                </div>
              </div>
              <p className="text-sm font-medium text-secondary p-4 bg-gray-50 rounded-xl border border-gray-100 italic">
                "{T.soluzione.conclusion}"
              </p>
            </div>
         </div>
      </section>

      {/* 4. PROTEZIONE & 5. OLISTICO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20">
           <div className="order-2 lg:order-1 flex flex-col justify-center">
             <span className="text-8xl font-display font-extrabold text-gray-100 mb-6 block leading-none">01</span>
             <h2 className="text-4xl font-display font-bold mb-6 text-primary">{T.olistico.title}</h2>
             <p className="text-lg leading-relaxed text-gray-600 mb-10">{T.olistico.body}</p>
             <div>
               <button className="text-accent font-bold uppercase tracking-widest inline-flex items-center gap-3 border-b-2 border-accent pb-1 hover:pr-4 transition-all">
                 {T.olistico.cta} <ArrowRightCircle size={24} />
               </button>
             </div>
           </div>
           <div className="order-1 lg:order-2 bg-secondary text-white p-12 lg:p-16 rounded-[3rem] relative shadow-2xl shadow-secondary/30">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent opacity-50 rounded-[3rem]" />
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-8 text-warm">Focus Protezione</h3>
                <p className="text-2xl leading-relaxed font-light font-display">"{T.protezione.text}"</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. OBIETTIVI & 7. SERVIZI (Masonry feeling) */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-5xl font-display font-bold text-center mb-20 text-primary">Cosa Costruiamo Insieme</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
           {/* Big Box Obiettivi */}
           <div className="md:col-span-2 bg-primary text-white p-10 lg:p-12 rounded-[2rem] flex flex-col justify-center relative overflow-hidden">
             <div className="absolute right-0 top-0 w-[500px] h-[500px] glow-spot-warm opacity-20" />
             <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-display font-bold mb-6">Obiettivi Concreti</h3>
                <p className="text-xl leading-relaxed mb-8 opacity-90">{T.obiettivi.text}</p>
                <div className="flex flex-wrap gap-3">
                  {T.obiettivi.analisi.map((item, idx) => (
                    <span key={idx} className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
             </div>
           </div>

           {/* Services Stacked */}
           <div className="flex flex-col gap-6">
              {T.servizi.list.slice(0, 3).map((srv, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm flex items-center gap-4 flex-1 border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                      <Briefcase size={20} className="text-accent" />
                    </div>
                    <p className="font-bold font-display text-lg leading-tight">{srv.title}</p>
                 </div>
              ))}
           </div>
        </div>

        <div className="flex justify-between items-center bg-white p-8 rounded-full shadow-sm border border-gray-100 px-12">
            <p className="font-bold text-xl text-primary">{T.servizi.intro}</p>
            <div className="flex gap-8">
              {T.servizi.links.map((link, idx) => (
                <a key={idx} href="#" className="font-bold text-accent uppercase text-sm tracking-widest hover:text-secondary hidden md:block">
                  {link}
                </a>
              ))}
            </div>
        </div>
      </section>

      {/* 8. INDIPENDENZA & 9. TARGET */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-accent font-bold uppercase tracking-widest mb-4 block">La Nostra Filosofia</span>
              <h2 className="text-4xl lg:text-5xl font-display font-extrabold mb-8 text-primary leading-tight">{T.indipendenza.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8 bg-gray-50 p-6 border-l-4 border-accent rounded-r-xl">
                 {T.indipendenza.text}
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
               <div className="bg-secondary text-white p-10 rounded-[2rem] shadow-xl">
                 <h3 className="font-display font-bold text-xl mb-8 uppercase tracking-widest text-warm border-b border-white/20 pb-4">Il Profilo Ideale</h3>
                 <ul className="space-y-4">
                   {T.target.perChi.map((item, i) => (
                     <li key={i} className="flex gap-3 text-[15px] font-medium opacity-90">
                       <span className="text-warm mt-1">•</span> {item}
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="bg-white border border-gray-200 p-10 rounded-[2rem] shadow-sm">
                 <h3 className="font-display font-bold text-xl mb-8 uppercase tracking-widest text-accent border-b border-gray-200 pb-4">I Tuoi Benefici</h3>
                 <div className="flex flex-col gap-4">
                   {T.target.benefici.map((item, i) => (
                     <div key={i} className="bg-gray-50 p-4 rounded-xl font-bold text-primary text-center">
                       {item}
                     </div>
                   ))}
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. TESTIMONIANZE E CHIUSURA */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto text-primary">
         <h2 className="text-5xl font-display font-bold text-center mb-24">L'Impatto Reale</h2>
         <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-32">
            {T.testimonianze.map((test, i) => (
              <div key={i} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
                <h4 className="font-display font-bold text-xl mb-5 text-accent">"{test.title}"</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">{test.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display text-sm">
                    {test.author.charAt(0)}
                  </div>
                  <p className="font-bold text-sm tracking-wide">{test.author}</p>
                </div>
              </div>
            ))}
         </div>

         <div className="bg-accent text-white p-12 lg:p-24 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full glow-spot-warm opacity-10" />
             <div className="relative z-10 max-w-4xl mx-auto">
               <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-10 leading-tight">
                 {T.chiusura.text}
               </h2>
               <button className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300">
                 {T.chiusura.cta}
               </button>
             </div>
         </div>
      </section>

    </div>
  );
}
