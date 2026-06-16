import { T } from '../data';
import { ArrowRight, CheckCircle2, Shield, Target, TrendingUp, HelpCircle, ChevronRight, FileText, Anchor, Compass } from 'lucide-react';
import VideoSection from '../components/VideoSection';

export default function Layout3() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-[#2f55f1] selection:text-white">
      
      {/* 1. HERO SECTION (Editorial Split) */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 lg:pt-16 lg:pb-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10 flex flex-col justify-center max-w-2xl">
            <span className="text-[#2f55f1] font-bold tracking-widest uppercase mb-6 text-sm flex items-center gap-3">
              <span className="w-8 h-px bg-[#2f55f1]" />
              Organizza il tuo patrimonio
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-medium leading-[1.05] tracking-tight mb-8">
              Prendi decisioni <br className="hidden lg:block"/>
              finanziarie più <span className="text-[#2f55f1] italic font-light">consapevoli</span>.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Lo <strong>Studio Giacomelli</strong> affianca privati e famiglie nella gestione di investimenti, fiscalità e previdenza, con un approccio indipendente e integrato.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-[#1a1a1a] text-white px-8 py-4 font-medium inline-flex items-center gap-3 hover:bg-[#2f55f1] transition-colors duration-300">
                {T.hero.cta.replace('.', '')} <ArrowRight size={18} />
              </button>
              <p className="text-sm text-gray-500 font-medium max-w-[200px] leading-tight">
                Perché le scelte funzionano davvero solo se coordinate.
              </p>
            </div>
          </div>
          
          <div className="relative h-[60vh] lg:h-[90vh] w-full mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-[#2f55f1]/5 mix-blend-multiply z-10" />
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600" 
              alt="Architettura moderna" 
              className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px]"
            />
            {/* Floating badge */}
            <div className="absolute bottom-10 left-[-40px] bg-white p-6 shadow-2xl z-20 max-w-xs border-l-4 border-[#2f55f1] hidden lg:block">
              <QuoteIcon />
              <p className="font-medium text-gray-800 mt-4 leading-snug">
                "La mancanza di una visione d'insieme è spesso il vero ostacolo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IL PROBLEMA (Image Text Balance) */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ufficio confusione" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#f0f0f0] -z-10" />
            </div>
            
            <div className="lg:col-span-7 lg:pl-10">
              <h2 className="text-3xl lg:text-5xl font-display font-medium mb-8 leading-tight">
                Molte persone arrivano con una sensazione precisa... <br/>
                <span className="text-[#2f55f1]">Avere fatto tante scelte in passato senza una vera direzione.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                La domanda che si pongono tutti è: <em>"Sto facendo le scelte giuste?"</em> Il problema non è la mancanza di strumenti o di opportunità. È la mancanza di una visione d'insieme. Senza un coordinamento, anche decisioni corrette possono portare a risultati inefficienti.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {T.problema.cols.map((col, idx) => (
                  <div key={idx} className="border-t border-gray-200 pt-6">
                    <span className="text-[#2f55f1] font-display font-bold text-xl mb-3 block">0{idx+1}</span>
                    <p className="text-gray-800 font-medium leading-relaxed">{col}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LA SOLUZIONE (Dark Bento) */}
      <section className="py-24 lg:py-32 bg-[#001020] text-white">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <p className="text-[#ebbab9] font-medium tracking-widest uppercase mb-6 text-sm">L'Obiettivo Reale</p>
              <h2 className="text-4xl lg:text-5xl font-display font-medium leading-tight text-white mb-6">
                Il vero obiettivo non è ottimizzare una singola scelta... <br/> È <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ebbab9] italic">mettere in relazione</span> tutte le decisioni.
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Sono tutte domande legittime. Ma prese da sole, non risolvono il problema.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { q: "Come investire meglio?", r: "Un investimento ha un impatto fiscale." },
                { q: "Quale prodotto scegliere?", r: "Una decisione previdenziale influisce sul futuro." },
                { q: "Come pagare meno tasse?", r: "Una polizza può essere utile... o inutile." },
                { q: "Il tuo patrimonio è al sicuro?", r: "Proteggere il patrimonio è il primo atto di cura." },
                { q: "Cosa lasci ai tuoi figli?", r: "Senza pianificazione, decide lo Stato." },
                { q: "Basta un testamento?", r: "Proteggere oggi evita conflitti domani." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors group">
                   <h4 className="font-semibold text-lg mb-2 text-[#ebbab9]">{item.q}</h4>
                   <p className="text-gray-400 text-sm leading-relaxed">{item.r}</p>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-white font-medium border-l-4 border-[#ebbab9] pl-6 py-2">
              Senza un approccio coordinato, il rischio è quello di costruire nel tempo un sistema disorganizzato.
            </p>
          </div>
          
          <div className="relative h-full min-h-[600px] w-full hidden lg:block overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
               alt="Team meeting" 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-70"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#001020]/50 to-[#001020]" />
          </div>
        </div>
      </section>

      {/* 4. APPROCCIO OLISTICO (Text Heavy with negative space) */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-medium mb-10 leading-tight">
              Il nostro approccio <br/>
              olistico e integrato.
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">Lo Studio Giacomelli nasce proprio per dare struttura e coerenza a queste situazioni.</p>
              <p className="mb-6">Operiamo come <strong>pianificatori e consulenti finanziari indipendenti</strong>, senza prodotti da collocare e senza commissioni legate alle scelte del cliente.</p>
              <p className="text-2xl text-black font-medium my-10 border-l-4 border-[#2f55f1] pl-6">
                In parole semplici, le decisioni vengono prese esclusivamente nel tuo interesse.
              </p>
              <p className="mb-6">Ma il vero valore non è solo l'indipendenza. È l'approccio, olistico ed integrato. Ogni attività viene inserita all'interno di una pianificazione finanziaria e patrimoniale integrata.</p>
              <p>Investimenti, fiscalità, previdenza e protezione non sono ambiti separati. Sono parti di un unico sistema. <strong>E solo se funzionano insieme, funzionano davvero.</strong></p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-12 flex flex-col justify-center">
            <Compass className="text-[#2f55f1] mb-8" size={48} />
            <h3 className="text-3xl font-display font-medium mb-6">Dare forma alle tue esigenze finanziarie, ai tuoi sogni ed alla tua vita.</h3>
            <p className="text-gray-600 mb-10 text-lg">
              Non si tratta di fare "la scelta perfetta". Si tratta di costruire un sistema che funziona nel lungo periodo. Significa eliminare inefficienze, ridurre errori e costruire una struttura sostenibile nel tempo.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {T.obiettivi.analisi.map((analisi, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gray-400" size={20} />
                  <span className="font-medium text-sm">{analisi}</span>
                </div>
              ))}
            </div>
            <button className="self-start border-b-2 border-black text-black font-semibold pb-1 hover:text-[#2f55f1] hover:border-[#2f55f1] transition-colors flex items-center gap-2">
              {T.obiettivi.cta.replace('.','')} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. SERVIZI (Image Grid) */}
      <section className="py-24 lg:py-32 bg-white border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-display font-medium mb-6">I servizi offerti</h2>
              <p className="text-xl text-gray-500">Lo Studio Giacomelli rappresenta un punto di riferimento unico per la gestione del patrimonio.</p>
            </div>
            <div className="flex gap-6">
              <button className="text-sm font-semibold border border-gray-200 px-6 py-3 hover:bg-gray-50 transition">
                Privati
              </button>
              <button className="text-sm font-semibold border border-gray-200 px-6 py-3 hover:bg-gray-50 transition">
                Aziende
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
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
              <div key={idx} className="group cursor-pointer">
                <div className="h-[200px] mb-6 overflow-hidden bg-gray-100">
                   <img 
                      src={`https://images.unsplash.com/photo-${imgs[idx]}?auto=format&fit=crop&q=80&w=600`}
                      alt={srv.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 group-hover:scale-105"
                   />
                </div>
                <h4 className="font-display font-bold text-xl mb-3 group-hover:text-[#2f55f1] transition-colors">{srv.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <VideoSection />

      {/* 6. INDIPENDENZA */}
      <section className="py-24 lg:py-32 bg-[#001020] text-white">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl lg:text-5xl font-display font-medium mb-8 leading-tight">
               Perchè scegliere professionisti indipendenti?
            </h2>
            <p className="text-xl text-gray-300 mb-8 opacity-80">
              Nel sistema tradizionale, spesso chi ti consiglia ha anche interesse a venderti qualcosa. Questo crea un conflitto che, anche quando non è evidente, influisce sulle scelte.
            </p>
            <p className="text-xl font-medium text-white mb-10">
              Lo Studio Giacomelli lavora in modo diverso. L’unico obiettivo è costruire soluzioni utili per te.
            </p>
            <ul className="space-y-4 mb-10">
              {T.indipendenza.list.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <span className="w-2 h-2 rounded-full bg-[#ebbab9]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 bg-white/5 p-10 lg:p-16 border border-white/10">
             <h3 className="text-2xl font-medium text-[#ebbab9] mb-6">L'Integrazione Completa</h3>
             <p className="text-lg leading-relaxed text-gray-300">
               A questo si aggiunge un altro elemento distintivo: l'integrazione tra consulenza finanziaria e competenze fiscali, giuridiche e previdenziali — le quattro dimensioni di una pianificazione patrimoniale davvero completa. Questo permette di valutare ogni decisione in modo più completo.
             </p>
          </div>
        </div>
      </section>

      {/* 7. TARGET E BENEFICI (Split Layout) */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-[#2f55f1] font-semibold mb-4 uppercase tracking-widest text-sm">Il Target</p>
            <h2 className="text-3xl lg:text-4xl font-display font-medium mb-6">
              Non è necessario avere grandi patrimoni. <br/>È necessario voler gestire meglio quello che si ha.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h3 className="text-2xl font-bold mb-8 border-b-2 border-black pb-4">Il nostro approccio è perfetto per chi:</h3>
              <ul className="space-y-6">
                {T.target.perChi.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Target className="text-[#2f55f1] shrink-0 mt-1" size={24} />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-[#2f55f1]">I Benefici Concreti</h3>
              <p className="text-xl mb-8">
                L’obiettivo non è solo migliorare i numeri. <br/>
                <strong>È migliorare la tua capacità di prendere decisioni.</strong>
              </p>
              <div className="space-y-4">
                {T.target.benefici.map((benefit, i) => (
                  <div key={i} className="bg-gray-50 flex items-center gap-4 p-4">
                    <TrendingUp className="text-gray-400" size={20} />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-500 italic">
                 Perché quando il patrimonio è organizzato, anche le decisioni diventano più semplici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIANZE (Clean Masonry / Grids) */}
      <section className="py-24 lg:py-32 bg-white">
         <div className="max-w-[1440px] mx-auto px-6">
            <div className="mb-20">
               <span className="text-gray-400 font-bold tracking-widest uppercase mb-4 block">Testimonianze</span>
               <h2 className="text-4xl lg:text-5xl font-display font-medium">Storie dei nostri clienti</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              {T.testimonianze.map((test, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-6 flex gap-1">
                    {[1,2,3,4,5].map(star => <StarIcon key={star} />)}
                  </div>
                  <h4 className="font-bold text-xl mb-6 leading-snug">"{test.title}"</h4>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {test.quote}
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <p className="font-semibold text-black uppercase tracking-wider text-sm whitespace-pre-line">{test.author}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 9. CHIUSURA CTA (Hero Image) */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001020]/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-white mb-8">
            Capiamo insieme se stai facendo le scelte giuste.
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Il primo colloquio conoscitivo è un momento di analisi e dialogo, senza obblighi e senza pressioni. Un modo semplice per iniziare a mettere ordine.
          </p>
          <button className="bg-white text-black px-10 py-5 font-bold hover:bg-[#2f55f1] hover:text-white transition-colors duration-300 text-lg flex items-center gap-3 mx-auto">
            {T.chiusura.cta.replace('.','')} <ArrowRight size={20} />
          </button>
        </div>
      </section>

    </div>
  );
}

function QuoteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 11L8 15H11V17H5V11L7 7H10L10 11ZM19 11L17 15H20V17H14V11L16 7H19L19 11Z" fill="#2f55f1"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#001020" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#001020"/>
    </svg>
  )
}
