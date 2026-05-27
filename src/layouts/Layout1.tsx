import { T } from '../data';
import { ChevronRight, Shield, Target, TrendingUp, CheckCircle, FileText, Briefcase, Anchor } from 'lucide-react';

export default function Layout1() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="w-[800px] h-[800px] glow-spot-blue top-[-400px] right-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-primary">
              {T.hero.title}
            </h1>
            <p className="text-lg opacity-80 mb-10 max-w-xl text-primary font-medium">
              {T.hero.subtitle}
            </p>
            <button className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 inline-flex items-center gap-2 transition duration-300 shadow-lg shadow-accent/30">
              {T.hero.cta} <ChevronRight size={20} />
            </button>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="glass-dark aspect-square rounded-[3rem] p-8 flex flex-col justify-end relative shadow-2xl overflow-hidden group">
              <div className="w-full h-full glow-spot-warm absolute top-10 right-10 opacity-50 group-hover:opacity-100 transition duration-700" />
              <div className="glass-light p-6 rounded-2xl mb-4 relative z-10">
                <Shield className="text-accent mb-4" size={32} />
                <h3 className="font-display font-bold text-xl text-primary">{T.protezione.text.slice(0, 70)}...</h3>
              </div>
              <div className="glass-light p-6 rounded-2xl relative z-10 translate-x-8">
                <Target className="text-accent mb-4" size={32} />
                <h3 className="font-display font-bold text-xl text-primary">{T.olistico.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IL PROBLEMA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="w-[600px] h-[600px] glow-spot-blue bottom-[-300px] left-[-200px] opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">01. Il Problema</span>
            <h2 className="text-3xl lg:text-4xl font-display font-medium leading-relaxed">{T.problema.text}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {T.problema.cols.map((col, idx) => (
              <div key={idx} className="glass-dark p-8 rounded-2xl border-t-4 border-t-accent">
                <p className="font-display font-semibold text-xl">{col}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LA SOLUZIONE & 4. FOCUS PROTEZIONE */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">02. La Soluzione</span>
              <p className="text-2xl font-medium text-primary mb-8">{T.soluzione.text}</p>
              <p className="text-lg opacity-80 mb-8">{T.soluzione.conclusion}</p>
              <div className="grid grid-cols-2 gap-4">
                {T.soluzione.questions.map((q, i) => (
                  <div key={i} className="bg-secondary/5 p-4 rounded-xl text-primary font-medium flex items-start gap-3">
                    <span className="text-warm mt-1"><CheckCircle size={18} /></span>
                    <span className="text-sm">{q}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-light p-10 rounded-3xl border-l-[6px] border-l-accent flex flex-col justify-center">
              <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">03. Protezione</span>
              <p className="text-xl leading-relaxed text-primary">{T.protezione.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPROCCIO OLISTICO & 6. OBIETTIVI CONCRETI */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="w-full h-[500px] glow-spot-warm top-0 right-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="glass-dark p-10 rounded-3xl pb-16">
              <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">04. Approccio</span>
              <h2 className="text-4xl font-display font-bold mb-6">{T.olistico.title}</h2>
              <p className="text-lg opacity-90 leading-relaxed max-w-xl mb-8">{T.olistico.body}</p>
              <button className="bg-accent px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 inline-flex items-center gap-2 transition text-white">
                {T.olistico.cta}
              </button>
            </div>
            <div>
              <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">05. Obiettivi</span>
              <p className="text-2xl leading-relaxed mb-10">{T.obiettivi.text}</p>
              <div className="space-y-4">
                {T.obiettivi.analisi.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 border-b border-light/10 pb-4">
                    <span className="text-warm font-display font-bold text-2xl opacity-50">0{idx+1}</span>
                    <span className="text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* 7. SERVIZI & 8. INDIPENDENZA */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="w-[800px] h-[800px] glow-spot-blue right-[-400px] top-1/4 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">06. Servizi</span>
            <p className="text-2xl font-medium text-primary">{T.servizi.intro}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {T.servizi.list.map((srv, idx) => (
              <div key={idx} className="bg-secondary/5 rounded-2xl p-8 hover:-translate-y-2 transition duration-300">
                <Briefcase className="text-accent mb-6" size={32} />
                <h4 className="font-display font-bold text-xl text-primary">{srv.title}</h4>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mb-24">
            {T.servizi.links.map((link, idx) => (
              <a key={idx} href="#" className="font-semibold text-accent flex items-center gap-2 hover:underline">
                {link} <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="glass-light p-10 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[60px]" />
            <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">07. Indipendenza</span>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">{T.indipendenza.title}</h2>
            <p className="text-lg leading-relaxed text-primary/80 max-w-4xl">{T.indipendenza.text}</p>
          </div>
        </div>
      </section>

      {/* 9. TARGET E BENEFICI */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">08. Per Chi È</span>
            <ul className="space-y-4">
              {T.target.perChi.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <Target className="text-warm shrink-0" size={24} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-4 block">09. I Benefici</span>
            <div className="flex flex-wrap gap-4">
              {T.target.benefici.map((item, i) => (
                <div key={i} className="glass-dark px-6 py-3 rounded-full text-lg font-medium border border-accent/30">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIANZE E CHIUSURA */}
      <section className="py-24 relative bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="font-display font-bold text-accent text-xl tracking-widest uppercase mb-10 block text-center">10. Testimonianze</span>
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {T.testimonianze.map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.05)] flex flex-col">
                <h4 className="font-display font-bold text-lg mb-4 text-primary line-clamp-3">"{test.title}"</h4>
                <p className="text-primary/70 mb-8 flex-grow text-sm leading-relaxed">{test.quote}</p>
                <div className="pt-6 border-t border-secondary/10">
                  <p className="font-bold text-accent whitespace-pre-line text-sm">{test.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-dark !bg-primary p-12 lg:p-20 rounded-[3rem] text-center relative overflow-hidden text-white">
            <div className="w-[600px] h-[600px] glow-spot-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-8 leading-tight">{T.chiusura.text}</h2>
              <button className="bg-accent text-white px-10 py-5 rounded-full font-semibold hover:bg-opacity-90 inline-flex items-center gap-2 transition text-lg shadow-xl shadow-accent/20">
                {T.chiusura.cta}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
