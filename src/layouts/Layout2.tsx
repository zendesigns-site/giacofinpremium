import { T } from '../data';
import { ArrowRight, Star, Quote } from 'lucide-react';
import VideoSection from '../components/VideoSection';

export default function Layout2() {
  return (
    <div className="min-h-screen bg-white text-primary font-sans overflow-hidden">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-white overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay grayscale" />
        
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/60 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] bg-warm/10 rounded-full blur-[80px]" />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col items-center text-center">
          <div className="pt-32 pb-20 flex flex-col items-center">
            <span className="inline-block px-6 py-2 rounded-full border border-accent/40 bg-accent/10 text-accent uppercase tracking-widest font-bold mb-6 text-sm backdrop-blur-md">
              Organizza il tuo patrimonio.
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-medium leading-[1.2] mb-8 text-white opacity-90 max-w-3xl">
              Prendi decisioni finanziarie più consapevoli e vincenti.
            </h2>
            <h1 className="text-6xl lg:text-[6.5rem] font-display font-bold leading-[1.05] tracking-tight mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-sm">
              Studio Giacomelli
            </h1>
            <div className="text-xl font-light opacity-90 leading-relaxed mb-12 space-y-4 max-w-3xl">
              <p>Lo Studio Giacomelli affianca privati e famiglie nella gestione di investimenti, fiscalità e previdenza, con un approccio indipendente e integrato.</p>
              <p className="font-medium text-warm">Perché le scelte finanziarie funzionano davvero solo quando sono coordinate tra loro.</p>
            </div>
            <button className="bg-accent text-white shadow-[0_0_40px_rgba(47,85,241,0.4)] px-12 py-5 rounded-full font-bold inline-flex items-center gap-3 text-lg hover:scale-105 transition-all duration-300 border border-white/20 hover:bg-white hover:text-primary">
              {T.hero.cta} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2 & 3. PROBLEMA E SOLUZIONE */}
      <section className="py-24 relative">
        <div className="absolute left-0 bottom-0 w-[800px] h-[800px] glow-spot-blue opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl font-display font-bold mb-6 text-primary">Il Problema</h2>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
              alt="Architettura direzionale" 
              className="w-full h-48 object-cover rounded-3xl mb-8 shadow-lg"
            />
            <p className="text-xl leading-relaxed mb-8 text-primary">{T.problema.text}</p>
            <div className="flex flex-col gap-4">
              {T.problema.cols.map((col, idx) => (
                <div key={idx} className="bg-secondary text-white p-6 rounded-xl border-l-4 border-l-warm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
                  <p className="relative z-10 text-[15px] font-medium opacity-90">{col}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 bg-secondary text-white p-10 lg:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex flex-col justify-center">
             <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/30 rounded-full blur-[80px]" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm/10 rounded-full blur-[60px]" />
             
             <h2 className="text-4xl font-display font-bold mb-6 text-white relative z-10">La Soluzione</h2>
             <p className="text-2xl font-display font-medium mb-12 text-warm relative z-10">"{T.soluzione.text}"</p>
             <div className="grid sm:grid-cols-2 gap-4 mb-10 relative z-10">
                {T.soluzione.questions.map((q, i) => (
                  <span key={i} className="px-5 py-3 rounded-xl border border-white/20 text-[15px] font-medium bg-white/5 flex items-center">
                    {q}
                  </span>
                ))}
             </div>
             <p className="text-lg opacity-80 italic border-l border-white/20 pl-6 relative z-10">{T.soluzione.conclusion}</p>
          </div>
        </div>
      </section>

      {/* 4. PROTEZIONE & 5. OLISTICO */}
      <section className="py-24 relative bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 text-primary">{T.olistico.title}</h2>
              <div className="text-lg leading-relaxed mb-10 text-primary/80 space-y-6">
                 <p>
                    Lo Studio Giacomelli nasce proprio per dare struttura e coerenza a queste situazioni. 
                    Operiamo come <strong className="text-primary font-semibold">pianificatori e consulenti finanziari indipendenti</strong>, 
                    senza prodotti da collocare e senza commissioni legate alle scelte del cliente.
                 </p>
                 
                 <div className="bg-white border-l-4 border-accent p-6 rounded-r-2xl shadow-sm">
                    <p className="text-xl font-medium text-accent">
                       In parole semplici, le decisioni vengono prese esclusivamente nel tuo interesse.
                    </p>
                 </div>
                 
                 <div className="space-y-4">
                    <p>
                      Ma il vero valore non è solo l’indipendenza. <br/>
                      È l’approccio, <strong className="text-primary font-semibold">olistico ed integrato</strong>.
                    </p>
                    <p>Ogni attività viene inserita all’interno di una pianificazione finanziaria e patrimoniale integrata.</p>
                 </div>
                 
                 <div className="mt-8 space-y-2">
                    <p className="text-[17px] font-medium text-primary/90 leading-relaxed">
                       Investimenti, fiscalità, previdenza e protezione non sono ambiti separati. Sono parti di un unico sistema.
                    </p>
                    <p className="text-2xl font-bold font-display text-accent leading-snug">
                       E solo se funzionano insieme, funzionano davvero.
                    </p>
                 </div>
              </div>
              <button className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition duration-300">
                {T.olistico.cta}
              </button>
            </div>
            <div className="relative order-1 lg:order-2 flex flex-col gap-6 h-full">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Finanza e metodo olistico" 
                className="w-full h-64 lg:h-auto lg:flex-1 object-cover rounded-[3rem] shadow-xl"
              />
              <div className="bg-secondary text-white p-10 lg:p-12 rounded-[3rem] relative z-10 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/40 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-warm/20 rounded-full blur-[60px]" />
                <Star className="text-warm mb-8 relative z-10" size={48} />
                <h3 className="font-display text-3xl font-bold mb-6 relative z-10">Focus Protezione</h3>
                <div className="relative z-10 space-y-6">
                  <p className="text-xl leading-relaxed opacity-90">
                    {T.protezione.text.replace(" Senza un approccio coordinato, il rischio è quello di costruire nel tempo un sistema disorganizzato.", "")}
                  </p>
                  <div className="bg-white/10 border-l-4 border-warm p-6 rounded-r-2xl backdrop-blur-md">
                    <p className="text-xl font-bold text-white leading-snug">
                      Senza un approccio coordinato, il rischio è quello di costruire nel tempo un sistema disorganizzato.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 6. OBIETTIVI CONCRETI & 7. SERVIZI */}
      <section className="py-24 relative overflow-hidden bg-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 mb-32 items-center">
                <div className="lg:col-span-4">
                    <h2 className="text-5xl font-display font-bold mb-6 text-primary">Obiettivi</h2>
                    <div className="w-24 h-1 bg-accent mb-6" />
                    <p className="text-xl opacity-80 text-primary mb-6">{T.obiettivi.text}</p>
                    <button className="hidden lg:inline-flex bg-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition duration-300">
                      {T.obiettivi.cta}
                    </button>
                </div>
                <div className="lg:col-span-8">
                   <h3 className="font-medium text-2xl text-accent mb-6">{T.obiettivi.analisiIntro}</h3>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {T.obiettivi.analisi.map((item, idx) => (
                         <div key={idx} className="bg-primary text-white p-8 rounded-2xl flex flex-col justify-center min-h-[140px] group hover:border-accent/60 transition relative overflow-hidden shadow-xl">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                            <span className="text-5xl font-display font-bold text-white/5 absolute bottom-4 right-4 z-0">0{idx+1}</span>
                            <span className="text-lg font-medium relative z-10 pr-6">{item}</span>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="lg:hidden col-span-12">
                   <button className="w-full bg-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition duration-300">
                     {T.obiettivi.cta}
                   </button>
                </div>
            </div>

            <div className="mb-16 max-w-3xl">
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-primary">I Servizi Offerti</h2>
                <p className="text-xl text-primary">{T.servizi.intro}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {T.servizi.list.map((srv, idx) => {
                 const imgs = [
                   "1454165804606-c3d57bc86b40",
                   "1611974789855-9c2a0a7236a3",
                   "1532619675605-1ede6c2ed2b0",
                   "1505664115599-2826c71be399",
                   "1554224155-8d04cb21cd6c",
                   "1511895426328-dc8714191300"
                 ];
                 return (
                  <div key={idx} className="bg-secondary text-white rounded-3xl border-t border-t-white/10 relative overflow-hidden shadow-xl flex flex-col group">
                     <div className="h-48 overflow-hidden relative">
                       <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition duration-500 z-10" />
                       <img 
                          src={`https://images.unsplash.com/photo-${imgs[idx]}?auto=format&fit=crop&q=80&w=600`}
                          alt={srv.title}
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 group-hover:scale-105"
                       />
                     </div>
                     <div className="p-8 flex flex-col flex-grow relative z-20">
                       <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-[40px] pointer-events-none" />
                       <h4 className="font-display font-bold text-xl mb-4">{srv.title}</h4>
                       <p className="text-sm opacity-80 mb-6 flex-grow">{srv.desc}</p>
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-warm mt-auto group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                         <ArrowRight size={20} />
                       </div>
                     </div>
                  </div>
               )})}
            </div>
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              {T.servizi.links.map((link, idx) => (
                <span key={idx} className="uppercase tracking-wider text-sm font-bold text-accent cursor-pointer hover:text-primary transition border-b-2 border-transparent hover:border-accent pb-1">
                  {link}
                </span>
              ))}
            </div>
         </div>
      </section>

      {/* VIDEO */}
      <VideoSection />

      {/* 8. INDIPENDENZA */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 text-primary leading-tight">
              {T.indipendenza.title}
            </h2>
            <div className="w-24 h-1 bg-accent mb-8" />
            <p className="text-xl leading-relaxed text-primary/80 mb-8">
              {T.indipendenza.text1}
            </p>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Professionista indipendente" 
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div className="bg-secondary text-white p-8 lg:p-10 rounded-3xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-[40px]" />
              <ul className="space-y-6 relative z-10">
                {T.indipendenza.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-3 h-3 rounded-full bg-warm mt-2 shrink-0 shadow-[0_0_10px_rgba(245,166,35,0.5)]" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-primary/10 p-8 lg:p-10 rounded-3xl shadow-sm text-lg leading-relaxed text-primary/80 relative">
               <div className="absolute top-6 left-0 w-1 h-12 bg-accent rounded-r-md" />
               <p>{T.indipendenza.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TARGET & BENEFICI */}
      <section className="py-24 bg-primary text-white mx-4 lg:mx-8 mb-24 rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden shadow-2xl">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] glow-spot-blue opacity-30" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] glow-spot-warm opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-24">
          
          {/* Target */}
          <div>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-white/80">
                {T.target.introBox1}
              </h2>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">
                {T.target.introBox2}
              </h2>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
              <h3 className="text-accent uppercase tracking-wider font-bold mb-10 text-center lg:text-left text-sm">
                {T.target.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {T.target.perChi.map((item, i) => (
                   <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-colors">
                     <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                     <p className="font-medium text-[15px] leading-relaxed text-white/90">{item}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Benefici */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-display font-medium text-white/70">
                {T.target.obiettivoSubtitle}
              </h3>
              <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
                {T.target.obiettivoTitle}
              </h2>
              <div className="w-20 h-1 bg-warm rounded-full" />
              <p className="text-xl font-light opacity-90 leading-relaxed pt-2">
                {T.target.obiettivoTesto}
              </p>
            </div>
            
            <div className="lg:col-span-6 lg:pl-10">
               <div className="relative">
                 {/* Spline luminosa verticale passante per i nodi */}
                 <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-accent/80 to-transparent blur-[2px]" />
                 <div className="absolute left-[24px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                 
                 <div className="space-y-4 relative z-10">
                    {T.target.benefici.map((item, i) => (
                      <div key={i} className="flex items-center gap-5 lg:gap-8 group">
                        
                        {/* Nodo centrale timeline */}
                        <div className="w-12 h-12 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center shrink-0 z-10 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(47,85,241,0.5)] transition-all duration-500 relative">
                           <div className="w-2.5 h-2.5 rounded-full bg-white/30 group-hover:bg-warm transition-colors duration-500 shadow-[0_0_10px_rgba(245,166,35,0)] group-hover:shadow-[0_0_10px_rgba(245,166,35,0.8)]" />
                        </div>
                        
                        {/* Card Premium */}
                        <div className="flex-grow bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md group-hover:bg-white/10 group-hover:border-accent/40 transition-all duration-500 relative overflow-hidden flex items-center gap-5 cursor-default translate-x-0 group-hover:translate-x-2">
                           <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-accent/0 group-hover:bg-accent/20 rounded-full blur-2xl transition-colors duration-700 pointer-events-none" />
                           
                           <span className="text-warm/50 font-display font-bold text-xl group-hover:text-warm transition-colors duration-500 relative z-10">
                             0{i + 1}
                           </span>
                           <span className="font-medium text-[16px] lg:text-[17px] text-white/80 group-hover:text-white transition-colors duration-500 relative z-10">
                             {item}
                           </span>
                        </div>
                        
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 10. TESTIMONIANZE E CHIUSURA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-5xl font-display font-bold text-center mb-20 text-primary">Storie di chi si è affidato a noi</h2>
            <div className="grid lg:grid-cols-3 gap-8 mb-32">
                {T.testimonianze.map((test, i) => (
                   <div key={i} className="bg-secondary text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-xl flex flex-col">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-[50px]" />
                     <Quote className="text-white/10 absolute top-8 right-8" size={60} />
                     <h4 className="font-display font-bold text-xl mb-8 text-warm relative z-10 leading-snug">{test.title}</h4>
                     <p className="text-white/80 mb-10 font-light leading-relaxed relative z-10 flex-grow">{test.quote}</p>
                     <p className="font-bold text-accent whitespace-pre-line text-sm relative z-10 uppercase tracking-wider">{test.author}</p>
                   </div>
                ))}
            </div>

            <div className="bg-primary text-white rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl">
               <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/40 rounded-full blur-[120px]" />
               
               <div className="relative z-10 max-w-4xl">
                  <span className="text-accent uppercase tracking-wider font-bold text-sm mb-6 block">Fai il tuo primo passo, senza impegno</span>
                  <h2 className="text-4xl lg:text-6xl font-display font-bold mb-10 leading-tight">
                    Capiamo insieme se stai facendo le scelte giuste.
                  </h2>
                  
                  <div className="text-xl text-white/80 leading-relaxed mb-12 font-light space-y-6 max-w-2xl">
                    <p>
                      Non serve partire da decisioni complesse. 
                      Spesso basta un primo confronto per fare chiarezza sulla tua situazione, individuare eventuali criticità e capire se c’è spazio per migliorare.
                    </p>
                    <p>
                      Il primo colloquio conoscitivo è un momento di analisi e dialogo, senza obblighi e senza pressioni. 
                      Un modo semplice per iniziare a mettere ordine. 
                    </p>
                    <p className="font-medium text-white">
                      Affidati allo Studio Giacomelli per guardare al tuo futuro con maggiore chiarezza.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    <button className="bg-accent text-white px-8 py-5 rounded-full font-bold hover:opacity-90 transition duration-300 text-lg flex items-center gap-2">
                      {T.chiusura.cta.replace('.','')} <ArrowRight size={20} />
                    </button>
                    <div className="text-sm text-white/60 leading-snug font-medium">
                      Senza<br/>impegno •<br/>30 minuti
                    </div>
                  </div>
               </div>
            </div>
        </div>
      </section>

    </div>
  );
}
