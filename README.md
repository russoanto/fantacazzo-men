# fantacazzo.men

Sito della lega di fantacalcio **[NOME LEGA]**: news, classifica, giornate,
schede squadre, albo d'oro e mercato.

HTML statico, nessun build, nessuna dipendenza. Sta su GitHub Pages così com'è.

## Come aggiornare il sito

Tutti i contenuti stanno in **`assets/data.js`**. Si modifica quel file, si
committa, si pusha: GitHub Pages ripubblica da solo in un paio di minuti.

| Cosa | Dove in `data.js` |
|---|---|
| Nome lega, stagione, giornata in corso | in cima all'oggetto `LEGA` |
| Classifica | `squadre` (`pt` punti, `fp` fantapunti, `form` ultime 3) |
| Articolo di apertura | `apertura` |
| Altri articoli | `news` (`catId`: `pagelle`, `mercato`, `editoriale`) |
| Top e flop di giornata | `topflop` |
| Risultati | `giornate` (una chiave per giornata) |
| Albo d'oro | `albo` (bacheca e trofei si calcolano da qui) |
| Record | `record` |
| Mercato e aste | `mercato`, `spese` |

Tutto quello scritto tra `[PARENTESI QUADRE]` è un segnaposto da riempire.

## Foto

Metti i file in `assets/img/` e indica il percorso in `data.js`
(es. `foto: "assets/img/copertina.jpg"`). Senza foto viene disegnato un
campo da calcio come segnaposto.

## Struttura

```
index.html      home: apertura, news filtrabili, classifica
giornata.html   scontri diretti, formazioni, voti, modificatori
squadre.html    rosa, storico, trofei, statistiche per squadra
albo.html       albo d'oro + bacheca + record, e mercato
assets/data.js  TUTTI i dati
assets/app.js   rendering
assets/style.css unico foglio di stile
CNAME           dominio personalizzato
```

## Anteprima in locale

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Dominio

`CNAME` contiene `fantacazzo.men`. Su Cloudflare servono i record DNS verso
GitHub Pages, con il proxy **disattivato** (DNS only) almeno finché GitHub non
ha emesso il certificato.
