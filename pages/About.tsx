
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        
        {/* Titolo Principale */}
        <header className="mb-20">
          <h1 className="text-[60px] font-black tracking-tighter leading-none text-black uppercase mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-[#4A6CF7]"></div>
        </header>

        {/* Articolo Narrativo Integrale */}
        <article className="space-y-10 text-gray-800 leading-[1.8] text-[17px] font-light">
          
          {/* Introduzione / Infanzia */}
          <section className="space-y-6">
            <p>
              La tecnologia è entrata nella mia vita molto prima che diventasse un lavoro.
            </p>
            <p>
              Avevo dieci anni quando i miei genitori aprirono uno dei primi negozi di informatica nel nostro territorio campano. Ricordo ancora le persone che entravano più per curiosità che per reale bisogno, attirate da quei computer enormi, rumorosi, apparentemente incomprensibili. Erano altri tempi. La tecnologia non prometteva soluzioni, non parlava di efficienza o di business. Era semplicemente qualcosa di nuovo, e per questo affascinante.
            </p>
            <p>
              Sono cresciuto dentro quel negozio. Finita la scuola, andavo lì ogni giorno. Ascoltavo le domande dei clienti, osservavo i problemi, guardavo mio padre smontare e rimontare macchine che sembravano astronavi. Non capivo tutto, ma ero curioso. Ed è probabilmente lì che si è formata la caratteristica che più di ogni altra mi ha accompagnato fino a oggi: <span className="font-bold text-black italic">la curiosità</span>.
            </p>
            
            {/* EVIDENZA 1: CURIOSITÀ */}
            <div className="relative py-12 my-16 px-8 md:px-12 bg-[#F9F7F4] border-l-8 border-[#4A6CF7] shadow-sm">
              <span className="absolute top-4 left-4 text-6xl text-gray-200 font-serif leading-none">“</span>
              <p className="text-[22px] md:text-[26px] font-serif italic text-black leading-snug relative z-10">
                La competenza si costruisce, la dedizione si allena, ma la curiosità o ce l’hai o no. Ed è lei che fa davvero la differenza. Siate curiosi nella vita ragazzi siate curiosi … è la frase che ripeto ai miei figli ogni santo giorno.
              </p>
            </div>

            <p>
              Col tempo ho capito una cosa che continuo a ritenere vera e che sto cercando di trasmettere ai mii figli: quella citazione qui sopra non è solo un consiglio, è una filosofia di vita che cerco di seminare in loro quotidianamente.
            </p>
          </section>

          <hr className="border-gray-100 my-12" />

          {/* Formazione e primi passi */}
          <section className="space-y-6">
            <p>
              Dopo il liceo mi iscrissi all’università, scegliendo un percorso di studi che sulla carta avrebbe dovuto portarmi nella direzione giusta. In realtà, dopo tre anni di esami e tentativi, mi resi conto che non lo era. L’informatica era marginale, il resto non mi apparteneva davvero. Non fu una resa, ma una presa di coscienza. <span className="font-medium text-black italic">Capire cosa non sei è spesso il primo passo per capire chi vuoi diventare</span>.
            </p>
            <p>
              Proprio in quel periodo arrivò la mia prima vera opportunità di lavoro.
            </p>
            <p>
              Avevo poco più di vent’anni quando mi proposero di andare a Roma per lavorare come Help Desk per una grande multinazionale, tramite una società che forniva il loro gestionale. Per me era enorme. Roma, una multinazionale, un lavoro vero. Presi e partii.
            </p>
            <p>
              Quel percorso mi portò poi a Milano, quando la società venne acquisita dal gruppo FIAT. Lì iniziai davvero a “fare sul serio”. Fui assunto direttamente e cominciai a crescere: dall’Help Desk allo sviluppo, fino all’integrazione dei processi aziendali. Anni intensi, formativi, in una Milano molto diversa da quella di oggi. Una città che, se potessi, tornerei a vivere.
            </p>
          </section>

          <hr className="border-gray-100 my-12" />

          {/* Il Farmaceutico e la Paternità */}
          <section className="space-y-6">
            <p>
              Dopo quell’esperienza approdai in un’importante azienda farmaceutica nel Lazio. Ed è lì che è iniziato il mio vero percorso, professionale e personale.
            </p>
            <p>
              In quegli anni, nello stesso luogo in cui cresceva il mio percorso professionale, è cresciuta anche la mia vita personale.
            </p>
            <p>
              Oggi ho tre figli: due gemelli maschi e una femminuccia. Essere padre ha cambiato profondamente il mio modo di guardare al lavoro, al tempo e alle responsabilità. Ti costringe a rimettere tutto in prospettiva: le priorità, le energie, le scelte.
            </p>
            <p>
              Ho iniziato a chiedermi non solo se una cosa funzionasse, ma a che prezzo. Non solo per l’azienda, ma per le persone. Perché il lavoro è una parte fondamentale della vita, ma non può essere l’unica. E guidare sistemi complessi, da quel momento in poi, ha significato anche interrogarmi su che tipo di equilibrio stavo contribuendo a costruire, per me e per gli altri.
            </p>
            
            <div className="space-y-4 py-6 text-gray-700">
              <p>In quell’azienda ho passato vent’anni.</p>
              <p>
                Sono entrato quando esistevano ancora le macchine da scrivere, nel senso letterale del termine. Ne sono uscito dopo aver guidato trasformazioni tecnologiche importanti, in un contesto manifatturiero complesso, regolato, spesso resistente al cambiamento. Una realtà grande, ma con una struttura familiare, dove innovare non significava solo implementare soluzioni, ma convincere, accompagnare, costruire fiducia.
              </p>
            </div>

            {/* EVIDENZA: LA SFIDA DELLE COSE GIUSTE */}
            <div className="bg-[#4A6CF7] text-white p-12 my-16 shadow-2xl transform md:-rotate-1">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6 opacity-80">La mia visione del cambiamento</h3>
              <p className="text-[24px] md:text-[32px] font-black leading-tight tracking-tight uppercase">
                "La sfida più grande non è mai stata fare cose. È stato fare le cose <span className="underline decoration-white decoration-4 underline-offset-8">giuste</span>, nel momento giusto, nel modo giusto."
              </p>
            </div>

            <p>
              Portare consapevolezza sul ruolo dell’Information Technology, far comprendere che non era solo supporto ma leva strategica, è stato un lavoro lento, a volte faticoso. Oggi è facile dire che “l’IT è l’acceleratore del business”. Ventitré anni fa non lo era affatto.
              E se già il mondo manifatturiero è complesso, quello farmaceutico lo è ancora di più, per vincoli normativi, culturali, organizzativi.
            </p>
            <p>
              Lo stesso è accaduto con la Cyber Security. Anche lì, la vera difficoltà non è stata introdurre tecnologia, ma cambiare cultura, renderla parte dei processi, delle abitudini, delle persone. Perché una tecnologia che non viene compresa, adottata e vissuta è solo un costo.
            </p>
            
            <p className="font-bold text-black uppercase tracking-wider text-sm mt-8">Questo principio vale ancora oggi, forse più che mai.</p>
            <p>
              Si parla di intelligenza artificiale ovunque, anche al bar. Ma siamo davvero pronti?
              La tecnologia, da sola, non fa la differenza. La differenza la fa come viene guidata. Quando persone e sistemi sono progettati per lavorare insieme, cambia la produttività, ma cambia soprattutto la qualità del lavoro. Il tempo viene restituito, non consumato.
            </p>
            
            <div className="flex flex-col items-center py-8 text-center space-y-2">
              <span className="text-black font-black text-2xl">L’AI non è un pilota automatico.</span>
              <span className="text-[#4A6CF7] font-black text-2xl uppercase">È un co-pilota.</span>
              <p className="max-w-xs text-sm italic pt-2">E può essere utile solo se chi è ai comandi sa dove vuole andare.</p>
            </div>
          </section>

          <hr className="border-gray-100 my-12" />

          {/* Logistica e L'Aquila */}
          <section className="space-y-6">
            <p>
              Dopo vent’anni in quella realtà, sentivo il bisogno di esplorare qualcosa di completamente diverso. Volevo uscire dalla cosiddetta “Zona di Comfort” . Così sono entrato nel mondo della logistica e dei trasporti, come IT & Innovation Manager, in un’azienda con sette sedi in Italia. Un settore complesso, dove la tecnologia può davvero fare la differenza.
            </p>
            <p>
              È stata un’esperienza importante, ma anche lì ho capito una cosa: il mondo manifatturiero mi mancava. Fa parte di me. Poi è arrivata una chiamata inattesa.
            </p>
            <p>
              Un head hunter mi parlò di un’opportunità a L’Aquila. Una città che, fino a quel momento, non avrei saputo nemmeno indicarla sulla cartina geografica. Un napoletano a L’Aquila. Io, che ho sempre sognato di vivere in costume e infradito tutto l’anno … io, che non avevo nemmeno un giubbotto nell’armadio, oggi ho capito addirittura cosa sono le grammature dei piumini.
            </p>
            <p>
              Ma le sfide mi hanno sempre affascinato, soprattutto quando sono lontane dalla zona di comfort. Era un ruolo manageriale, ma più operativo. In un’importante azienda farmaceutica.
            </p>
            <p className="font-bold text-black italic">Mi sono detto: perché no?</p>
            <p>
              Oggi lavoro in una città che mi sta dando molto, sotto tanti punti di vista. Non è la città in cui vorrei vivere per sempre, ma è esattamente quella di cui ho bisogno adesso. Per mettermi alla prova, per superare limiti, per affrontare paure.
              <span className="block mt-4 font-black uppercase text-[#4A6CF7]">Perché se non è complessa, non è una sfida.</span>
            </p>
          </section>

          <hr className="border-gray-100 my-12" />

          {/* Sport */}
          <section className="space-y-6">
            <p>
              Fuori dal lavoro, lo sport ha sempre avuto un ruolo centrale nella mia vita.
            </p>
            <p>
              Gioco a tennis da quando avevo cinque anni. Mio padre me lo ha trasmesso, ed è stata una delle esperienze più formative che abbia vissuto. Il tennis mi ha insegnato la disciplina, il sacrificio, la gestione della pressione, il rispetto. Ho giocato a livello agonistico fino al periodo del COVID, che per molti ha segnato un prima e un dopo.
            </p>
            <p>
              Nel mio caso, con un po’ di amarezza, ha segnato la fine di quella fase. Allenarsi diventava sempre più difficile, il tempo meno, l’età avanzava. Ho appeso la racchetta al chiodo… come fanno molti tennisti: passando al padel.
            </p>

            {/* EVIDENZA 2: SPORT */}
            <div className="my-16 p-10 bg-black text-white rounded-none relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <i className="fas fa-running text-8xl"></i>
              </div>
              <p className="text-[20px] md:text-[24px] font-bold leading-relaxed mb-6 italic relative z-10">
                "Credo profondamente che lo sport sia una scuola di vita."
              </p>
              <p className="text-[17px] md:text-[19px] font-light leading-relaxed relative z-10 border-l-2 border-[#4A6CF7] pl-6">
                I ragazzi dovrebbero crescere facendo sport. Perché lo sport è relazione, è sacrificio, è determinazione. Ti insegna a perdere, a rialzarti, a rispettare gli altri e te stesso. Sono lezioni che restano, molto più di tante parole.
              </p>
            </div>
          </section>

          <hr className="border-gray-100 my-12" />

          {/* Visione Futura e Relazioni */}
          <section className="space-y-6 pb-20">
            <p>
              Se oggi mi chiedessero cosa vorrei fare “da grande”, la risposta sarebbe diversa da qualche anno fa. Dopo questo percorso sento il desiderio di passare dall’altra parte del mercato. Mi piacerebbe lavorare nel Business Development per una realtà tecnologica fortemente orientata all’innovazione.
            </p>
            <p>
              Chi mi conosce me lo dice da sempre: <span className="italic">“Valerio, tu dovresti fare il commerciale”</span>. Non tanto per vendere qualcosa, ma perché le relazioni umane sono sempre state la chiave di tutto per me.
            </p>
            <p>
              In questo percorso ho capito che le relazioni personali sono una delle cose più importanti che esistano, nella vita come nel lavoro. Le persone ti danno tanto, spesso molto più di quanto immagini, se sei disposto ad ascoltare davvero.
            </p>

            {/* EVIDENZA 3: RELAZIONI UMANE */}
            <div className="my-16 py-10 px-8 border-y-2 border-gray-900 bg-white">
              <p className="text-[22px] md:text-[24px] font-serif font-medium text-black leading-relaxed text-center italic">
                "Credo che ogni rapporto umano sia fatto di un dare e avere. Ho sempre cercato, con umiltà, di lasciare qualcosa nelle persone che ho incontrato lungo il mio cammino. E allo stesso tempo ho preso molto: esperienze, punti di vista, insegnamenti."
              </p>
            </div>

            <p>
              Ogni persona che ho conosciuto mi ha lasciato qualcosa, nel bene o nel male. Ed è anche grazie a questo intreccio di relazioni che oggi il mio modo di lavorare è fatto meno di ruoli e più di fiducia, meno di soluzioni imposte e più di costruzione condivisa.
            </p>
            <p>
              È qui che il mio background tecnico trova il suo senso più profondo: capire davvero i problemi, leggere i contesti, costruire ponti tra esigenze diverse. Non soluzioni calate dall’alto, ma percorsi che le persone possano riconoscere come propri.
            </p>
            <p className="font-bold text-black italic">
              Credo che l’innovazione crei valore solo quando viene compresa, condivisa e adottata. Ed è lì che sento di poter dare il meglio.
            </p>
            <p>
              Questo spazio nasce per raccontare tutto questo.
            </p>
            
            <footer className="mt-12 pt-10 border-t-4 border-black">
              <p className="text-2xl font-serif italic text-gray-900 leading-snug">
                "Perché, alla fine, il valore non sta in quello che costruiamo, ma in come facciamo stare le persone mentre lo costruiamo."
              </p>
            </footer>
          </section>

        </article>
      </div>
    </div>
  );
};

export default About;
