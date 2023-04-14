***questo testo è stato tradotto da [What is a JavaScript Meta-framework](https://www.ombulabs.com/blog/javascript/what-is-a-javascript-meta-framework.html)*** by *Lewis D'Avanzo*
La traduzione è stata eseguita dalla concorrenza: pizzagpt :D

# Cosa è un metaframework javascript?

Ciò che la maggior parte degli sviluppatori chiama framework JavaScript (React, Vue, Svelte, ecc.) può essere considerato più accuratamente come librerie per l'interfaccia utente. Sebbene possano rendere più semplice la scrittura del front-end di siti web e app, non hanno opinioni riguardo a ciò che accade più a fondo nello stack. Non hanno nemmeno metodi prescritti per organizzare le cartelle e i file nei tuoi progetti.

I framework completi (pensa a Rails o Django, Laravel o Symphony), d'altra parte, di solito hanno molte opinioni e si aspettano che il codice sia organizzato in un determinato modo, con la speranza che ciò porti a tempi di sviluppo più brevi eliminando l'analisi eccessiva e il dibattito.

Fortunatamente, ci sono librerie disponibili per svolgere questo ruolo nell'ecosistema JavaScript. Poiché la maggior parte delle librerie per l'interfaccia utente sono chiamate "framework", queste librerie più complete si definiscono "meta-framework".

In poche parole, permettono agli sviluppatori JavaScript di concentrarsi sul "cosa" e si occupano della maggior parte del "come" per te.



## Ho bisogno di un metaframework ?

E la risposta è quella che piace a tutti i sviluppatori - "dipende". Se stai creando un progetto semplice con solo un paio di pagine, probabilmente no. Ma, se stai creando un sito o un'app con qualsiasi tipo di complessità significativa, un meta-framework può aiutarti a gestirlo, prendendo molte decisioni organizzative per te.

Se puoi rispondere "sì" ad una di queste domande, potrebbe essere lo strumento giusto per te:

- Stai costruendo un'applicazione full-stack, ma hai bisogno di una guida oltre al front-end?
- L'ottimizzazione per i motori di ricerca è importante per la tua app?
- La tua app può essere costruita prima del rilascio? (es. un sito statico)
- Hai bisogno di funzionalità di routing non banali?
- Hai esigenze di prestazioni che un'applicazione con singola pagina non può soddisfare?
- Gli strumenti opinabili migliorano tipicamente la velocità di sviluppo per te e il tuo team? (es. meno tempo per prendere decisioni arbitrarie significa più tempo per costruire effettivamente cose)

## Concetti e caratteristiche tipiche dei meta-framework

Nonostante i meta-framework differiscano tra loro in vari modi, ci sono alcune caratteristiche chiave simili tra di loro. Di seguito, elencherò alcune delle cose offerte dai più popolari.

## Generazione di siti statici e/o rendering lato server

Quando si costruisce un'applicazione a singola pagina (SPA), l'HTML non viene costruito in anticipo di una richiesta del client per il sito. Invece, il server invierà un file HTML quasi vuoto che assomiglia a questo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- import your app bundle -->
    <script src="./my-js-bundle.js"></script>
  </head>
  <body>
    <!--
      the app bundle will have a reference to this element
      and insert the HTML into the DOM here
    -->
    <div id="root">
  </body>
</html>
```

Questo tipo di sito web può essere sottottimale se l'ottimizzazione per i motori di ricerca (SEO) è importante per il tuo progetto. Quando i motori di ricerca, come Google, indicizzano i siti web, i loro bot esaminano l'HTML inviato prima del caricamento di JavaScript, vedono una pagina quasi vuota e passano oltre senza categorizzare correttamente la tua app. (Google dice che questa non è più una pratica in uso da loro, ma non tutti i bot eseguiranno JavaScript durante l'indicizzazione).

Esistono due soluzioni comuni a questo problema: il rendering lato server (SSR) e la generazione statica del sito (SSG). Quello che sceglierai dipenderà dal tipo di applicazione che stai creando.

## SSR
Se la tua app può cambiare in base a chi la visita (come le app in cui un utente effettua l'accesso), potresti optare per un'app renderizzata dal server. In questo tipo di app, le tue pagine vengono costruite sul server quando vengono richieste, quindi arrivano al client come file HTML completamente formati, invece dell'esempio quasi vuoto sopra.

## SSG
Se il tuo sito avrà lo stesso aspetto per ogni visitatore (ad esempio, nessun contenuto dinamico - come un blog o un portfolio), allora un sito generato staticamente potrebbe essere la scelta giusta per te. In questo tipo di app, scrivi il tuo codice proprio come qualsiasi altro progetto JavaScript, ma quando esegui il comando di compilazione, il framework genera una pagina HTML statica per ogni percorso che hai definito. In questo modo, puoi ridurre la quantità di dati inviati al client e migliorare i tempi di caricamento per i tuoi utenti.



## Rendering ibrido

@todo
---
per saperne di più [leggi questo articolo](https://www.smashingmagazine.com/2022/04/jamstack-rendering-patterns-evolution/)
---
## Routing

Parlando di definizione di percorsi, va notato che di solito non si scrivono codici specifici per il server con i meta-framework. Beh, se non stiamo definendo funzioni per la gestione del routing, come fanno questi framework a capirlo per noi?
I siti web tradizionali utilizzano un routing lato server: il client invia una richiesta al server per una risorsa a qualche URL e il server risponde con quella risorsa. L'importante è notare che ogni pagina tipicamente implicherebbe una nuova richiesta al server.

I siti moderni basati su JavaScript di solito utilizzano ciò che viene chiamato routing lato client. Invece di recuperare una pagina per richiesta, la richiesta iniziale recupera i dati per ogni pagina del sito. Cliccando sui link interni verrà attivata una chiamata all'API della History del browser (per modificare l'URL) e quindi visualizzare la pagina associata. La cosa da notare qui è che questo non comporta una nuova richiesta al server. Come tutto in programmazione, questo è un compromesso: si aggiunge un po' di tempo di caricamento aggiuntivo in cambio di una navigazione più veloce tra le pagine.

Senza un meta-framework, molti progetti JavaScript utilizzeranno il routing basato su componenti. Considera questo esempio di React, utilizzando react-router: 

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MyApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};
```

Questi tipi di librerie hanno API facili da comprendere e svolgono il loro lavoro. Tuttavia, tendono a essere un po' standardizzate e rappresentano un ulteriore dipendenza che bisogna gestire.

L'attuale tendenza popolare nei meta-framework è quella di utilizzare un routing basato sui file. Invece di avere un file principale in cui si dichiarano le route utilizzando componenti, la struttura delle cartelle e dei file determinerà le route del sito. Di solito, esse vivono in una cartella appositamente nominata (solitamente routes o pages) e hanno una struttura del genere:

```
    ──pages
    ├── about
    │   └── index.js
    ├── contact
    │   └── index.js
    └── index.js # the '/' path
```

La maggior parte dei meta-framework supporta anche i nomi delle rotte dinamiche. Ad esempio, se avessi un blog con una rotta /posts, potresti creare un file a pages/posts/[id].js (nota: quelle sono parentesi effettive nel nome del file, non un segnaposto) e il framework avrà un modo per permetterti di inserire quel parametro durante la costruzione, che renderà un URL, come https://my-cool-blog/posts/1.

Questo ultimo punto è un bel passaggio ad un'altra funzionalità comune nei meta-framework JS ...

## Recupero dei dati
Quando hai una rotta dinamica, come nell'esempio sopra, potresti chiederti come recuperiamo i dati per far sapere al nostro framework quale numero di post deve visualizzare. Nelle app con routing lato server, avresti una funzione che gestisce le richieste a `/posts/:id` che farebbe:

- analizzare il parametro :id
- recuperare la risorsa corretta
- inviare quella risorsa al client

Ma poiché molti meta-framework JS utilizzano il routing lato client, ti forniranno un'API per gestire le richieste di fetch in modo che tu possa popolare il tuo sito con dati durante la costruzione (SSG) o l'esecuzione (SSR).

Next.js, un meta-framework React, utilizza funzioni speciali nei componenti della pagina - getServerSideProps, getStaticPaths o getStaticProps - dove inserisci la tua logica per il recupero delle risorse esterne.

Questo esempio, basato su uno dalla loro [documentazione](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time), mostra come recupereresti i dati durante il rendering lato server di una pagina:

```js
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://my-cms.com/data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

// automatically available in your page component
const MyApp = ({ data }) => {...};
```


Ok, quindi il meta-framework si occuperà di instradare e recuperare i dati per noi - fantastico! Ma questo non spiega ancora come i nostri siti verranno serviti agli utenti. I file nella nostra cartella di percorsi/pagine definiscono solo la logica della nostra interfaccia utente e API. Come arriveranno questi file agli utenti se non abbiamo alcuna logica del server?

## Architettura "Serverless"
Nei framework web come Rails o Django, di solito scriviamo la logica del server che accompagna le nostre viste. I moderni meta-framework tendono a concentrarsi su uno stile di architettura più recente noto come "Serverless" (tra virgolette perché c'è comunque un server - è solo di qualcun altro e non devi scriverlo da solo). Potresti anche aver sentito questo stile definito come Architettura "JAMStack" (JavaScript, APIs, Markup).

In ogni caso, lo scopo principale di questo stile è far sì che lo sviluppatore si concentri esclusivamente su ciò che l'app sta servendo al client, non su come. Il meta-framework includerà il codice necessario durante la costruzione per gestire le richieste per te (basato su come sono organizzati i tuoi routes/pages) o per servire una singola pagina che usa solo il routing lato client.

## Ulteriori vantaggi
Ogni meta-framework fornisce tipicamente funzionalità aggiuntive che cercano di distinguersi dagli altri.

[Next.js](https://nextjs.org/) offre componenti specifici del framework come `<Image />`, che estende il tag nativo `<img />` per includere astrazioni per il caricamento ritardato e il ridimensionamento dinamico.

[Nuxt.js](https://nuxt.com/) utilizza il componente di transizione di Vue per rendere i trasferimenti personalizzati tra le pagine semplici.

[SvelteKit](https://kit.svelte.dev/) ha l'attributo sveltekit:prefetch per i collegamenti - questo dice al framework di recuperare i dati in anticipo quando un utente passa sopra a un collegamento che richiederà dati remoti.

E questo è solo la punta dell'iceberg - questi meta-framework stanno aggiungendo miglioramenti tutto il tempo.

---

Okay, tanta roba. Non basta?

## I più comuni Meta-frameworks

- [Svelte](https://svelte.dev/) & [Svelte kit](https://kit.svelte.dev/)
- [React](https://reactjs.org/) & [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/) & [Remix](https://remix.run/)
- [Vue](https://vuejs.org/) & [Nuxt](https://nuxt.com/)

## La nuova generazione (si, di già)

- [Solid](https://www.solidjs.com/) & [Solid Start](https://start.solidjs.com/getting-started/what-is-solidstart)
- [Astro](https://astro.build/)
- [Qwik](https://qwik.builder.io/)
- [Enhance](https://enhance.dev/docs/)


## Link utili

- [The new wave of Javascript web frameworks](https://frontendmastery.com/posts/the-new-wave-of-javascript-web-frameworks/)  (Dare un senso alla proliferazione dei nuovi framework web Javascript. Una profonda analisi dei problemi a larga scala e dell'evoluzione recente dell'innovazione.)

- [Composable Decoupled Frontends aka microfrontends](https://microfrontend.dev/) 

- [12 Days of Enhancing](https://dev.to/macdonst/series/21146) (enhance meta framework)

