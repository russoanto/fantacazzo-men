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
     GUSTI PIZZE — la classifica seria della lega.
     Ogni voce: { nome, ingredienti, voto (0-10), autore?, nota? }.
     Vengono ordinate da sola per voto, dal piu alto.
     ============================================================ */
  pizze: [
    { nome: "[NOME PIZZA]", ingredienti: "[INGREDIENTI]", voto: 9.0, autore: "[CHI L'HA PROPOSTA]", nota: "[COMMENTO]" },
    { nome: "[NOME PIZZA]", ingredienti: "[INGREDIENTI]", voto: 8.0, autore: "[CHI L'HA PROPOSTA]", nota: "[COMMENTO]" },
    { nome: "[NOME PIZZA]", ingredienti: "[INGREDIENTI]", voto: 7.0, autore: "[CHI L'HA PROPOSTA]", nota: "[COMMENTO]" },
    { nome: "[NOME PIZZA]", ingredienti: "[INGREDIENTI]", voto: 6.0, autore: "[CHI L'HA PROPOSTA]", nota: "[COMMENTO]" }
  ],

  finestraMercato: "Riapre dopo la 9ª giornata"
};
