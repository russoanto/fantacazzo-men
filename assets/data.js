/* ============================================================
   DATI DELLA LEGA — questo è l'unico file da modificare
   per aggiornare il sito. Niente build: salva, committa, push.
   ============================================================ */

window.LEGA = {
  nome: "Fantacazzo",
  stagione: "2026/27",
  dal: 2017,
  giornataCorrente: 3,
  giornateTotali: 38,
  prossimaScadenza: "Formazioni entro sabato, ore 15:00",

  /* Classifica: pt = punti, fp = fantapunti totali, form = ultime 3 (V/N/P) */
  squadre: [
    { nome: "Panchina Lunga",     allenatore: "[NOME]", pt: 6, fp: 224.5, form: "V V P", dal: 2019, scudetti: 2 },
    { nome: "Real Sballo",        allenatore: "[NOME]", pt: 6, fp: 219.0, form: "V P V", dal: 2017, scudetti: 2 },
    { nome: "Dinamo Divano",      allenatore: "[NOME]", pt: 4, fp: 231.5, form: "V N P", dal: 2018, scudetti: 2 },
    { nome: "Borussia Bar Sport", allenatore: "[NOME]", pt: 4, fp: 210.5, form: "N V P", dal: 2021, scudetti: 0 },
    { nome: "Atletico Sudore",    allenatore: "[NOME]", pt: 4, fp: 205.0, form: "P V N", dal: 2017, scudetti: 1 },
    { nome: "AC Tre Punte",       allenatore: "[NOME]", pt: 3, fp: 213.5, form: "P P V", dal: 2020, scudetti: 1 },
    { nome: "Gli Insostituibili", allenatore: "[NOME]", pt: 3, fp: 201.0, form: "V P P", dal: 2022, scudetti: 0 },
    { nome: "Ultimo Minuto",      allenatore: "[NOME]", pt: 1, fp: 198.5, form: "N P P", dal: 2019, scudetti: 0 },
    { nome: "Sporting Sofà",      allenatore: "[NOME]", pt: 1, fp: 195.0, form: "P N P", dal: 2023, scudetti: 0 },
    { nome: "Melma FC",           allenatore: "[NOME]", pt: 0, fp: 188.0, form: "P P P", dal: 2017, scudetti: 1 }
  ],

  /* Articolo di apertura in home */
  apertura: {
    kicker: "Il caso di giornata",
    titolo: "Panchina Lunga vince al 95’: il modificatore difesa decide la giornata",
    dek: "Tre 6.5 in difesa, un portiere da 7 e il bonus scatta all’ultimo aggiornamento dei voti. Dinamo Divano protesta per il gol annullato al 92’, ma il regolamento della lega non lascia margini.",
    cat: "Pagelle",
    autore: "[FIRMA]",
    tempo: "4 min di lettura",
    /* metti qui il percorso di una foto, es. "assets/img/copertina.jpg", oppure lascia null */
    foto: null
  },

  /* catId: pagelle | mercato | editoriale */
  news: [
    { catId: "pagelle",    cat: "Pagelle",    mark: "3", tint: "#12452F", titolo: "Melma FC, tre sconfitte e zero alibi", dek: "Attacco da 18 punti in tre giornate. Il problema non è la sfortuna, è la rosa costruita all’asta.", autore: "[FIRMA]", tempo: "3 min" },
    { catId: "mercato",    cat: "Mercato",    mark: "⇄", tint: "#96502F", titolo: "Scambio lampo: due difensori per un attaccante", dek: "Real Sballo alleggerisce la difesa e prende la punta che serviva. Voto della redazione: convincente.", autore: "[FIRMA]", tempo: "2 min" },
    { catId: "editoriale", cat: "Editoriale", mark: "!", tint: "#171412", titolo: "Il modificatore difesa va tolto? Il dibattito della lega", dek: "Metà lega lo difende, l’altra metà lo accusa di decidere troppe partite. Le posizioni a confronto.", autore: "[FIRMA]", tempo: "5 min" },
    { catId: "pagelle",    cat: "Pagelle",    mark: "7", tint: "#1E4C7A", titolo: "La panchina che vale una vittoria: chi ha indovinato i cambi", dek: "Tre allenatori hanno guadagnato più di 12 punti dai subentrati. Gli altri hanno lasciato la panchina intatta.", autore: "[FIRMA]", tempo: "4 min" }
  ],

  topflop: [
    { fv: "13", nome: "[GIOCATORE]", nota: "doppietta e rigore procurato", top: true },
    { fv: "10", nome: "[GIOCATORE]", nota: "gol e assist, 7 in pagella",    top: true },
    { fv: "2",  nome: "[GIOCATORE]", nota: "rosso al 61’, squadra in dieci", top: false },
    { fv: "3",  nome: "[GIOCATORE]", nota: "rigore sbagliato, 4.5 in pagella", top: false }
  ],

  /* Risultati per giornata */
  giornate: {
    1: [
      { casa: "Real Sballo",        fuori: "Melma FC",           golCasa: 2, golFuori: 0, fpCasa: 74.5, fpFuori: 61.0 },
      { casa: "Dinamo Divano",      fuori: "Ultimo Minuto",      golCasa: 3, golFuori: 1, fpCasa: 82.0, fpFuori: 68.5 },
      { casa: "Panchina Lunga",     fuori: "Sporting Sofà",      golCasa: 1, golFuori: 1, fpCasa: 70.0, fpFuori: 69.5 },
      { casa: "Atletico Sudore",    fuori: "AC Tre Punte",       golCasa: 0, golFuori: 2, fpCasa: 63.5, fpFuori: 76.0 },
      { casa: "Borussia Bar Sport", fuori: "Gli Insostituibili", golCasa: 1, golFuori: 2, fpCasa: 67.0, fpFuori: 72.5 }
    ],
    2: [
      { casa: "Melma FC",           fuori: "Dinamo Divano",      golCasa: 0, golFuori: 1, fpCasa: 62.5, fpFuori: 71.0 },
      { casa: "Ultimo Minuto",      fuori: "Panchina Lunga",     golCasa: 1, golFuori: 2, fpCasa: 66.0, fpFuori: 77.5 },
      { casa: "Sporting Sofà",      fuori: "Atletico Sudore",    golCasa: 1, golFuori: 1, fpCasa: 68.0, fpFuori: 69.0 },
      { casa: "AC Tre Punte",       fuori: "Borussia Bar Sport", golCasa: 0, golFuori: 1, fpCasa: 64.5, fpFuori: 70.5 },
      { casa: "Gli Insostituibili", fuori: "Real Sballo",        golCasa: 0, golFuori: 2, fpCasa: 63.0, fpFuori: 75.0 }
    ],
    3: [
      { casa: "Panchina Lunga",     fuori: "Dinamo Divano",      golCasa: 2, golFuori: 1, fpCasa: 76.5, fpFuori: 73.0 },
      { casa: "Real Sballo",        fuori: "Atletico Sudore",    golCasa: 1, golFuori: 0, fpCasa: 70.0, fpFuori: 66.5 },
      { casa: "Melma FC",           fuori: "AC Tre Punte",       golCasa: 0, golFuori: 3, fpCasa: 60.0, fpFuori: 81.5 },
      { casa: "Borussia Bar Sport", fuori: "Ultimo Minuto",      golCasa: 1, golFuori: 1, fpCasa: 69.5, fpFuori: 68.0 },
      { casa: "Sporting Sofà",      fuori: "Gli Insostituibili", golCasa: 0, golFuori: 1, fpCasa: 62.0, fpFuori: 70.5 }
    ]
  },

  albo: [
    { anno: "2025/26", campione: "Dinamo Divano",   secondo: "Panchina Lunga",     fp: "2.412" },
    { anno: "2024/25", campione: "Panchina Lunga",  secondo: "Real Sballo",        fp: "2.388" },
    { anno: "2023/24", campione: "Real Sballo",     secondo: "Atletico Sudore",    fp: "2.401" },
    { anno: "2022/23", campione: "AC Tre Punte",    secondo: "Dinamo Divano",      fp: "2.355" },
    { anno: "2021/22", campione: "Panchina Lunga",  secondo: "Melma FC",           fp: "2.372" },
    { anno: "2020/21", campione: "Dinamo Divano",   secondo: "Ultimo Minuto",      fp: "2.340" },
    { anno: "2019/20", campione: "Real Sballo",     secondo: "Panchina Lunga",     fp: "2.298" },
    { anno: "2018/19", campione: "Atletico Sudore", secondo: "Borussia Bar Sport", fp: "2.331" },
    { anno: "2017/18", campione: "Melma FC",        secondo: "Real Sballo",        fp: "2.310" }
  ],

  record: [
    { valore: "112.5", testo: "Miglior punteggio di giornata — Dinamo Divano, 2024" },
    { valore: "9",     testo: "Vittorie consecutive — Real Sballo, 2023" },
    { valore: "48.0",  testo: "Peggior punteggio di sempre — [SQUADRA], 2021" }
  ],

  /* tipo: scambio | asta */
  mercato: [
    { tipo: "scambio", titolo: "[GIOCATORE] → Real Sballo",        dettaglio: "da Melma FC, con [GIOCATORE] alla controparte", crediti: "+0",  data: "28 ago" },
    { tipo: "asta",    titolo: "[GIOCATORE] a Panchina Lunga",     dettaglio: "attaccante, asta di riparazione",               crediti: "118", data: "24 ago" },
    { tipo: "scambio", titolo: "[GIOCATORE] → Dinamo Divano",      dettaglio: "da Atletico Sudore, conguaglio in crediti",      crediti: "+22", data: "22 ago" },
    { tipo: "asta",    titolo: "[GIOCATORE] a AC Tre Punte",       dettaglio: "centrocampista, asta iniziale",                 crediti: "96",  data: "18 ago" },
    { tipo: "scambio", titolo: "[GIOCATORE] → Borussia Bar Sport", dettaglio: "da Sporting Sofà, scambio secco",               crediti: "+0",  data: "16 ago" },
    { tipo: "asta",    titolo: "[GIOCATORE] a Gli Insostituibili", dettaglio: "portiere titolare",                             crediti: "34",  data: "18 ago" }
  ],

  spese: [
    { giocatore: "[GIOCATORE]", squadra: "Panchina Lunga", crediti: 118 },
    { giocatore: "[GIOCATORE]", squadra: "Dinamo Divano",  crediti: 104 },
    { giocatore: "[GIOCATORE]", squadra: "AC Tre Punte",   crediti: 96  },
    { giocatore: "[GIOCATORE]", squadra: "Real Sballo",    crediti: 91  },
    { giocatore: "[GIOCATORE]", squadra: "Melma FC",       crediti: 88  }
  ],

  /* ============================================================
     REGOLAMENTO — struttura pronta, da riempire.
     Ogni sezione: { titolo, testo?, punti?[] }.
       - testo: uno o piu paragrafi (stringa o array di stringhe)
       - punti: elenco puntato (array di stringhe)
     Usa quello che serve; puoi lasciare vuoto cio che non usi.
     ============================================================ */
  regolamento: {
    intro: "[INTRO: due righe su spirito e formato della lega]",
    aggiornato: "[DATA ULTIMO AGGIORNAMENTO]",
    sezioni: [
      { titolo: "Formato e squadre",       testo: "[COME e composta la lega, quante squadre, gironi]", punti: [] },
      { titolo: "Asta e crediti",          testo: "[BUDGET iniziale, regole d'asta, svincoli]", punti: [] },
      { titolo: "Formazioni e schieramenti", testo: "[MODULI ammessi, scadenza formazioni, chi non schiera]", punti: [] },
      { titolo: "Punteggi e modificatori", testo: "[SCALA gol, bonus/malus, modificatore difesa, portiere]", punti: [] },
      { titolo: "Mercato di riparazione",  testo: "[QUANDO apre, scambi, regole]", punti: [] },
      { titolo: "Premi e montepremi",      testo: "[COSA vince chi, ripartizione]", punti: [] }
    ]
  },

  /* ============================================================
     GUSTI PIZZE — le pizze ufficiali che la lega ordinera da Delfino.
     annuncio: il comunicato. pizze: i gusti scelti (senza voti).
     ============================================================ */
  pizzeAnnuncio: {
    occhiello: "Comunicato ufficiale \u00b7 Rinnovo partnership",
    titolo: "Delfino resta il fornitore ufficiale fino al 2030",
    paragrafi: [
      "Dopo lunghe trattative \u2014 condotte, come vuole la prassi, direttamente al tavolo e a stomaco pieno \u2014 la lega \u00e8 lieta di annunciare il rinnovo della partnership con la Pizzeria Delfino fino al 2030. Un accordo pluriennale che garantisce continuit\u00e0, stabilit\u00e0 e, soprattutto, consegne puntuali.",
      "Come da disciplinare, la fornitura resta blindata su cinque gusti, selezionati con la stessa cura riservata alla rosa titolare: nessuna sperimentazione, nessun cedimento alle mode del momento. Queste sono le pizze che ordineremo, asta dopo asta, giornata dopo giornata, vittoria dopo cocente sconfitta."
    ]
  },
  pizze: [
    { nome: "Salsiccia e patate", ingredienti: "mozzarella, salsiccia, patate al forno", nota: "La titolare inamovibile. Si ordina prima ancora di aprire il men\u00f9." },
    { nome: "Salsiccia", ingredienti: "mozzarella, salsiccia", nota: "Per chi non ama le distrazioni. Essenziale, concreta, affidabile." },
    { nome: "W\u00fcrstel e patatine", ingredienti: "mozzarella, w\u00fcrstel, patatine fritte", nota: "Storicamente divisiva, storicamente finita per prima." },
    { nome: "Vecchia Modena", ingredienti: "squacquerone, prosciutto crudo, rucola", nota: "La quota nobile del cartone. Ci fa sembrare persone serie." },
    { nome: "Margherita", ingredienti: "pomodoro, mozzarella, basilico", nota: "Il jolly diplomatico: nessuno la propone, nessuno la contesta." }
  ],

  /* ============================================================
     ROSE 26-27 — dai roster ufficiali (export fantacalcio.it).
     Ogni squadra: card (immagine descrizione) + rosa per reparto.
     ============================================================ */
  rose: [
    {
      nome: "NITRATO DI STRONZIO", slug: "nitrato-di-stronzio", img: null, totale: 498,
      reparti: {
        P: [{ n: "Butez", c: 44 }, { n: "Sanchez Ro.", c: 12 }, { n: "Stankovic F.", c: 1 }],
        D: [{ n: "Valle", c: 19 }, { n: "Akanji", c: 19 }, { n: "Pavlovic", c: 17 }, { n: "Ostigard", c: 11 }, { n: "Tiago Gabriel", c: 10 }, { n: "Obert", c: 4 }, { n: "Gabbia", c: 2 }, { n: "Lulli", c: 1 }],
        C: [{ n: "Gudmundsson A.", c: 42 }, { n: "Perrone", c: 12 }, { n: "Adzic", c: 9 }, { n: "Gaetano", c: 3 }, { n: "Elmas", c: 1 }, { n: "Cambiaghi", c: 1 }, { n: "Odgaard", c: 1 }, { n: "Matic", c: 1 }],
        A: [{ n: "Douvikas", c: 108 }, { n: "Krstovic", c: 70 }, { n: "Lang", c: 60 }, { n: "Santos A.", c: 24 }, { n: "Maldini", c: 21 }, { n: "Gnonto", c: 5 }]
      }
    },
    {
      nome: "TOTÒRIINO", slug: "totoriino", img: "totoriino.jpg", totale: 488,
      reparti: {
        P: [{ n: "Meret", c: 39 }, { n: "Milinkovic-Savic V.", c: 6 }, { n: "Contini", c: 1 }],
        D: [{ n: "Chalobah T.", c: 12 }, { n: "Spence", c: 10 }, { n: "Mangas", c: 6 }, { n: "Kamara H.", c: 6 }, { n: "Delprato", c: 3 }, { n: "Fortini", c: 1 }, { n: "Idzes", c: 1 }, { n: "Jimenez A.", c: 1 }],
        C: [{ n: "Frattesi", c: 61 }, { n: "Diouf", c: 23 }, { n: "Rowe", c: 20 }, { n: "Alajbegovic", c: 19 }, { n: "Cissè A.", c: 14 }, { n: "Modric", c: 11 }, { n: "Mandragora", c: 11 }, { n: "Thorstvedt", c: 5 }],
        A: [{ n: "Thuram", c: 154 }, { n: "Diao", c: 65 }, { n: "Raimondo", c: 16 }, { n: "Bobcek", c: 1 }, { n: "Lontani", c: 1 }, { n: "Ghedjemis", c: 1 }]
      }
    },
    {
      nome: "Herta Vernello", slug: "herta-vernello", img: "herta-vernello.jpg", totale: 473,
      reparti: {
        P: [{ n: "Svilar", c: 48 }, { n: "Provedel", c: 1 }, { n: "Gollini", c: 1 }],
        D: [{ n: "Rrahmani", c: 19 }, { n: "Couto", c: 17 }, { n: "Miranda J.", c: 8 }, { n: "Carlos Augusto", c: 5 }, { n: "Balerdi", c: 2 }, { n: "Buongiorno", c: 2 }, { n: "Dragusin", c: 1 }, { n: "Estupinan", c: 1 }],
        C: [{ n: "Vlasic", c: 33 }, { n: "De Bruyne", c: 31 }, { n: "Pulisic", c: 26 }, { n: "Atta", c: 25 }, { n: "Konè M.", c: 16 }, { n: "Taylor K.", c: 8 }, { n: "Goncalves P.", c: 3 }, { n: "Fitz-Jim", c: 1 }],
        A: [{ n: "Davis K.", c: 71 }, { n: "Esposito Se.", c: 57 }, { n: "Simeone", c: 31 }, { n: "Berardi", c: 27 }, { n: "Yildiz", c: 20 }, { n: "Castro S.", c: 19 }]
      }
    },
    {
      nome: "AVELLINO BANFI", slug: "avellino-banfi", img: "avellino-banfi.jpg", totale: 496,
      reparti: {
        P: [{ n: "Maignan", c: 47 }, { n: "Torriani", c: 1 }, { n: "Terracciano", c: 1 }],
        D: [{ n: "Bisseck", c: 20 }, { n: "Gila", c: 16 }, { n: "N'Dicka", c: 16 }, { n: "Solet", c: 14 }, { n: "Doekhi", c: 4 }, { n: "Comert", c: 1 }, { n: "Bracaglia", c: 1 }, { n: "Abankwah", c: 1 }],
        C: [{ n: "Paz N.", c: 100 }, { n: "Baldanzi", c: 7 }, { n: "Samardzic", c: 5 }, { n: "Oulai", c: 2 }, { n: "Pisilli", c: 1 }, { n: "Volpato", c: 1 }, { n: "Fagioli", c: 1 }, { n: "Cristante", c: 1 }],
        A: [{ n: "Martinez L.", c: 202 }, { n: "Beto", c: 20 }, { n: "Adams C.", c: 19 }, { n: "Bonny", c: 9 }, { n: "Bowie", c: 5 }, { n: "Robinson J.", c: 1 }]
      }
    },
    {
      nome: "HERTA RALLO", slug: "herta-rallo", img: "herta-rallo.jpg", totale: 473,
      reparti: {
        P: [{ n: "Skorupski", c: 10 }, { n: "Corvi", c: 3 }, { n: "Perri", c: 1 }],
        D: [{ n: "Wesley", c: 39 }, { n: "Ramon", c: 15 }, { n: "Scalvini", c: 10 }, { n: "De Winter", c: 4 }, { n: "Dodò", c: 2 }, { n: "Sutalo J.", c: 1 }, { n: "Comuzzo", c: 1 }, { n: "Olivera", c: 1 }],
        C: [{ n: "Mora", c: 62 }, { n: "Rabiot", c: 31 }, { n: "Chukwueze", c: 26 }, { n: "Bernardeschi", c: 21 }, { n: "McKennie", c: 11 }, { n: "Vergara", c: 3 }, { n: "Romano", c: 1 }, { n: "Colpani", c: 1 }],
        A: [{ n: "Scamacca", c: 90 }, { n: "Dybala", c: 80 }, { n: "Pellegrino M.", c: 28 }, { n: "Piccoli", c: 23 }, { n: "Adams A.", c: 8 }, { n: "Osmajic", c: 1 }]
      }
    },
    {
      nome: "TOMAS TURBATO", slug: "tomas-turbato", img: "tomas-turbato.jpg", totale: 463,
      reparti: {
        P: [{ n: "Martinez Jo.", c: 40 }, { n: "Bijlow", c: 5 }, { n: "Stolz", c: 1 }],
        D: [{ n: "Dimarco", c: 67 }, { n: "Mancini", c: 25 }, { n: "Bernasconi", c: 7 }, { n: "Valeri", c: 5 }, { n: "Obrador", c: 4 }, { n: "Diego Carlos", c: 3 }, { n: "Gallo", c: 2 }, { n: "Veiga D.", c: 1 }],
        C: [{ n: "McTominay", c: 47 }, { n: "Barella", c: 31 }, { n: "Ekkelenkamp", c: 29 }, { n: "Lobotka", c: 5 }, { n: "Bernabè", c: 3 }, { n: "Coulibaly L.", c: 2 }, { n: "Sucic P.", c: 1 }, { n: "Thuram K.", c: 1 }],
        A: [{ n: "Esposito F.P.", c: 85 }, { n: "Dovbyk", c: 35 }, { n: "Raspadori", c: 30 }, { n: "Colombo", c: 15 }, { n: "Geubbels", c: 13 }, { n: "Kevin Carlos", c: 6 }]
      }
    },
    {
      nome: "REAL COLIZZATI", slug: "real-colizzati", img: "real-colizzati.jpg", totale: 414,
      reparti: {
        P: [{ n: "Carnesecchi", c: 37 }, { n: "Falcone", c: 11 }, { n: "Sportiello", c: 1 }],
        D: [{ n: "Molina N.", c: 27 }, { n: "Hermoso", c: 27 }, { n: "Tavares N.", c: 16 }, { n: "Di Lorenzo", c: 16 }, { n: "Spinazzola", c: 8 }, { n: "Belghali", c: 6 }, { n: "Doig", c: 4 }, { n: "Cinquegrano", c: 2 }],
        C: [{ n: "Joao Mario", c: 1 }, { n: "Conceicao", c: 31 }, { n: "Ederson D.S.", c: 21 }, { n: "Calò", c: 5 }, { n: "Saelemaekers", c: 5 }, { n: "Zambo Anguissa", c: 3 }, { n: "Cacciamani", c: 1 }, { n: "Pellegrini Lo.", c: 1 }],
        A: [{ n: "Hojlund", c: 67 }, { n: "Kean", c: 65 }, { n: "Neres", c: 56 }, { n: "Lucca", c: 1 }, { n: "Mota", c: 1 }, { n: "Cutrone", c: 1 }]
      }
    },
    {
      nome: "HEIL-NASSR", slug: "heil-nassr", img: "heil-nassr.jpg", totale: 499,
      reparti: {
        P: [{ n: "Mandas", c: 27 }, { n: "Okoye", c: 11 }, { n: "Motta", c: 1 }],
        D: [{ n: "Kalulu", c: 22 }, { n: "Lucumì", c: 10 }, { n: "Holm", c: 2 }, { n: "Mina", c: 2 }, { n: "Floriani Mussolini", c: 1 }, { n: "Marcandalli", c: 1 }, { n: "Bartesaghi", c: 1 }, { n: "Zortea", c: 1 }],
        C: [{ n: "Calhanoglu", c: 72 }, { n: "Baturina", c: 69 }, { n: "Zielinski", c: 25 }, { n: "Jones C.", c: 19 }, { n: "Gonzalez N.", c: 13 }, { n: "Karlstrom", c: 1 }, { n: "Frendrup", c: 1 }, { n: "Winks", c: 1 }],
        A: [{ n: "Kolo Muani", c: 82 }, { n: "Woltemade", c: 65 }, { n: "Soulè", c: 44 }, { n: "De Ketelaere", c: 18 }, { n: "Yeboah J.", c: 7 }, { n: "Vitinha O.", c: 3 }]
      }
    },
    {
      nome: "DUA LIPSIA", slug: "dua-lipsia", img: "dua-lipsia.jpg", totale: 498,
      reparti: {
        P: [{ n: "De Gea", c: 12 }, { n: "Caprile", c: 10 }, { n: "Muric", c: 6 }],
        D: [{ n: "Bastoni", c: 30 }, { n: "Bellanova", c: 12 }, { n: "Vasquez", c: 8 }, { n: "Valdepenas", c: 5 }, { n: "Kaiki", c: 1 }, { n: "Vojvoda", c: 1 }, { n: "Pavard", c: 1 }, { n: "Zappacosta", c: 1 }],
        C: [{ n: "Orsolini", c: 60 }, { n: "Zaccagni", c: 44 }, { n: "Kessiè", c: 15 }, { n: "Politano", c: 15 }, { n: "Moreira", c: 5 }, { n: "Milla", c: 3 }, { n: "Busio", c: 2 }, { n: "Ndour", c: 1 }],
        A: [{ n: "Adopo", c: 1 }, { n: "Ramos G.", c: 198 }, { n: "Pinamonti", c: 51 }, { n: "Tourè E.", c: 12 }, { n: "Camarda", c: 2 }, { n: "Kvernadze", c: 2 }]
      }
    },
    {
      nome: "A.C. REGGIANAL", slug: "ac-reggianal", img: "ac-reggianal.jpg", totale: 500,
      reparti: {
        P: [{ n: "Vicario", c: 39 }, { n: "Grabara", c: 1 }, { n: "Pinsoglio", c: 1 }],
        D: [{ n: "Bremer", c: 31 }, { n: "Stones", c: 13 }, { n: "Celik", c: 10 }, { n: "Theate", c: 6 }, { n: "Provstgaard", c: 3 }, { n: "Bella-Kotchap", c: 2 }, { n: "Heggem", c: 1 }, { n: "Drameh", c: 1 }],
        C: [{ n: "Casale", c: 1 }, { n: "Da Cunha", c: 40 }, { n: "Mastantuono", c: 32 }, { n: "Zaniolo", c: 25 }, { n: "Douglas Luiz", c: 9 }, { n: "Koopmeiners", c: 7 }, { n: "Schmid", c: 1 }, { n: "Fazzini", c: 1 }],
        A: [{ n: "Pessina", c: 1 }, { n: "Malen", c: 231 }, { n: "Laurientè", c: 31 }, { n: "Romero D.", c: 6 }, { n: "Varela G.", c: 6 }, { n: "Elphege", c: 1 }]
      }
    },
  ],

  finestraMercato: "Riapre dopo la 9ª giornata"
};
