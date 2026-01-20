
import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        
        {/* Intestazione e Download */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <h1 className="text-[60px] font-black tracking-tighter leading-none text-black uppercase">
            Resume
          </h1>
          <a 
            href="#" 
            className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#4A6CF7] transition-all duration-300 shadow-xl"
          >
            Scarica CV Formale
            <i className="fas fa-download group-hover:translate-y-1 transition-transform"></i>
          </a>
        </div>

        {/* Corpo Narrativo */}
        <article className="prose prose-lg max-w-none text-gray-800 space-y-12">
          
          <header className="mb-16">
            <h2 className="text-3xl font-black mb-6 text-black tracking-tight leading-tight italic">
              "Il mio percorso: tecnologia, responsabilità, consapevolezza"
            </h2>
            <div className="w-20 h-1 bg-[#4A6CF7]"></div>
          </header>

          <section className="space-y-8">
            <p className="text-[17px] leading-[1.8] font-medium text-gray-700">
              Il mio percorso professionale non è nato da una strategia precisa, ma da una combinazione di curiosità, necessità e responsabilità prese molto presto.
            </p>

            <p className="text-[16px] leading-[1.8]">
              Dopo il liceo a indirizzo informatico ho iniziato subito a lavorare. Non ho vissuto una lunga fase di studio “protetto” prima dell’ingresso nel mondo del lavoro: la tecnologia, per me, è stata fin dall’inizio qualcosa di concreto, operativo, legato ai problemi reali delle persone e delle aziende.
              Ho iniziato come sviluppatore e specialista IT, lavorando su applicazioni web, reporting, sistemi informativi e integrazioni tra piattaforme diverse. Anni in cui ho costruito solide basi tecniche, ma soprattutto un approccio molto pratico: <span className="font-bold text-black italic">capire il contesto, ascoltare il bisogno, trovare una soluzione che funzionasse davvero.</span>
            </p>

            <div className="py-6 border-y border-gray-100 flex items-center gap-6 my-10">
              <span className="text-4xl font-serif text-gray-200">“</span>
              <p className="text-xl font-light italic text-gray-500 leading-relaxed">
                La tecnologia ha valore solo se è affidabile, sostenibile e comprensibile per chi la usa.
              </p>
            </div>

            <p className="text-[16px] leading-[1.8]">
              Questa impostazione mi ha accompagnato anche negli anni successivi, quando il mio ruolo ha iniziato a cambiare. Entrando in una grande azienda manifatturiera del settore farmaceutico, ho vissuto dall’interno la complessità di un ambiente produttivo regolato, dove l’IT non è mai solo tecnologia, ma continuità operativa, qualità, compliance, responsabilità verso il business e le persone.
            </p>

            <p className="text-[16px] leading-[1.8]">
              Nel tempo sono passato da ruoli più operativi a ruoli di coordinamento e responsabilità: <span className="text-black font-semibold">ICT Operation Leader prima, poi ICT Manager</span>. Ho gestito infrastrutture, sistemi, fornitori, budget, progetti strategici. Ho lavorato a stretto contatto con Finance, Supply Chain, Manufacturing, Produzione, R&D.
            </p>

            <p className="text-[16px] leading-[1.8]">
              Dopo molti anni nella stessa realtà, ho affrontato una fase di cambiamento importante, entrando in contesti aziendali diversi, meno strutturati ma con forti esigenze di evoluzione. Qui ho ricoperto ruoli di <span className="text-black font-semibold">IT & Innovation Manager</span>, occupandomi non solo di sistemi e infrastrutture, ma anche di change management, ridefinizione dei processi e trasformazione digitale in organizzazioni poco abituate al cambiamento.
            </p>

            {/* Focus Master COVID */}
            <div className="bg-[#F4ECE6] p-10 rounded-sm my-12 border-l-4 border-black">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A6CF7] mb-4">Focus Formazione</h4>
              <p className="text-[16px] leading-[1.8] text-gray-800">
                Durante il periodo del COVID ho scelto di investire su me stesso iscrivendomi a un <span className="font-bold">Master universitario in Computer Science</span>, con focus su Big Data, Artificial Intelligence e Cybersecurity. Non l’ho fatto per “aggiungere un titolo”, ma per aggiornare il mio modo di pensare la tecnologia.
              </p>
            </div>

            <p className="text-[16px] leading-[1.8]">
              Oggi lavoro in un grande gruppo farmaceutico, come <span className="text-black font-semibold uppercase tracking-tight">IT Senior Site Manager</span>, con responsabilità su più sedi produttive e di ricerca. Il mio ruolo è sempre meno “fare” e sempre più creare le condizioni perché le cose funzionino: processi chiari, responsabilità definite, tecnologia al servizio delle persone.
            </p>

            <p className="text-[16px] leading-[1.8]">
              Guardando indietro, vedo un filo conduttore piuttosto chiaro: sono partito dalla tecnologia, ma il mio percorso mi ha portato a lavorare sempre di più sull’intersezione tra <span className="italic">sistemi, organizzazioni e persone</span>. Oggi mi interessa meno “l’ultima soluzione” e molto di più il modo in cui una soluzione viene adottata, governata e resa sostenibile nel tempo.
            </p>
          </section>

          <footer className="pt-16 border-t border-gray-100 mt-20">
            <p className="text-sm text-gray-400 leading-relaxed italic">
              Questa pagina non sostituisce il mio CV formale, che resta disponibile per chi ne ha bisogno. È piuttosto un tentativo di raccontare il senso del percorso, non solo le tappe. Perché dietro ogni ruolo, ogni progetto, ogni titolo, c’è sempre una persona che cambia, impara e ricalibra il proprio modo di stare nel lavoro.
            </p>
          </footer>

        </article>
      </div>
    </div>
  );
};

export default Resume;
