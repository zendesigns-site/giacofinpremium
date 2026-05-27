import { T } from '../data';
import { Sparkles, ArrowRight, Shield, Quote, TrendingUp } from 'lucide-react';

export default function Layout5() {
  return (
    <div className="min-h-screen bg-primary text-white font-sans overflow-x-hidden">
      
      {/* 1. HERO - Flowing Gradients */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
         {/* Deep layered backgrounds */}
         <div className="absolute inset-0 bg-primary z-0" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[140px] z-0" />
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/80 rounded-full blur-[100px] z-0" />
         
         <div className="relative z-10 max-w-5xl text-center px-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 text-warm mb-8 uppercase tracking-widest text-xs font-bold">
               <Sparkles size={14} /> Wealth / Management
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-tight mb-8">
               Decisioni vincenti per il <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-warm">tuo patrimonio.</span>
            </h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto leading-relaxed mb-12">
               {T.hero.subtitle}
            </p>
            
            <button className="glass-light !bg-white/10 !border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:!bg-white/20 hover:scale-105 transition-all inline-flex items-center gap-3">
               {T.hero.cta} <ArrowRight size={20} />
            </button>
         </div>
      </section>

      {/* Floating Transition Block: Problema & Soluzione */}
      <section className="relative z-20 pb-32 -mt-20">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="glass-dark p-12 lg:p-20 rounded-[3rem] text-center border-white/10 shadow-2xl relative overflow-hidden">
               <div className="absolute -top-40 -right-40 w-80 h-80 bg-warm/20 blur-[100px]" />
               
               <h2 className="text-4xl font-display font-bold mb-8">{T.problema.text}</h2>
               
               <div className="flex flex-wrap justify-center gap-4 mb-20 text-sm md:text-base">
                  {T.problema.cols.map((col, idx) => (
                    <div key={idx} className="bg-primary/50 border border-white/10 px-6 py-3 rounded-full text-warm">
                       {col}
                    </div>
                  ))}
               </div>
               
               <div className="max-w-4xl mx-auto">
                 <h2 className="text-3xl font-display font-bold text-accent mb-6 leading-snug">"{T.soluzione.text}"</h2>
                 <p className="text-lg opacity-80 italic mb-10">... {T.soluzione.conclusion}</p>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                   {T.soluzione.questions.map((q, i) => (
                     <div key={i} className="bg-white/5 p-4 rounded-xl text-sm text-gray-300">
                        {q}
                     </div>
                   ))}
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4 & 5. Olistico & Protezione - Left/Right alternating */}
      <section className="py-24 relative">
         <div className="absolute left-[-200px] top-1/4 w-[600px] h-[600px] bg-secondary/80 blur-[120px] rounded-full" />
         
         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10 mb-32">
            <div className="glass-dark aspect-square rounded-[3rem] p-10 flex flex-col justify-center items-center text-center order-2 lg:order-1 border-accent/20">
               <Shield size={64} className="text-warm mb-8" />
               <h3 className="text-3xl font-display font-bold mb-6">Proteggere il Patrimonio</h3>
               <p className="text-lg opacity-80 leading-relaxed">{T.protezione.text}</p>
            </div>
            
            <div className="order-1 lg:order-2">
               <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">La Nostra Filosofia</span>
               <h2 className="text-5xl font-display font-bold mb-8">{T.olistico.title}</h2>
               <p className="text-xl leading-relaxed opacity-80 mb-10">{T.olistico.body}</p>
               <button className="bg-white text-primary px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-warm transition">
                  {T.olistico.cta}
               </button>
            </div>
         </div>
      </section>

      {/* 6 & 7. Obiettivi & Servizi - Circular Flow */}
      <section className="py-24 bg-[#0f1b64]/30 relative rounded-t-[4rem] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-24 relative z-10">
           <h2 className="text-5xl font-display font-bold mb-6">Obiettivi Concreti</h2>
           <p className="text-xl opacity-80 max-w-3xl mx-auto mb-16">{T.obiettivi.text}</p>
           
           <div className="flex flex-wrap justify-center gap-6">
              {T.obiettivi.analisi.map((item, idx) => (
                <div key={idx} className="bg-primary px-8 py-4 rounded-full border border-white/10 font-bold text-warm shadow-xl">
                   {item}
                </div>
              ))}
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
           <div className="glass-dark p-12 lg:p-20 rounded-[3rem] border border-accent/30 text-center">
              <h2 className="text-4xl font-display font-bold mb-16">{T.servizi.intro}</h2>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                 {T.servizi.list.map((srv, idx) => (
                   <div key={idx} className="flex flex-col items-center group">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition shrink-0 border border-accent/50">
                        <TrendingUp size={24} className="text-warm group-hover:text-white transition" />
                      </div>
                      <h3 className="font-display font-bold text-lg">{srv.title}</h3>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 8 & 9. Indipendenza & Target */}
      <section className="py-32 relative text-center">
         <div className="absolute w-full h-[500px] top-0 left-0 bg-gradient-to-b from-[#0f1b64]/30 to-transparent" />
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-display font-bold mb-10 text-warm">{T.indipendenza.title}</h2>
            <p className="text-2xl leading-relaxed opacity-90 mb-20">"{T.indipendenza.text}"</p>
         </div>

         <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-center gap-8 relative z-10">
            <div className="glass-dark bg-secondary p-10 rounded-[2rem] w-full max-w-md text-left">
               <h3 className="text-xl uppercase tracking-widest text-accent font-bold mb-8">Per Chi</h3>
               <ul className="space-y-4">
                  {T.target.perChi.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm opacity-90">
                      <ArrowRight size={18} className="text-warm shrink-0" /> {item}
                    </li>
                  ))}
               </ul>
            </div>
            
            <div className="bg-white text-primary p-10 rounded-[2rem] w-full max-w-md text-left shadow-2xl shadow-white/5">
               <h3 className="text-xl uppercase tracking-widest text-accent font-bold mb-8">Benefici</h3>
               <ul className="space-y-4">
                  {T.target.benefici.map((item, i) => (
                    <li key={i} className="flex gap-3 font-bold">
                      <span className="text-accent">•</span> {item}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* 10. Testimonianze & Chiusura */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
         <div className="absolute right-[-200px] bottom-0 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full" />
         <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-center mb-20">Dicono di Noi</h2>
            
            <div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x">
               {T.testimonianze.map((test, i) => (
                 <div key={i} className="min-w-[320px] md:min-w-[400px] glass-dark p-10 rounded-3xl snap-center shrink-0 border border-white/10 relative mt-8">
                    <div className="absolute -top-6 left-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-primary">
                       <Quote size={20} className="text-white" />
                    </div>
                    <h4 className="font-display font-bold text-lg mb-4 text-warm mt-4">"{test.title}"</h4>
                    <p className="opacity-70 text-sm leading-relaxed mb-8">{test.quote}</p>
                    <p className="font-bold text-accent uppercase tracking-widest text-xs border-t border-white/10 pt-4">{test.author}</p>
                 </div>
               ))}
            </div>

            <div className="glass-light !bg-white p-12 lg:p-24 rounded-[3rem] text-center max-w-5xl mx-auto mt-20 shadow-[0_0_80px_rgba(47,85,241,0.2)] text-primary relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px]" />
               <h2 className="text-4xl lg:text-5xl font-display font-extrabold mb-8 relative z-10 leading-tight">
                  {T.chiusura.text}
               </h2>
               <button className="bg-accent text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all relative z-10 shadow-xl shadow-accent/20">
                  {T.chiusura.cta}
               </button>
            </div>
         </div>
      </section>
      
    </div>
  );
}
