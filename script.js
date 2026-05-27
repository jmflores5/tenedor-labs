
// ── TAPE ──
const tapeValues = ['UNDER CONSTRUCTION', '·', 'FORK IN PROGRESS', '·'];
const tapeItems =  Array.from({ length: 24 }, (_, i) => tapeValues[i % 4]);

const track = document.getElementById('tapeTrack');
// double it for seamless loop
[...tapeItems, ...tapeItems].forEach(item => {
  const s = document.createElement('span');
  s.textContent = item;
  if (item === '·') s.classList.add('separator');
  track.appendChild(s);
});

// ── TERMINAL ──
const lines = [
  { text: '$ ./build.sh --project tenedor-labs', cls: 't-cmd', delay: 200 },
  { text: '', cls: 't-dim', delay: 600 },
  { text: '> scanning for unsolved problems...     <span class="t-ok">done</span>', delay: 800 },
  { text: '> identifying human-driven gaps...      <span class="t-ok">done</span>', delay: 1100 },
  { text: '> mapping forks in the road...          <span class="t-ok">done</span>', delay: 1400 },
  { text: '', cls: 't-dim', delay: 1700 },
  { text: '> compiling ideas...                    <span class="t-ok">done</span>', delay: 1900 },
  { text: '> rendering solutions...                <span class="t-ok">done</span>', delay: 2300 },
  { text: '> stress-testing edge cases...          <span class="t-ok">done</span>', delay: 2700 },
  { text: '', cls: 't-dim', delay: 3000 },
  { text: '> cracking open an energy drink...      <span class="t-ok">done</span>', delay: 3100 },
  { text: '> committing to main...                 <span class="t-ok">done</span>', delay: 3500 },
  { text: '', cls: 't-dim', delay: 3800 },
  { text: '> packaging Arruga v0.1...              <span class="t-ok">done</span>', delay: 4000 },
  { text: '> deploying to humans...                <span class="t-bar-wrap">████████░░</span>  80%', delay: 4400 },
  { text: '', cls: 't-dim', delay: 4900 },
  { text: '> status: <span class="t-ok">LAUNCHING SOON</span>', delay: 5100 },
  { text: '$ <span class="cursor"></span>', delay: 5600 },
];

const body = document.getElementById('termBody');

lines.forEach(({ text, cls, delay }) => {
  setTimeout(() => {
    const el = document.createElement('span');
    el.classList.add('t-line');
    if (cls) el.classList.add(cls);
    else el.classList.add('t-prompt');
    el.innerHTML = text;
    el.style.opacity = '1';
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
  }, delay);
});
