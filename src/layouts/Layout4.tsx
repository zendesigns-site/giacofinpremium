import { T } from '../data';
import { Target, ChevronRight, ShieldCheck, Quote } from 'lucide-react';

export default function Layout4() {
  return (
    <div className="min-h-screen bg-white text-primary font-sans">
      {/* 1. HERO - Geometric */}
      <section className="min-h-screen grid lg:grid-cols-2 relative">
         <div className="absolute top-0 right-0 w-1/4 h-screen bg-secondary/5" />
         
         <div className="pt-40 px-6 lg:px-16 flex flex-col justify-center">
            <h1 className="text-5xl lg:text-[5.5rem] font-display font-medium leading-[0.95] mb-8 text-primary">
               Organizza <br/> il patrimonio.
            </h1>
            <div className="h-1 w-20 bg-accent mb-8" />
            <button className="bg-primary text-white w-max px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-accent transition duration-300">
               {T.hero.cta}
            </button>
         </div>

         <div className="bg-primary text-white pt-40 px-6 lg:px-16 flex flex-col justify-center relative">
            <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 blur-[80px]" />
            <h3 className="uppercase tracking-widest text-sm text-warm mb-6">Pianificazione Integrata</h3>
            <p className="text-2xl lg:text-3xl font-display font-light leading-relaxed mb-6">
               Prendi decisioni finanziarie più consapevoli e vincenti.
            </p>
            <p className="opacity-80 text-lg leading-relaxed max-w-lg mb-10">
               {T.hero.subtitle}
            </p>
         </div>
      </section>

      {/* 2 & 3. Problema e Soluzione */}
      <section className="border-b border-gray-100">
         <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-20 border-r border-gray-100">
               <span className="text-5xl font-display text-gray-100 block mb-4">01</span>
               <h2 className="text-3xl font-display font-medium mb-6">Il Problema</h2>
               <p className="text-xl opacity-80 leading-relaxed mb-10">{T.problema.text}</p>
               <div className="space-y-4">
                  {T.problema.cols.map((col, idx) => (
                    <div key={idx} className="bg-gray-50 px-6 py-4 border-l-2 border-accent text-lg font-medium">
                       {col}
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-10 lg:p-20 bg-gray-50/50">
               <span className="text-5xl font-display text-gray-200 block mb-4">02</span>
               <h2 className="text-3xl font-display font-medium mb-6">La Soluzione</h2>
               <p className="text-2xl text-accent font-medium leading-relaxed mb-10">"{T.soluzione.text}"</p>
               
               <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                  {T.soluzione.questions.map((q, i) => (
                    <div key={i} className="text-gray-600 font-medium text-sm flex items-start gap-2 border-t border-gray-200 pt-3">
                       <ChevronRight size={16} className="text-warm shrink-0 mt-0.5" />
                       {q}
                    </div>
                  ))}
               </div>
               
               <p className="italic text-gray-500 bg-white p-6 border border-gray-100">{T.soluzione.conclusion}</p>
            </div>
         </div>
      </section>

      {/* 4 & 5. Focus & Olistico */}
      <section className="bg-primary text-white">
         <div className="grid lg:grid-cols-2">
            
            <div className="p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 blur-[100px]" />
               <div className="relative z-10">
                  <span className="text-5xl font-display text-white/5 block mb-4">03</span>
                  <h2 className="text-4xl font-display font-medium mb-8">Focus Protezione</h2>
                  <p className="text-2xl font-light leading-relaxed mb-8">{T.protezione.text}</p>
               </div>
            </div>

            <div className="p-10 lg:p-20 bg-secondary border-l border-white/10">
               <span className="text-5xl font-display text-white/5 block mb-4">04</span>
               <h2 className="text-4xl font-display font-medium mb-8">{T.olistico.title}</h2>
               <p className="text-lg opacity-80 leading-relaxed mb-10">{T.olistico.body}</p>
               <button className="border border-white/20 hover:bg-white hover:text-primary px-8 py-4 uppercase tracking-widest text-xs font-bold transition">
                  {T.olistico.cta}
               </button>
            </div>
            
         </div>
      </section>

      {/* 6 & 7. Obiettivi & Servizi */}
      <section>
         <div className="grid lg:grid-cols-12 min-h-screen">
            <div className="lg:col-span-5 p-10 lg:p-20 border-r border-gray-100 flex flex-col justify-center bg-gray-50/50">
               <h2 className="text-4xl font-display font-medium mb-6">Obiettivi Concreti</h2>
               <p className="text-xl text-gray-600 leading-relaxed mb-10">{T.obiettivi.text}</p>
               <div className="flex flex-col gap-0 border-y border-gray-200">
                 {T.obiettivi.analisi.map((item, idx) => (
                   <div key={idx} className="flex justify-between items-center py-6 border-b border-gray-200 last:border-b-0">
                      <span className="font-display font-bold text-accent text-lg">0{idx+1}</span>
                      <span className="text-lg font-medium">{item}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-7 p-10 lg:p-20 flex flex-col justify-center">
               <h2 className="text-4xl font-display font-medium mb-6"> {T.servizi.intro} </h2>
               
               <div className="grid grid-cols-2 gap-8 my-16">
                  {T.servizi.list.map((srv, idx) => (
                    <div key={idx} className="group">
                       <ShieldCheck size={24} className="text-warm mb-4 group-hover:text-accent transition" />
                       <h3 className="font-display font-bold text-xl">{srv.title}</h3>
                    </div>
                  ))}
               </div>

               <div className="flex flex-wrap gap-6 pt-10 border-t border-gray-100">
                  {T.servizi.links.map((link, idx) => (
                     <a key={idx} href="#" className="uppercase tracking-widest text-sm font-bold text-accent hover:text-primary transition underline decoration-accent/30 decoration-2 underline-offset-4">
                        {link}
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 8, 9, 10. Indipendenza & Target & Testimonianze */}
      <section className="bg-primary text-white border-t border-primary overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
            
            <div className="grid lg:grid-cols-2 gap-20 mb-32">
               <div>
                  <h2 className="text-4xl font-display font-medium mb-8 leading-tight">{T.indipendenza.title}</h2>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-md">{T.indipendenza.text}</p>
               </div>
               
               <div className="bg-white/5 border border-white/10 p-10">
                  <h3 className="font-display font-medium text-2xl mb-8 border-b border-light/10 pb-4 text-warm">Profilo ideale e Benefici</h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                     <ul className="space-y-4">
                        {T.target.perChi.slice(0, 3).map((item, i) => (
                           <li key={i} className="text-sm border-l-2 border-accent pl-3">{item}</li>
                        ))}
                     </ul>
                     <ul className="space-y-4">
                        {T.target.benefici.slice(0, 3).map((item, i) => (
                           <li key={`ben-${i}`} className="text-sm border-l-2 border-warm pl-3">{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
            
            <div className="border-t border-white/10 pt-24">
               <h2 className="text-4xl font-display font-medium mb-16 text-center">Esperienze Dirette</h2>
               
               <div className="grid lg:grid-cols-3 gap-8">
                  {T.testimonianze.map((test, i) => (
                     <div key={i} className="bg-secondary/40 p-8 hover:bg-secondary transition border border-transparent hover:border-accent/40">
                        <Quote size={24} className="text-warm mb-6" />
                        <h4 className="font-display font-medium text-lg mb-6 leading-snug">"{test.title}"</h4>
                        <p className="text-sm font-light text-gray-400 mb-8 leading-relaxed line-clamp-4">{test.quote}</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent">{test.author}</p>
                     </div>
                  ))}
               </div>
            </div>

            <div className="mt-32 text-center max-w-3xl mx-auto">
               <h2 className="text-5xl font-display font-medium mb-10">{T.chiusura.text}</h2>
               <button className="bg-white text-primary px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-warm transition">
                  {T.chiusura.cta}
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
