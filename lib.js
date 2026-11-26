const LV=['Débutant','Intermédiaire','Confirmé'];
const TPL={
html:`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ma page</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Bonjour Talco !</h1>
    <p>Modifiez le HTML, le CSS ou le JS : le résultat change tout de suite.</p>
    <button id="btn">Clique-moi</button>
  </main>
  <script src="script.js"></script>
</body>
</html>`,
css:`body{font-family:system-ui;display:grid;place-items:center;min-height:100vh;margin:0;background:#1b1035;color:#fff;text-align:center}
h1{font-size:3rem;margin:0 0 .5rem;background:linear-gradient(90deg,#8b5cf6,#ec4899);-webkit-background-clip:text;background-clip:text;color:transparent}
button{padding:.7rem 1.4rem;border:0;border-radius:99px;background:#ec4899;color:#fff;font-size:1rem;cursor:pointer}`,
js:`let n = 0;
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  n++;
  btn.textContent = 'Clics : ' + n;
});`};
const LIB=[
{l:0,t:'html',n:'Squelette de page',d:'La base de toute page web.',c:`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Titre de l'onglet</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>`},
{l:0,t:'html',n:'Titres et texte',d:'h1 est le titre principal, p un paragraphe.',c:`<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<p>Un paragraphe avec du <strong>gras</strong> et de l'<em>italique</em>.</p>`},
{l:0,t:'html',n:'Lien et image',d:'href = destination du lien, alt = description de l\'image.',c:`<a href="https://example.com" target="_blank">Un lien</a>
<img src="https://picsum.photos/400/200" alt="Une photo au hasard">`},
{l:0,t:'html',n:'Listes',d:'ul = puces, ol = numéros, li = un élément.',c:`<ul>
  <li>Pommes</li>
  <li>Poires</li>
</ul>
<ol>
  <li>Étape 1</li>
  <li>Étape 2</li>
</ol>`},
{l:0,t:'html',n:'Champ et bouton',d:'Pour récupérer ce que tape la personne.',c:`<input id="nom" placeholder="Ton prénom">
<button id="ok">Valider</button>
<p id="rep"></p>`},
{l:1,t:'html',n:'Formulaire complet',d:'label relié à son champ, required pour obliger la saisie.',c:`<form>
  <label for="mail">Email</label>
  <input id="mail" type="email" required>
  <label for="pays">Pays</label>
  <select id="pays"><option>France</option><option>Belgique</option></select>
  <textarea placeholder="Message"></textarea>
  <button type="submit">Envoyer</button>
</form>`},
{l:1,t:'html',n:'Tableau',d:'thead = en-tête, tbody = corps, th = titre de colonne.',c:`<table>
  <thead><tr><th>Nom</th><th>Âge</th></tr></thead>
  <tbody>
    <tr><td>Léa</td><td>16</td></tr>
    <tr><td>Tom</td><td>17</td></tr>
  </tbody>
</table>`},
{l:1,t:'html',n:'Balises sémantiques',d:'Elles décrivent le rôle de chaque zone (utile pour le référencement et l\'accessibilité).',c:`<header><nav><a href="#a">Accueil</a></nav></header>
<main>
  <section id="a"><h2>Section</h2></section>
  <article><h2>Article</h2></article>
</main>
<footer>© 2026</footer>`},
{l:1,t:'html',n:'Vidéo et iframe',d:'Intégrer une vidéo ou une autre page.',c:`<video controls width="320" src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
<iframe width="320" height="180" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>`},
{l:2,t:'html',n:'Boîte de dialogue <dialog>',d:'Fenêtre modale native, sans JavaScript compliqué.',c:`<button onclick="d.showModal()">Ouvrir</button>
<dialog id="d">
  <p>Salut !</p>
  <button onclick="d.close()">Fermer</button>
</dialog>`},
{l:2,t:'html',n:'Balises meta (SEO, mobile)',d:'À mettre dans le head.',c:`<meta name="description" content="Description de la page">
<meta name="theme-color" content="#8b5cf6">
<meta property="og:title" content="Titre pour les réseaux">
<meta property="og:image" content="https://picsum.photos/1200/630">`},
{l:0,t:'css',n:'Couleurs et police',d:'Style général de la page.',c:`body{
  font-family:system-ui,sans-serif;
  background:#111;
  color:#eee;
  margin:0;
}`},
{l:0,t:'css',n:'Centrer au milieu',d:'Le centrage classique avec grid.',c:`body{
  display:grid;
  place-items:center;
  min-height:100vh;
}`},
{l:0,t:'css',n:'Bouton arrondi',d:':hover = quand la souris passe dessus.',c:`button{
  padding:.7rem 1.4rem;
  border:0;
  border-radius:99px;
  background:#8b5cf6;
  color:#fff;
  cursor:pointer;
}
button:hover{background:#ec4899}`},
{l:1,t:'css',n:'Carte avec ombre',d:'Un bloc propre : marge intérieure, coins arrondis, ombre.',c:`.carte{
  padding:1.2rem;
  border-radius:16px;
  background:#fff;
  color:#222;
  box-shadow:0 8px 24px rgba(0,0,0,.25);
}`},
{l:1,t:'css',n:'Flexbox en ligne',d:'Aligne des éléments côte à côte avec espacement.',c:`.ligne{
  display:flex;
  gap:12px;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
}`},
{l:1,t:'css',n:'Grille responsive',d:'Autant de colonnes que la largeur le permet.',c:`.grille{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:16px;
}`},
{l:1,t:'css',n:'Animation',d:'@keyframes décrit les étapes, animation l\'applique.',c:`@keyframes pulse{
  0%,100%{transform:scale(1)}
  50%{transform:scale(1.15)}
}
.anim{animation:pulse 1.5s ease-in-out infinite}`},
{l:1,t:'css',n:'Adapter au mobile',d:'Ces règles ne s\'appliquent que sur petit écran.',c:`@media (max-width:600px){
  h1{font-size:1.8rem}
  .ligne{flex-direction:column}
}`},
{l:2,t:'css',n:'Variables et mode sombre auto',d:'Un seul endroit pour les couleurs, thème selon le système.',c:`:root{--fond:#fff;--texte:#222;--accent:#8b5cf6}
@media (prefers-color-scheme:dark){
  :root{--fond:#111;--texte:#eee}
}
body{background:var(--fond);color:var(--texte)}
a{color:var(--accent)}`},
{l:2,t:'css',n:'Effet verre (glassmorphism)',d:'Fond flou translucide, à poser sur une image ou un dégradé.',c:`.verre{
  background:rgba(255,255,255,.12);
  backdrop-filter:blur(14px);
  border:1px solid rgba(255,255,255,.25);
  border-radius:20px;
  padding:1.5rem;
}`},
{l:2,t:'css',n:'Texte dégradé',d:'Dégradé de couleurs dans les lettres.',c:`.degrade{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}`},
{l:0,t:'js',n:'Message au clic',d:'Le plus simple : réagir à un clic.',c:`document.querySelector('button').onclick = () => {
  alert('Bravo !');
};`},
{l:0,t:'js',n:'Changer un texte',d:'querySelector trouve un élément, textContent change son texte.',c:`const titre = document.querySelector('h1');
titre.textContent = 'Nouveau titre';`},
{l:0,t:'js',n:'Variables et condition',d:'let = variable modifiable, const = constante.',c:`const age = 16;
let message;
if (age >= 18) {
  message = 'Majeur';
} else {
  message = 'Mineur';
}
document.body.append(message);`},
{l:0,t:'js',n:'Boucle for',d:'Répéter une action plusieurs fois.',c:`for (let i = 1; i <= 5; i++) {
  document.body.insertAdjacentHTML('beforeend', '<p>Ligne ' + i + '</p>');
}`},
{l:1,t:'js',n:'Lire un champ et répondre',d:'À utiliser avec le bloc HTML « Champ et bouton ».',c:`document.querySelector('#ok').addEventListener('click', () => {
  const nom = document.querySelector('#nom').value;
  document.querySelector('#rep').textContent = 'Salut ' + nom + ' !';
});`},
{l:1,t:'js',n:'Créer un élément',d:'Fabriquer du HTML depuis JavaScript.',c:`const li = document.createElement('li');
li.textContent = 'Nouvel élément';
li.classList.add('item');
document.querySelector('ul').appendChild(li);`},
{l:1,t:'js',n:'Tableau et map',d:'map transforme chaque élément d\'une liste.',c:`const prix = [10, 20, 30];
const ttc = prix.map(p => p * 1.2);
document.body.append(ttc.join(' - '));`},
{l:1,t:'js',n:'Mémoire localStorage',d:'Garde une valeur dans le navigateur. Bloqué dans l\'aperçu : testez après export.',c:`try {
  const vu = Number(localStorage.getItem('visites') || 0) + 1;
  localStorage.setItem('visites', vu);
  document.body.append('Visites : ' + vu);
} catch (e) {
  document.body.append('localStorage indisponible ici');
}`},
{l:2,t:'js',n:'fetch avec async/await',d:'Récupérer des données d\'une API.',c:`async function charger() {
  try {
    const rep = await fetch('https://api.github.com/users/octocat');
    if (!rep.ok) throw new Error(rep.status);
    const data = await rep.json();
    document.body.append(data.name);
  } catch (e) {
    document.body.append('Erreur : ' + e.message);
  }
}
charger();`},
{l:2,t:'js',n:'Debounce',d:'Attend que la saisie s\'arrête avant d\'agir.',c:`function debounce(fn, delai = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delai);
  };
}
const chercher = debounce(txt => console.log(txt), 400);`},
{l:2,t:'js',n:'Classe',d:'Un modèle pour créer des objets.',c:`class Joueur {
  #score = 0;
  constructor(nom) { this.nom = nom; }
  gagner(pts) { this.#score += pts; return this; }
  get score() { return this.#score; }
}
const j = new Joueur('Lea').gagner(10);
document.body.append(j.nom + ' : ' + j.score);`},
{l:2,t:'js',n:'Canvas animé',d:'Dessiner et animer avec requestAnimationFrame.',c:`const cv = document.createElement('canvas');
cv.width = 300; cv.height = 150;
document.body.append(cv);
const g = cv.getContext('2d');
let x = 0;
(function boucle() {
  g.clearRect(0, 0, 300, 150);
  g.fillStyle = '#ec4899';
  g.beginPath();
  g.arc(x % 300, 75, 20, 0, Math.PI * 2);
  g.fill();
  x += 2;
  requestAnimationFrame(boucle);
})();`}
];
const GUIDES=[
{l:0,n:'C\'est quoi HTML, CSS et JS ?',b:'<p>Pense à une maison : <b>HTML</b> = les murs et les pièces (la structure), <b>CSS</b> = la peinture et la déco (l\'apparence), <b>JavaScript</b> = l\'électricité (ce qui réagit et bouge).</p><p>Une page web est presque toujours ces trois langages ensemble.</p>'},
{l:0,n:'Premiers pas avec TalcoProg',b:'<ul><li>Un <b>dossier</b> = un projet. Il contient <code>index.html</code>, <code>style.css</code> et <code>script.js</code>, déjà reliés.</li><li>Clique un fichier pour l\'éditer : l\'aperçu se met à jour tout seul.</li><li>Onglet <b>Blocs</b> : « Insérer » ajoute le code dans le bon fichier.</li><li><b>+</b> ajoute un fichier (.html, .css ou .js).</li><li>Tout est sauvegardé dans ce navigateur. <b>Exporter</b> : page .html (tout fusionné) ou .json (réimportable avec Importer).</li></ul>'},
{l:0,n:'Structure d\'une page HTML',b:'<p>Chaque balise s\'ouvre <code>&lt;p&gt;</code> et se ferme <code>&lt;/p&gt;</code>. Les <b>attributs</b> donnent des détails : <code>&lt;a href="..."&gt;</code>.</p><ul><li><code>&lt;head&gt;</code> : infos invisibles (titre de l\'onglet, CSS).</li><li><code>&lt;body&gt;</code> : tout ce qu\'on voit.</li></ul><p>Teste le bloc « Squelette de page ».</p>'},
{l:0,n:'Les sélecteurs CSS',b:'<p>Un sélecteur dit à quoi s\'applique le style.</p><ul><li><code>h1</code> : toutes les balises h1</li><li><code>.carte</code> : les éléments avec <code>class="carte"</code></li><li><code>#titre</code> : l\'élément avec <code>id="titre"</code></li><li><code>.carte p</code> : les p dans une carte</li><li><code>a:hover</code> : un lien survolé</li></ul>'},
{l:1,n:'Flexbox en 5 minutes',b:'<p>Sur le <b>parent</b> : <code>display:flex</code>. Les enfants se mettent en ligne.</p><ul><li><code>gap</code> : espace entre enfants</li><li><code>justify-content</code> : alignement sur l\'axe principal (center, space-between…)</li><li><code>align-items</code> : alignement sur l\'autre axe</li><li><code>flex-wrap:wrap</code> : retour à la ligne</li><li><code>flex-direction:column</code> : en colonne</li></ul>'},
{l:1,n:'Grid : mise en page en grille',b:'<p><code>display:grid</code> sur le parent, puis <code>grid-template-columns</code>. Exemple : <code>1fr 2fr</code> = deux colonnes, la 2e deux fois plus large.</p><p>La ligne magique : <code>repeat(auto-fit,minmax(180px,1fr))</code> crée une grille qui s\'adapte seule à l\'écran.</p>'},
{l:1,n:'Manipuler la page avec le DOM',b:'<p>Le DOM est la page vue par JavaScript.</p><ul><li><code>document.querySelector(\'.x\')</code> : trouver un élément</li><li><code>el.textContent = \'...\'</code> : changer le texte</li><li><code>el.classList.toggle(\'actif\')</code> : ajouter/enlever une classe</li><li><code>el.addEventListener(\'click\', fn)</code> : réagir</li><li><code>document.createElement(\'div\')</code> : créer</li></ul><p>Place ton script en bas du body (ou après le HTML) pour que les éléments existent déjà.</p>'},
{l:2,n:'Asynchrone : promesses et await',b:'<p>Une requête réseau prend du temps. <code>fetch</code> renvoie une <b>promesse</b> ; <code>await</code> attend le résultat sans bloquer la page (dans une fonction <code>async</code>).</p><ul><li>Toujours entourer de <code>try/catch</code>.</li><li>Vérifier <code>rep.ok</code> avant <code>rep.json()</code>.</li><li>Plusieurs requêtes en parallèle : <code>await Promise.all([...])</code>.</li></ul>'},
{l:2,n:'Accessibilité et performance',b:'<ul><li>Toujours un <code>alt</code> sur les images utiles, un <code>label</code> par champ.</li><li>Préférer <code>button</code> à un div cliquable (clavier gratuit).</li><li>Contraste texte/fond suffisant ; ne pas supprimer <code>:focus</code> sans le remplacer.</li><li><code>loading="lazy"</code> sur les images hors écran.</li><li>Animer <code>transform</code> et <code>opacity</code> plutôt que <code>width</code> ou <code>top</code>.</li></ul>'},
{l:2,n:'Organiser un projet',b:'<p>Sépare HTML, CSS et JS dans des fichiers (comme dans TalcoProg). À l\'export .html, tout est fusionné en un seul fichier facile à héberger.</p><ul><li>Un fichier CSS/JS non relié dans le HTML est quand même ajouté à l\'aperçu.</li><li>Les scripts d\'un dossier partagent la même page : une fonction définie dans un fichier est utilisable dans l\'autre.</li><li>Exporte régulièrement en .json pour avoir une sauvegarde.</li></ul>'}
];
