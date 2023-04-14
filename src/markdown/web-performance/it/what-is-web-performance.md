# Cos'è la Performance del Web?

*** tradotto da [Measuring Web Performance in 2023: The Definitive Guide](https://requestmetrics.com/web-performance/measure-web-performance) ***

La Performance del Web riguarda la rapidità con cui gli utenti percepiscono il tuo sito web. Un sito web lento può causare frustrazione rallentando l'utente nel suo lavoro. Queste sensazioni degli utenti vengono talvolta chiamate Prestazioni Percepite.

Le sensazioni sono difficili da misurare. Ogni persona può avere un'aspettativa diversa su quanto veloce dovrebbe essere un sito web, in base a quello che l'utente sta facendo e al tipo di sito web. Gli utenti probabilmente non aspetteranno 6 secondi per una notizia click-bait, mentre aspetteranno 10 secondi o più per far partire Gmail.

Simon Hearne ha condiviso che nel lavoro di psicologia "The Psychology of Waiting Lines", David Maister definisce 6 leggi che le persone tendono a seguire quando aspettano in fila o aspettano un sito web:


## Psicologia dell'attesa

- Le persone vogliono iniziare.

Sei entusiasta di un'idea o hai finalmente superato la procrastinazione per iniziare. Quando apri un'applicazione web per iniziare il tuo lavoro, non vuoi aspettare. La lentezza sembra più lenta quando sei ansioso di iniziare il tuo lavoro.

- Le attese noiose sembrano più lunghe

Sei seduto sul sedile posteriore di un lungo viaggio. Ai vecchi tempi prima dei cellulari e dei giochi portatili. Tutto quello che c'era da fare era guardare fuori dal finestrino. Quel viaggio sembrò durare per sempre. Sembrò più lungo di quanto fosse perché eri così annoiato.

Stessa cosa con un sito web. Quando stai evitando il tuo lavoro e scorri su Twitter, se un link è lento a caricare, perdi interesse molto rapidamente.

- Le attese ansiose sembrano più lunghe

Quando sei nervoso per il contenuto di una pagina o per i risultati di una richiesta, i ritardi sembrano più lunghi di quanto siano in realtà. Immagina di aspettare che vengano visualizzati i risultati di un test medico o lo stato di una domanda di mutuo. Guardare la rotella di caricamento sembra lento a causa dell'importanza del risultato.

- Le attese non spiegate sembrano più lunghe

Probabilmente hai comprato molte cose su Internet e sai come funziona. Quindi quando visiti un negozio online e aggiungi un prodotto al carrello, hai un'aspettativa di quanto tempo dovrebbe impiegare. Ma mentre i secondi passano, sembra sbagliato. Non ti aspettavi di dover aspettare qui e inizi a dubitare se hai realmente bisogno di quella nuova maglietta con grafica.

- I tempi di attesa incerti sembrano più lunghi

Invii un modulo e vedi una rotella di caricamento con il testo "attendere prego". Attendere? Per quanto tempo? Con il passare dei secondi, pensi che il modulo sia fallito e che sia necessario inviarlo nuovamente. Potresti anche decidere di abbandonare e provare qualcos'altro. Quando l'utente non capisce quanto dovrà aspettare, il tempo di attesa sembra esagerato.

- Le persone attendono di più per il valore

Quando clicchi su quel link bollente di pettegolezzi di celebrità su TMZ, aspetterai 4 o 5 secondi per caricare. Ma se non è pronto, probabilmente perderai interesse e passerai oltre. Probabilmente dovresti metterti al lavoro.

Quindi apri il tuo account di lavoro GMail. GMail è una grande applicazione web e talvolta ci vogliono 6 secondi o più per caricare. Ma aspetterai per questo, perché è importante.

## Perché è importante la performance del Web?

Probabilmente hai visto i casi di studio. Molti siti di eCommerce, siti di marketing e servizi software hanno mostrato una correlazione tra il miglioramento delle prestazioni e il successo del loro sito web.

Le pagine web lente frustrano gli utenti e li rendono meno propensi a rimanere. Meno propensi a comprare quella cosa, cliccare sul tuo link o abbonarsi al tuo servizio. Google può vedere questo nei comportamenti di ricerca - le persone sono meno propense a rimanere su siti lenti.

## Perché a Google interessa la mia performance?

Google vuole che i risultati di ricerca siano il più pertinenti e utili possibile: i siti web lenti non sono molto utili. Gli utenti di ricerca sono più inclini ad abbandonare un risultato di ricerca lento rispetto a un risultato veloce.

La performance è un segnale così forte per Google che le prestazioni del sito web sono considerate parte del ranking di ricerca del sito web. Quindi, se per nessun altro motivo, assicurati che il tuo sito sia veloce in modo da non perdere posizioni nei confronti dei tuoi concorrenti che lo sono.

# Tempo di caricamento della pagina

All'inizio c'era PageLoad. La performance dei siti web veniva misurata con una sola misurazione del tempo trascorso fino all'evento di PageLoad.

Tuttavia, PageLoad non descrive completamente le prestazioni. Alcuni siti si caricano molto velocemente all'inizio, ma il contenuto dinamico deve essere caricato. PageLoad non cattura completamente se un sito web sembra veloce.

Peggio ancora, PageLoad era facile da manipolare. Gli sviluppatori potevano migliorare il tempo di PageLoad differendo il lavoro con JavaScript. Il lazy-loading, i caricamenti asincroni di script, il rendering lato client e il contenuto dinamico erano tutti schemi che spesso miglioravano il tempo di PageLoad, ma creavano un'esperienza più lenta dal punto di vista dell'utente finale.

## Cosa facciamo invece?

Ci sono molte modalità in cui un sito web può sembrare lento: lento all'avvio, lento alla fine, saltellante, lento a rispondere e altro ancora. Non possiamo usare una sola metrica per comprendere le prestazioni.

# I Core Web Vitals

![web vitals](https://requestmetrics.com/assets/images/webperf/measure-web-performance/core_web_vitals_1480.png)



Nel 2019, Google ha introdotto una serie di metriche volte a misurare le prestazioni effettive di un sito web come gli utenti lo vedrebbero. Queste metriche sono chiamate collettivamente Core Web Vitals.


Sono misurati in tutti i browser basati su Chrome, compreso il crawler Googlebot, che utilizza questi punteggi per influenzare il ranking delle pagine.

Si noti che i browser basati su Chrome, Firefox e Safari supportano queste metriche e la compatibilità sta aumentando. È possibile controllare la compatibilità corrente dei Core Web Vitals qui.

## Primo Paint di contenuto (FCP)

![FCP](https://requestmetrics.com/assets/images/webperf/measure-web-performance/first_contentful_paint_1480.png)

"Il primo Paint di contenuto" misura quanto tempo ci vuole per mostrare all'utente che la richiesta è stata ricevuta e la pagina verrà caricata. Ad esempio, quando si clicca su una notizia, FCP misura il tempo dal clic fino al rendering dell'intestazione delle notizie di NPR.

FCP incoraggia i siti web a rispondere rapidamente alle richieste. 

Google consiglia che il tuo FCP dovrebbe essere inferiore a 1,0 secondi. Punteggi superiori a 3,0 secondi sono notevolmente scarsi e probabilmente hanno un problema.

# Paint di contenuto più grande (LCP)

![LCP](https://requestmetrics.com/assets/images/webperf/measure-web-performance/largest_contentful_paint_1480.png)

"Il Paint di contenuto più grande" misura quanto tempo ci vuole finché il browser non rappresenta la maggior quantità di contenuti sullo schermo. A questo punto, idealmente, l'utente può vedere il contenuto che sta cercando e crede che la pagina sia quasi completa.

Sarebbe più preciso se si misurasse il tempo fino a quando il contenuto più importante fosse visibile, ma questo è difficile da fare programmanticamente. LCP è una misurazione di proxy per il contenuto più importante.

LCP incoraggia i siti web a finire rapidamente, enfatizzando il loro contenuto primario e assicurandosi che si caricano velocemente. 

Google consiglia che il tuo LCP dovrebbe essere inferiore a 2,5 secondi. Punteggi superiori a 4,0 secondi sono notevolmente scarsi e probabilmente hanno un problema.

# Spostamento totale del layout (CLS)

![CLS](https://requestmetrics.com/assets/images/webperf/measure-web-performance/cls-example.gif)


Lo "spostamento totale del layout" è un po' più difficile da capire perché non misura il tempo. CLS misura quanto il contenuto di una pagina si muove mentre altri contenuti vengono caricati e renderizzati.

Gli spostamenti del layout misurano come il contenuto renderizzato in ritardo influisce sull'esperienza dell'utente di una pagina. Gli spostamenti del layout che spingono il contenuto importante sono davvero frustranti da usare.

SLT scoraggia i siti web dal muovere il contenuto una volta che l'utente lo vede, minimizzando la quantità di contenuti renderizzati in ritardo. Scopri di più su come misurare lo spostamento totale del layout.

Il tuo punteggio di CLS dovrebbe essere inferiore allo 0,1 e non peggiore dello 0,25.

# Primo ritardo di input (FID)

![FID](https://requestmetrics.com/assets/images/webperf/measure-web-performance/first_input_delay_1480.png)

"Il primo ritardo di input" misura se la pagina è veramente finita quando l'utente pensa che sia finita. Se il browser è occupato a scaricare, analizzare ed eseguire JavaScript quando l'utente clicca sulla pagina, ci sarà un ritardo fino a quando il browser potrà gestire l'evento e attivare l'evento di clic. FID misura questo ritardo.

FID scoraggia i siti web dal caricare troppo JavaScript prima che l'utente inizi a interagire con la pagina. Scopri di più su Come misurare il primo ritardo di input.

I ritardi di interazione sono facilmente rilevabili dalla maggior parte delle persone, quindi non si dovrebbe tollerare molto ritardo qui. Idealemente meno di 100 ms, e sicuramente non peggiore di 300 ms.

# Altre comuni metriche di performance

Oltre ai Core Web Vitals, ci sono diverse altre metriche che sono comunemente utilizzate da strumenti di performance popolari.

![metrics](https://requestmetrics.com/assets/images/webperf/measure-web-performance/lighthouse_metrics.png)


## Tempo del primo byte (TTFB)

Il tempo del primo byte misura il tempo fino a quando il server restituisce il primo byte di dati. Questo rappresenta sia la latenza di rete dei tuoi utenti che il tempo di elaborazione che il tuo server richiede per assemblare il documento.

TTFB è una sottocategoria della metrica del primo Paint di contenuto, che sta anche misurando la dimensione del documento, il tempo di analisi e rendering.

## Tempo di interattività (TTI)

Il tempo di interattività è una misura di Chrome Lighthouse che misura il tempo richiesto fino a quando una pagina è completamente interattiva, inclusi la pittura, il completamento di JavaScript e il browser ha finito le sue attività in background.

TTI include sia il primo Paint di contenuto più grande, il primo ritardo di input, così come altri timer di elaborazione in background.

Google consiglia un TTI di meno di 3,8 secondi per essere considerato veloce. I siti più lenti di 7,3 secondi presentano gravi problemi di prestazioni. Si noti che questo è un intervallo più ampio rispetto a LCP.

## Tempo totale di blocco (TBT)

Il tempo totale di blocco è il tempo in cui l'input dell'utente viene ritardato a causa delle attività in background del browser, come l'elaborazione di JavaScript o l'analisi di CSS. Misura quanto occupato il browser deve essere per caricare la pagina Web.

## Indice di velocità

L'indice di velocità è una metrica popolare utilizzata da WebPageTest e strumenti di performance Google che misura i cambiamenti visibili mentre una pagina Web viene caricata per determinare quando l'utente crede che la pagina Web sia completamente caricata.

## Dati di laboratorio e dati sul campo

Esistono due tipi di dati sulle prestazioni web: i dati di laboratorio e i dati sul campo.

I dati di prestazione di laboratorio vengono raccolti con un test controllato, come un rapporto Lighthouse. I dati di laboratorio descrivono un singolo caricamento della pagina web da una posizione specifica sulla rete.


## Dati di prestazione di laboratorio sintetici

![lab data](https://requestmetrics.com/assets/images/webperf/measure-web-performance/lab_data_1480.png)

Questo tipo di dati viene spesso chiamato "Test sintetico" perché misura le prestazioni da un dispositivo noto connesso alla rete. Non misura effettivamente le prestazioni di nessun utente, ma stima quelle che saranno le prestazioni.

I dati sulle prestazioni sul campo vengono raccolti direttamente dagli utenti del sito web utilizzando un agente di prestazioni. Poiché i dati sul campo includono dati per ogni utente del sito web, ci sono molti dati da filtrare e considerare.


## Dati reali sulle prestazioni sul campo degli utenti

![Field data](https://requestmetrics.com/assets/images/webperf/measure-web-performance/field_data_1480.png)

I dati sul campo sono spesso chiamati "Monitoraggio degli utenti reali" perché descrivono le prestazioni effettive sperimentate dagli utenti da un sito web in funzione.

I dati sul campo possono produrre molti dati, e non tutti sono rilevanti. Per comprendere i dati sul campo, dovrete usare la statistica! Non preoccupatevi, non è così terribile.




