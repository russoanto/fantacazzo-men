/* Fantacazzo — rendering delle pagine a partire da assets/data.js */
(function () {
  'use strict';

  var L = window.LEGA;
  if (!L) return;

  var ACCENT = '#17663F', RUST = '#96502F', FAINT = '#8C8371', INK = '#171412';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel) { return document.querySelector(sel); }
  function html(node, s) { if (node) node.innerHTML = s; }
  function fp(n) { return Number(n).toFixed(1); }

  var TROFEO = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0z"></path><path d="M10 14h4l1 6H9z"></path></svg>';

  /* ---------------- classifica ---------------- */

  function ordinata(chiave) {
    var l = L.squadre.slice();
    if (chiave === 'fantapunti') l.sort(function (a, b) { return b.fp - a.fp; });
    else l.sort(function (a, b) { return b.pt - a.pt || b.fp - a.fp; });
    return l;
  }

  function classificaHead(tab) {
    return {
      c1: tab === 'fantapunti' ? 'FP tot' : 'Punti',
      c2: tab === 'forma' ? 'Ultime 3' : (tab === 'fantapunti' ? 'Media' : 'FP tot')
    };
  }

  function classificaRighe(tab) {
    var g = Math.max(1, L.giornataCorrente);
    return ordinata(tab).map(function (t, i) {
      var c1 = tab === 'fantapunti' ? fp(t.fp) : t.pt;
      var c2 = tab === 'forma' ? t.form : (tab === 'fantapunti' ? fp(t.fp / g) : fp(t.fp));
      var col = i < 3 ? ACCENT : (i > L.squadre.length - 3 ? RUST : FAINT);
      return '<div class="row' + (i < 3 ? ' podio' : '') + '">' +
        '<span class="team"><span class="pos num" style="color:' + col + '">' + (i + 1) + '</span>' +
        '<span class="name">' + esc(t.nome) + '</span></span>' +
        '<span class="cols"><span class="c1 num">' + esc(c1) + '</span><span class="c2 num">' + esc(c2) + '</span></span>' +
        '</div>';
    }).join('');
  }

  function montaClassifica(root) {
    var tab = 'classifica';
    function draw() {
      var h = classificaHead(tab);
      html(root.querySelector('[data-slot="head"]'),
        '<span>Squadra</span><span class="cols"><span>' + h.c1 + '</span><span>' + h.c2 + '</span></span>');
      html(root.querySelector('[data-slot="rows"]'), classificaRighe(tab));
      root.querySelectorAll('.tab').forEach(function (b) {
        b.setAttribute('aria-selected', String(b.dataset.tab === tab));
      });
    }
    root.querySelectorAll('.tab').forEach(function (b) {
      b.addEventListener('click', function () { tab = b.dataset.tab; draw(); });
    });
    draw();
  }

  /* ---------------- home ---------------- */

  function heroArt(a) {
    if (a.foto) return '<img src="' + esc(a.foto) + '" alt="">';
    return '<svg viewBox="0 0 900 330" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<rect width="900" height="330" fill="#12452F"></rect>' +
      '<g stroke="#EFE7D7" stroke-opacity="0.34" stroke-width="2" fill="none">' +
      '<rect x="40" y="26" width="820" height="278"></rect>' +
      '<line x1="450" y1="26" x2="450" y2="304"></line>' +
      '<circle cx="450" cy="165" r="58"></circle>' +
      '<rect x="40" y="80" width="112" height="170"></rect>' +
      '<rect x="748" y="80" width="112" height="170"></rect></g>' +
      '<text x="450" y="176" text-anchor="middle" fill="#EFE7D7" fill-opacity="0.5" font-family="Archivo, Arial, sans-serif" font-size="13" letter-spacing="4">[FOTO DI COPERTINA]</text>' +
      '</svg>';
  }

  function schedaNews(n) {
    return '<article class="card">' +
      '<div class="thumb" style="background:' + esc(n.tint) + '"><span>' + esc(n.mark) + '</span></div>' +
      '<div class="cat" style="color:' + (n.catId === 'mercato' ? RUST : ACCENT) + '">' + esc(n.cat) + '</div>' +
      '<h2>' + esc(n.titolo) + '</h2>' +
      '<p>' + esc(n.dek) + '</p>' +
      '<div class="meta">di ' + esc(n.autore) + ' &middot; ' + esc(n.tempo) + '</div>' +
      '</article>';
  }

  function paginaHome() {
    var a = L.apertura;
    html($('[data-slot="hero-art"]'), heroArt(a));
    html($('[data-slot="hero-kicker"]'), esc(a.kicker));
    html($('[data-slot="hero-title"]'), esc(a.titolo));
    html($('[data-slot="hero-dek"]'), esc(a.dek));
    html($('[data-slot="hero-byline"]'),
      '<span class="cat">' + esc(a.cat) + '</span><span>&middot;</span><span>di ' + esc(a.autore) + '</span><span>&middot;</span><span>' + esc(a.tempo) + '</span>');

    var filtro = 'tutte';
    var contenitore = $('[data-slot="news"]');
    function drawNews() {
      var l = L.news.filter(function (n) { return filtro === 'tutte' || n.catId === filtro; });
      html(contenitore, l.map(schedaNews).join(''));
      document.querySelectorAll('[data-filtro]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.filtro === filtro));
      });
    }
    document.querySelectorAll('[data-filtro]').forEach(function (b) {
      b.addEventListener('click', function () { filtro = b.dataset.filtro; drawNews(); });
    });
    drawNews();

    html($('[data-slot="topflop"]'), L.topflop.map(function (p) {
      return '<div class="tf"><span class="fv num" style="background:' + (p.top ? ACCENT : RUST) + '">' + esc(p.fv) + '</span>' +
        '<span class="who"><b>' + esc(p.nome) + '</b><span>' + esc(p.nota) + '</span></span></div>';
    }).join(''));

    html($('[data-slot="scadenza"]'), esc(L.prossimaScadenza));
    montaClassifica($('[data-slot="classifica"]'));
  }

  /* ---------------- giornata ---------------- */

  var RUOLI = ['P', 'D', 'D', 'D', 'C', 'C', 'C', 'A', 'A', 'A'];
  var VOTI  = [6.5, 6.0, 7.0, 5.5, 6.5, 8.0, 6.0, 7.5, 5.0, 6.5];
  var BONUS = ['', '', '+1 assist', '-0.5', '', '+3 gol', '', '+3 gol', '', ''];

  function formazione(nome, modulo, tot) {
    var righe = RUOLI.map(function (r, i) {
      var v = VOTI[i];
      var col = v >= 7 ? ACCENT : (v < 6 ? RUST : INK);
      var rc = r === 'P' ? FAINT : (r === 'A' ? RUST : ACCENT);
      return '<div class="pl"><span class="ruolo" style="color:' + rc + '">' + r + '</span>' +
        '<span class="nome">[GIOCATORE ' + (i + 1) + ']</span>' +
        '<span class="bonus">' + BONUS[i] + '</span>' +
        '<span class="voto num" style="color:' + col + '">' + v.toFixed(1) + '</span></div>';
    }).join('');
    return '<div class="lineup"><header><b>' + esc(nome) + '</b><span class="num">' + modulo + '</span></header>' + righe +
      '<footer><span>Totale + modificatore</span><b class="num">' + esc(tot) + '</b></footer></div>';
  }

  function paginaGiornata() {
    var gio = L.giornataCorrente, sel = 0;
    var chiavi = Object.keys(L.giornate).map(Number).sort(function (a, b) { return a - b; });
    var minG = chiavi[0], maxG = chiavi[chiavi.length - 1];

    function draw() {
      var l = L.giornate[gio] || [];
      if (sel >= l.length) sel = 0;
      var m = l[sel];

      html($('[data-slot="gio-eyebrow"]'), gio === L.giornataCorrente ? 'Ultima giornata disputata' : 'Archivio');
      html($('[data-slot="gio-titolo"]'), 'Giornata ' + gio);
      html($('[data-slot="gio-label"]'), 'Giornata ' + gio + ' / ' + L.giornateTotali);
      $('[data-gio="prev"]').disabled = gio <= minG;
      $('[data-gio="next"]').disabled = gio >= maxG;

      html($('[data-slot="match-list"]'), l.map(function (x, i) {
        function lato(nome, gol, fpv, vinta, pari) {
          var dot = vinta ? ACCENT : (pari ? '#C9C0AE' : RUST);
          return '<span class="side"><span class="who"><span class="dot" style="background:' + dot + '"></span>' +
            '<span class="nm" style="font-weight:' + (vinta || pari ? 700 : 400) + '">' + esc(nome) + '</span></span>' +
            '<span class="scores"><span class="fp num">' + fp(fpv) + '</span><span class="gol num">' + gol + '</span></span></span>';
        }
        var pari = x.golCasa === x.golFuori;
        return '<button class="match" type="button" data-match="' + i + '" aria-pressed="' + (i === sel) + '">' +
          lato(x.casa, x.golCasa, x.fpCasa, x.golCasa > x.golFuori, pari) +
          lato(x.fuori, x.golFuori, x.fpFuori, x.golFuori > x.golCasa, pari) +
          '</button>';
      }).join(''));

      document.querySelectorAll('[data-match]').forEach(function (b) {
        b.addEventListener('click', function () { sel = Number(b.dataset.match); draw(); });
      });

      if (!m) return;
      html($('[data-slot="match-title"]'), esc(m.casa) + '<span class="vs">vs</span>' + esc(m.fuori));
      html($('[data-slot="match-esito"]'),
        m.golCasa === m.golFuori ? 'Pareggio' : 'Vince ' + esc(m.golCasa > m.golFuori ? m.casa : m.fuori));
      html($('[data-slot="lineups"]'),
        formazione(m.casa, '3-4-3', fp(m.fpCasa)) + formazione(m.fuori, '3-5-2', fp(m.fpFuori)));
      html($('[data-slot="match-kpi"]'), [
        { l: 'Fantapunti totali', v: fp(m.fpCasa + m.fpFuori), n: 'somma delle due squadre' },
        { l: 'Modificatore difesa', v: '+3', n: 'assegnato a ' + m.casa },
        { l: 'Panchine usate', v: '2 su 3', n: 'cambi entrati nel punteggio' }
      ].map(function (k) {
        return '<div class="kpi"><span class="label">' + esc(k.l) + '</span><span class="value">' + esc(k.v) + '</span><span class="note">' + esc(k.n) + '</span></div>';
      }).join(''));
    }

    $('[data-gio="prev"]').addEventListener('click', function () { gio = Math.max(minG, gio - 1); sel = 0; draw(); });
    $('[data-gio="next"]').addEventListener('click', function () { gio = Math.min(maxG, gio + 1); sel = 0; draw(); });
    draw();
  }

  /* ---------------- squadre ---------------- */

  var REPARTI = [
    { label: 'Portieri',       colore: FAINT,     n: 3, base: 12, step: 4 },
    { label: 'Difensori',      colore: ACCENT,    n: 4, base: 22, step: 6 },
    { label: 'Centrocampisti', colore: '#1E4C7A', n: 4, base: 42, step: 6 },
    { label: 'Attaccanti',     colore: RUST,      n: 4, base: 78, step: 6 }
  ];

  function rosaHTML() {
    var giocatori = 0, crediti = 0;
    var out = REPARTI.map(function (r) {
      var righe = [];
      for (var i = 0; i < r.n; i++) {
        var costo = r.base - i * r.step;
        giocatori++; crediti += costo;
        righe.push('<div class="rosa-row"><span class="nome">[GIOCATORE ' + (i + 1) + ']</span>' +
          '<span class="club">[CLUB]</span>' +
          '<span class="fm num">' + (6.5 - i * 0.2).toFixed(2) + '</span>' +
          '<span class="costo num">' + costo + '</span></div>');
      }
      return '<div class="reparto"><i style="background:' + r.colore + '"></i><b>' + r.label + '</b></div>' + righe.join('');
    }).join('');
    return { html: out, info: giocatori + ' giocatori · crediti spesi ' + crediti + '/500' };
  }

  function paginaSquadre() {
    var lista = ordinata('classifica');
    var sel = 0;

    function draw() {
      html($('[data-slot="teamlist"]'), '<div class="lbl">Le ' + lista.length + ' squadre</div>' +
        lista.map(function (t, i) {
          return '<button type="button" data-team="' + i + '" aria-pressed="' + (i === sel) + '">' +
            '<span class="idx num">' + (i + 1) + '</span><span class="nm">' + esc(t.nome) + '</span>' +
            '<span class="pt num">' + t.pt + '</span></button>';
        }).join(''));
      document.querySelectorAll('[data-team]').forEach(function (b) {
        b.addEventListener('click', function () { sel = Number(b.dataset.team); draw(); });
      });

      var t = lista[sel];
      var iniz = t.nome.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
      html($('[data-slot="crest"]'), esc(iniz));
      html($('[data-slot="team-nome"]'), esc(t.nome));
      html($('[data-slot="team-sub"]'), 'allenatore ' + esc(t.allenatore) + ' &middot; in lega dal ' + t.dal);

      var titoli = L.albo.filter(function (a) { return a.campione === t.nome; }).length;
      var trofei = titoli > 0
        ? [{ l: titoli === 1 ? '1 scudetto' : titoli + ' scudetti', c: ACCENT }]
        : [{ l: 'nessun titolo', c: FAINT }];
      html($('[data-slot="trofei"]'), trofei.map(function (x) {
        return '<div class="trofeo" style="color:' + x.c + '">' + TROFEO + '<span>' + esc(x.l) + '</span></div>';
      }).join(''));

      html($('[data-slot="team-kpi"]'), [
        { l: 'Punti', v: t.pt },
        { l: 'Fantapunti', v: fp(t.fp) },
        { l: 'Media FP', v: fp(t.fp / Math.max(1, L.giornataCorrente)) },
        { l: 'Posizione', v: (sel + 1) + 'ª' }
      ].map(function (k) {
        return '<div class="kpi"><span class="label">' + esc(k.l) + '</span><span class="value">' + esc(k.v) + '</span></div>';
      }).join(''));

      var rosa = rosaHTML();
      html($('[data-slot="rosa"]'), rosa.html);
      html($('[data-slot="rosa-info"]'), esc(rosa.info));

      var storia = L.albo.map(function (a) {
        var p = a.campione === t.nome ? 'Campione' : (a.secondo === t.nome ? '2º posto' : null);
        return p ? { anno: a.anno, piazz: p, col: ACCENT } : null;
      }).filter(Boolean).slice(0, 5);
      if (!storia.length) storia = [{ anno: 'dal ' + t.dal, piazz: 'nessun podio', col: RUST }];
      html($('[data-slot="storico"]'), storia.map(function (s) {
        return '<div class="storico-row"><span class="anno">' + esc(s.anno) + '</span>' +
          '<span class="piazz" style="color:' + s.col + '">' + esc(s.piazz) + '</span></div>';
      }).join(''));
    }
    draw();
  }

  /* ---------------- albo e mercato ---------------- */

  function paginaAlbo() {
    var tab = 'albo', filtro = 'tutti';

    html($('[data-slot="albo-rows"]'), L.albo.map(function (a) {
      return '<div class="albo-row"><span class="col-anno num">' + esc(a.anno) + '</span>' +
        '<span class="col-camp"><i></i><b>' + esc(a.campione) + '</b></span>' +
        '<span class="col-sec">' + esc(a.secondo) + '</span>' +
        '<span class="col-fp num">' + esc(a.fp) + '</span></div>';
    }).join(''));

    var vincite = {};
    L.albo.forEach(function (a) { vincite[a.campione] = (vincite[a.campione] || 0) + 1; });
    var bacheca = Object.keys(vincite).map(function (k) { return { nome: k, n: vincite[k] }; })
      .sort(function (a, b) { return b.n - a.n || a.nome.localeCompare(b.nome); });
    html($('[data-slot="bacheca"]'), bacheca.map(function (b) {
      return '<div class="bacheca-row"><span class="nm">' + esc(b.nome) + '</span>' +
        '<span class="cups" style="color:' + ACCENT + '">' + TROFEO.repeat(Math.min(b.n, 4)) + '</span>' +
        '<span class="n num">' + b.n + '</span></div>';
    }).join(''));

    html($('[data-slot="record"]'), L.record.map(function (r) {
      return '<div class="record"><span class="v">' + esc(r.valore) + '</span><span class="t">' + esc(r.testo) + '</span></div>';
    }).join(''));

    var campione = L.albo[0];
    html($('[data-slot="champ-anno"]'), 'Campione in carica ' + esc(campione.anno));
    html($('[data-slot="champ-nome"]'), esc(campione.campione));
    html($('[data-slot="champ-sub"]'), esc(campione.fp) + ' fantapunti');

    html($('[data-slot="spese"]'), L.spese.map(function (s) {
      return '<div class="spesa-row"><span class="who"><b>' + esc(s.giocatore) + '</b><span>' + esc(s.squadra) + '</span></span>' +
        '<span class="cr num">' + s.crediti + '</span></div>';
    }).join(''));
    html($('[data-slot="finestra"]'), esc(L.finestraMercato));

    function drawMercato() {
      var l = L.mercato.filter(function (m) { return filtro === 'tutti' || m.tipo === filtro; });
      html($('[data-slot="movimenti"]'), l.map(function (m) {
        var c = m.tipo === 'asta' ? RUST : ACCENT;
        return '<div class="mov"><span class="tag" style="background:' + c + '">' + esc(m.tipo) + '</span>' +
          '<span class="body"><b>' + esc(m.titolo) + '</b><span>' + esc(m.dettaglio) + '</span></span>' +
          '<span class="right"><b class="num" style="color:' + (m.tipo === 'asta' ? RUST : INK) + '">' + esc(m.crediti) + '</b>' +
          '<span>' + esc(m.data) + '</span></span></div>';
      }).join(''));
      document.querySelectorAll('[data-filtro-mercato]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.filtroMercato === filtro));
      });
    }
    document.querySelectorAll('[data-filtro-mercato]').forEach(function (b) {
      b.addEventListener('click', function () { filtro = b.dataset.filtroMercato; drawMercato(); });
    });
    drawMercato();

    function drawTab() {
      $('[data-sezione="albo"]').hidden = tab !== 'albo';
      $('[data-sezione="mercato"]').hidden = tab !== 'mercato';
      html($('[data-slot="albo-titolo"]'), tab === 'albo' ? 'Albo d’oro' : 'Mercato');
      document.querySelectorAll('[data-tab-albo]').forEach(function (b) {
        b.setAttribute('aria-selected', String(b.dataset.tabAlbo === tab));
      });
    }
    document.querySelectorAll('[data-tab-albo]').forEach(function (b) {
      b.addEventListener('click', function () { tab = b.dataset.tabAlbo; drawTab(); });
    });
    drawTab();
  }

  /* ---------------- regolamento ---------------- */

  function paginaRegolamento() {
    var r = L.regolamento;
    if (!r) return;
    html($('[data-slot="reg-intro"]'), esc(r.intro || ''));
    var agg = $('[data-slot="reg-aggiornato"]');
    if (agg) agg.textContent = r.aggiornato ? ('aggiornato al ' + r.aggiornato) : '';

    var toc = (r.sezioni || []).map(function (s, i) {
      return '<a href="#reg-' + i + '"><span class="idx num">' + (i + 1) + '</span>' + esc(s.titolo) + '</a>';
    }).join('');
    html($('[data-slot="reg-toc"]'), toc);

    html($('[data-slot="reg-body"]'), (r.sezioni || []).map(function (s, i) {
      var testo = s.testo == null ? [] : (Array.isArray(s.testo) ? s.testo : [s.testo]);
      var par = testo.filter(function (t) { return t; })
        .map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
      var punti = (s.punti && s.punti.length)
        ? '<ul>' + s.punti.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'
        : '';
      return '<section class="reg-art" id="reg-' + i + '">' +
        '<div class="reg-num num">' + String(i + 1).padStart(2, '0') + '</div>' +
        '<div class="reg-content"><h2>' + esc(s.titolo) + '</h2>' + par + punti + '</div>' +
        '</section>';
    }).join(''));
  }

  /* ---------------- gusti pizze ---------------- */

  function paginaPizze() {
    var a = L.pizzeAnnuncio;
    if (a) {
      var occ = $('[data-slot="pz-occhiello"]'); if (occ) occ.textContent = a.occhiello || '';
      html($('[data-slot="pz-titolo"]'), esc(a.titolo || ''));
      html($('[data-slot="pz-annuncio"]'), (a.paragrafi || []).map(function (t) {
        return '<p>' + esc(t) + '</p>';
      }).join(''));
    }
    var l = L.pizze || [];
    if (!l.length) return;
    html($('[data-slot="pizze"]'), l.map(function (p) {
      return '<article class="pz-card">' +
        '<div class="pz-id">' +
          '<h2>' + esc(p.nome) + '</h2>' +
          '<p class="pz-ing">' + esc(p.ingredienti || '') + '</p>' +
        '</div>' +
        (p.nota ? '<p class="pz-note">' + esc(p.nota) + '</p>' : '') +
      '</article>';
    }).join(''));
  }

  /* ---------------- comune ---------------- */

  function comune() {
    var oggi = new Date().toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    document.querySelectorAll('[data-slot="data-oggi"]').forEach(function (n) { n.textContent = oggi; });
    document.querySelectorAll('[data-slot="lega"]').forEach(function (n) {
      n.textContent = L.nome + ' · ' + L.squadre.length + ' squadre';
    });
    document.querySelectorAll('[data-slot="lega-nome"]').forEach(function (n) { n.textContent = L.nome; });
    document.querySelectorAll('[data-slot="stagione"]').forEach(function (n) { n.textContent = L.stagione; });
    document.querySelectorAll('[data-slot="giornata-stato"]').forEach(function (n) {
      n.textContent = 'Giornata ' + L.giornataCorrente + ' chiusa';
    });
    document.querySelectorAll('[data-slot="dopo-giornate"]').forEach(function (n) {
      n.textContent = 'dopo ' + L.giornataCorrente + ' giornate';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    comune();
    var p = document.body.dataset.page;
    if (p === 'home') paginaHome();
    else if (p === 'giornata') paginaGiornata();
    else if (p === 'squadre') paginaSquadre();
    else if (p === 'albo') paginaAlbo();
    else if (p === 'regolamento') paginaRegolamento();
    else if (p === 'pizze') paginaPizze();
  });
})();
