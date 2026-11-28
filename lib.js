const LV=['Débutant','Intermédiaire','Confirmé'];
const LN={py:'python',cpp:'c++ cpp',kt:'kotlin',js:'javascript',css:'css',html:'html',jsx:'react jsx'};
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
});`,
rhtml:`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mon app React</title>
<style>
  body{font-family:system-ui;background:#1b1035;color:#fff;display:grid;place-items:center;min-height:100vh;margin:0}
  button{padding:.6rem 1.2rem;border:0;border-radius:99px;background:#ec4899;color:#fff;font-size:1rem;cursor:pointer}
</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" src="App.jsx"></script>
</body>
</html>`,
jsx:`const { useState } = React;

function App() {
  const [n, setN] = useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bonjour React !</h1>
      <button onClick={() => setN(n + 1)}>Clics : {n}</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`};
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
})();`},
{l:0,t:'py',n:'Hello et variables',d:'print affiche, f"..." insère des variables dans le texte.',c:`nom = "Talco"
age = 16
print(f"Bonjour {nom}, tu as {age} ans")`},
{l:0,t:'py',n:'Boucles et listes',d:'for parcourt une liste ou un range.',c:`fruits = ["pomme", "poire", "kiwi"]
for f in fruits:
    print(f.upper())
for i in range(1, 6):
    print(i, "x 3 =", i * 3)`},
{l:1,t:'py',n:'Lire une entrée',d:'input() demande un texte : TalcoProg vous demande les valeurs avant de lancer.',c:`nom = input("Ton prénom ? ")
n = int(input("Un nombre ? "))
print("Salut", nom, "- le double :", n * 2)`},
{l:1,t:'py',n:'Fonctions et dictionnaires',d:'def crée une fonction, un dict associe des clés à des valeurs.',c:`def moyenne(notes):
    return sum(notes) / len(notes)

eleves = {"Lea": [12, 15], "Tom": [9, 14, 17]}
for nom, notes in eleves.items():
    print(nom, round(moyenne(notes), 1))`},
{l:2,t:'py',n:'Compréhensions et lambda',d:'Construire des listes en une ligne.',c:`carres = [x**2 for x in range(10) if x % 2 == 0]
mots = sorted(["kiwi", "banane", "fig"], key=lambda m: len(m))
print(carres, mots)`},
{l:2,t:'py',n:'Classe avec dataclass',d:'Une classe de données sans code répétitif.',c:`from dataclasses import dataclass

@dataclass
class Joueur:
    nom: str
    score: int = 0

    def gagner(self, pts):
        self.score += pts

j = Joueur("Lea")
j.gagner(10)
print(j)`},
{l:0,t:'cpp',n:'Hello World C++',d:'Le point de départ : main est la fonction lancée au démarrage.',c:`#include <iostream>
using namespace std;

int main() {
    cout << "Bonjour Talco !" << endl;
    return 0;
}`},
{l:0,t:'cpp',n:'Variables et cin/cout',d:'cin lit une valeur, cout l\'affiche.',c:`#include <iostream>
#include <string>
using namespace std;

int main() {
    string nom;
    int age;
    cout << "Prénom et âge ? ";
    cin >> nom >> age;
    cout << nom << " a " << age << " ans" << endl;
}`},
{l:1,t:'cpp',n:'Boucles et vector',d:'vector est un tableau qui grandit.',c:`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4};
    v.push_back(1);
    for (int x : v) cout << x << " ";
    cout << endl;
}`},
{l:1,t:'cpp',n:'Fonctions et références',d:'& passe la variable elle-même, sans copie.',c:`#include <iostream>
using namespace std;

void doubler(int &n) { n *= 2; }

int main() {
    int a = 21;
    doubler(a);
    cout << a << endl;
}`},
{l:2,t:'cpp',n:'Classe et unique_ptr',d:'Gestion automatique de la mémoire (RAII).',c:`#include <iostream>
#include <memory>
#include <string>
using namespace std;

class Animal {
public:
    string nom;
    explicit Animal(string n) : nom(move(n)) {}
    virtual ~Animal() = default;
    virtual string cri() const { return "..."; }
};
class Chat : public Animal {
public:
    using Animal::Animal;
    string cri() const override { return "Miaou"; }
};

int main() {
    unique_ptr<Animal> a = make_unique<Chat>("Felix");
    cout << a->nom << " : " << a->cri() << endl;
}`},
{l:2,t:'cpp',n:'Lambdas et algorithmes',d:'sort, accumulate et lambdas de la bibliothèque standard.',c:`#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {5, 2, 9, 1};
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
    int somme = accumulate(v.begin(), v.end(), 0);
    for (int x : v) cout << x << " ";
    cout << "| somme = " << somme << endl;
}`},
{l:0,t:'kt',n:'Hello Kotlin',d:'fun main est le point de départ.',c:`fun main() {
    println("Bonjour Talco !")
}`},
{l:0,t:'kt',n:'val, var et when',d:'val = fixe, var = modifiable, when = condition à choix multiples.',c:`fun main() {
    val nom = "Lea"
    var points = 12
    points += 3
    val niveau = when {
        points >= 15 -> "Expert"
        points >= 10 -> "Confirmé"
        else -> "Débutant"
    }
    println("$nom : $niveau ($points pts)")
}`},
{l:1,t:'kt',n:'Listes, filter et map',d:'Transformer des collections en chaîne.',c:`fun main() {
    val notes = listOf(8, 12, 15, 17)
    val bonnes = notes.filter { it >= 10 }.map { it * 2 }
    println(bonnes)
    println("Moyenne : " + notes.average())
}`},
{l:1,t:'kt',n:'Data class',d:'Une classe de données avec copie et affichage gratuits.',c:`data class Joueur(val nom: String, val score: Int = 0)

fun main() {
    val a = Joueur("Lea")
    val b = a.copy(score = 10)
    println(a)
    println(b)
}`},
{l:2,t:'kt',n:'Coroutines',d:'Plusieurs tâches asynchrones, simplement.',c:`import kotlinx.coroutines.*

fun main() = runBlocking {
    val a = async { delay(300); 20 }
    val b = async { delay(300); 22 }
    println("Résultat : " + (a.await() + b.await()))
}`},
{l:2,t:'kt',n:'Null-safety et extensions',d:'Le type String? peut être null ; ?. et ?: évitent les plantages.',c:`fun String?.longueurSure(): Int = this?.length ?: 0

fun main() {
    val a: String? = null
    val b: String? = "Kotlin"
    println(a.longueurSure())
    println(b.longueurSure())
}`},
{l:0,t:'js',n:'Condition if / else if / else',d:`Choisir quoi faire selon une condition.`,c:`const note = 14;
if (note >= 16) {
  document.body.append('Très bien');
} else if (note >= 10) {
  document.body.append('Passable');
} else {
  document.body.append('À revoir');
}`,x:`JavaScript teste les conditions de haut en bas et exécute <b>la première qui est vraie</b>, puis ignore le reste. <code>===</code> compare valeur et type (préférable à <code>==</code>). Combine avec <code>&&</code> (et), <code>||</code> (ou) et <code>!</code> (non).`},
{l:0,t:'js',n:'switch',d:`Plusieurs cas sur une même valeur.`,c:`const jour = 'lundi';
switch (jour) {
  case 'samedi':
  case 'dimanche':
    document.body.append('Week-end');
    break;
  default:
    document.body.append('Semaine');
}`,x:`<code>switch</code> compare la valeur à chaque <code>case</code>. Sans <code>break</code>, l'exécution continue dans le cas suivant : ici c'est voulu pour regrouper samedi et dimanche. <code>default</code> sert quand rien ne correspond.`},
{l:1,t:'js',n:'Fonction fléchée et paramètres',d:`Valeur par défaut, rest et forme courte.`,c:`const saluer = (nom = 'toi', ...autres) =>
  'Salut ' + nom + ' (+' + autres.length + ')';
function carre(x) { return x * x; }
document.body.append(saluer(), ' | ', saluer('Lea', 'Tom', 'Zoe'), ' | ', carre(5));`,x:`<code>=></code> est une écriture courte de fonction ; sans accolades, elle renvoie directement l'expression. <code>nom = 'toi'</code> sert de valeur si l'argument manque. <code>...autres</code> (rest) rassemble tous les arguments restants dans un tableau.`},
{l:1,t:'js',n:'reduce, find, some',d:`Calculer ou chercher dans un tableau.`,c:`const nums = [4, 8, 15, 16];
const somme = nums.reduce((acc, n) => acc + n, 0);
const premierGrand = nums.find(n => n > 10);
const unPair = nums.some(n => n % 2 === 0);
document.body.append(somme + ' / ' + premierGrand + ' / ' + unPair);`,x:`<code>reduce</code> parcourt le tableau en gardant un accumulateur (<code>acc</code>, départ <code>0</code>). <code>find</code> renvoie le premier élément qui passe le test (ou <code>undefined</code>). <code>some</code> dit si au moins un élément passe ; <code>every</code> si tous passent.`},
{l:1,t:'js',n:'Objets et destructuration',d:`Extraire et copier des données.`,c:`const joueur = { nom: 'Lea', score: 12 };
const { nom, score } = joueur;
const copie = { ...joueur, score: 20 };
const [premier, ...reste] = [1, 2, 3];
document.body.append(nom + ' ' + score + ' ' + copie.score + ' ' + premier + ' ' + reste);`,x:`La destructuration crée des variables à partir des propriétés (objet) ou de la position (tableau). <code>{ ...joueur, score: 20 }</code> copie l'objet en changeant une valeur, sans modifier l'original. La copie est superficielle : les objets imbriqués restent partagés.`},
{l:1,t:'js',n:'try / catch / finally',d:`Gérer une erreur sans planter.`,c:`try {
  const data = JSON.parse('{ pas du json');
  document.body.append(data.x);
} catch (e) {
  document.body.append('Erreur : ' + e.message);
} finally {
  document.body.append(' | fin');
}`,x:`Le code du <code>try</code> s'arrête à la première erreur et saute au <code>catch</code>, qui reçoit l'erreur (<code>e.message</code> décrit le problème). <code>finally</code> s'exécute toujours, erreur ou non : pratique pour nettoyer. <code>throw new Error('...')</code> déclenche une erreur à la main.`},
{l:2,t:'js',n:'Closure (compteur privé)',d:`Une fonction qui se souvient de ses variables.`,c:`function creerCompteur() {
  let n = 0;
  return () => ++n;
}
const a = creerCompteur(), b = creerCompteur();
a(); a();
document.body.append(a() + ' ' + b());`,x:`La fonction renvoyée garde un accès à <code>n</code> même après la fin de <code>creerCompteur</code> : c'est une <b>closure</b>. Chaque appel de <code>creerCompteur</code> crée sa propre variable, donc <code>a</code> et <code>b</code> comptent séparément (résultat : <code>3 1</code>). Personne d'autre ne peut modifier <code>n</code>.`},
{l:2,t:'js',n:'Récursivité avec mémoïsation',d:`Une fonction qui s'appelle elle-même, en retenant ses résultats.`,c:`const memo = new Map();
function fib(n) {
  if (n < 2) return n;
  if (memo.has(n)) return memo.get(n);
  const r = fib(n - 1) + fib(n - 2);
  memo.set(n, r);
  return r;
}
document.body.append(fib(40));`,x:`Une fonction récursive a besoin d'un <b>cas de base</b> (<code>n < 2</code>) pour s'arrêter. Sans mémoire, <code>fib(40)</code> refait des centaines de millions de calculs ; avec la <code>Map</code>, chaque valeur n'est calculée qu'une fois. Une récursion trop profonde provoque une erreur « Maximum call stack ».`},
{l:0,t:'py',n:'if / elif / else',d:`Choisir selon une condition.`,c:`note = 14
if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Passable")
else:
    print("À revoir")`,x:`En Python, l'<b>indentation</b> (4 espaces) délimite les blocs, et la ligne se termine par <code>:</code>. <code>elif</code> signifie « sinon si ». Utilise <code>and</code>, <code>or</code>, <code>not</code> pour combiner, et <code>is None</code> pour tester l'absence de valeur.`},
{l:1,t:'py',n:'try / except / else / finally',d:`Gérer les erreurs proprement.`,c:`try:
    n = int("abc")
except ValueError as e:
    print("Erreur :", e)
else:
    print("OK", n)
finally:
    print("Toujours exécuté")`,x:`<code>except</code> attrape un type d'erreur précis (mieux qu'un <code>except</code> vide qui cache les bugs). <code>else</code> ne s'exécute que s'il n'y a eu aucune erreur ; <code>finally</code> s'exécute dans tous les cas. <code>raise ValueError("...")</code> lève une erreur.`},
{l:1,t:'py',n:'Slices et échange de variables',d:`Découper des listes, échanger deux valeurs.`,c:`mots = ["a", "b", "c", "d", "e"]
print(mots[1:4], mots[::-1], mots[-2:])
x, y = 3, 4
x, y = y, x
print(x, y)`,x:`<code>liste[début:fin:pas]</code> : la fin est <b>exclue</b>, les indices négatifs comptent depuis la fin (<code>-1</code> = dernier), <code>[::-1]</code> inverse. <code>x, y = y, x</code> échange deux variables sans variable temporaire.`},
{l:2,t:'py',n:'Générateur avec yield',d:`Produire des valeurs à la demande.`,c:`def fibo():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

g = fibo()
print([next(g) for _ in range(10)])`,x:`<code>yield</code> suspend la fonction et renvoie une valeur ; l'appel suivant reprend juste après. Les valeurs sont calculées <b>à la demande</b> : mémoire constante, et une boucle infinie reste sans danger tant qu'on ne demande qu'un nombre limité de valeurs.`},
{l:0,t:'cpp',n:'if / else et switch',d:`Conditions en C++.`,c:`#include <iostream>
using namespace std;

int main() {
    int jour = 6;
    if (jour >= 6) cout << "Week-end" << endl;
    else cout << "Semaine" << endl;
    switch (jour) {
        case 1: cout << "Lundi" << endl; break;
        case 6: cout << "Samedi" << endl; break;
        default: cout << "Autre" << endl;
    }
}`,x:`La condition est entre parenthèses. Les accolades sont facultatives pour une seule instruction, mais recommandées pour éviter les erreurs. <code>switch</code> fonctionne sur des entiers ou des <code>char</code> (pas sur des <code>string</code>) ; <code>break</code> empêche de passer au cas suivant.`},
{l:1,t:'cpp',n:'struct et tableau',d:`Regrouper des données.`,c:`#include <iostream>
#include <string>
using namespace std;

struct Eleve { string nom; int note; };

int main() {
    Eleve classe[2] = {{"Lea", 15}, {"Tom", 11}};
    for (const Eleve &e : classe)
        cout << e.nom << " : " << e.note << endl;
}`,x:`Une <code>struct</code> regroupe plusieurs champs sous un seul type. <code>for (const Eleve &e : classe)</code> parcourt le tableau : <code>&</code> évite de copier chaque élément et <code>const</code> interdit de le modifier. Un tableau C++ brut ne connaît pas sa taille : préfère <code>vector</code> ou <code>array</code>.`},
{l:1,t:'cpp',n:'Pointeurs',d:`Adresses mémoire : & et *.`,c:`#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int *p = &a;
    *p = 25;
    cout << a << " " << p << endl;
}`,x:`<code>&a</code> donne l'<b>adresse</b> de <code>a</code> ; <code>int *p</code> est un pointeur qui la stocke ; <code>*p</code> accède à la valeur pointée. Modifier <code>*p</code> modifie donc <code>a</code> (affiche <code>25</code>). L'adresse affichée change à chaque exécution. En C++ moderne, préfère les références et <code>unique_ptr</code>.`},
{l:2,t:'cpp',n:'Template et exceptions',d:`Fonction générique et gestion d'erreur.`,c:`#include <iostream>
#include <stdexcept>
using namespace std;

template <typename T>
T plusGrand(T a, T b) { return a > b ? a : b; }

int main() {
    cout << plusGrand(3, 7) << " " << plusGrand(2.5, 1.5) << endl;
    try {
        throw runtime_error("Oups");
    } catch (const exception &e) {
        cout << "Erreur : " << e.what() << endl;
    }
}`,x:`Un <code>template</code> écrit la fonction une fois pour tous les types : le compilateur génère une version pour <code>int</code> et une pour <code>double</code>. <code>throw</code> lève une exception, <code>catch</code> l'attrape (par référence constante pour éviter une copie).`},
{l:0,t:'kt',n:'if expression et boucles',d:`En Kotlin, if renvoie une valeur.`,c:`fun main() {
    val n = 7
    val parite = if (n % 2 == 0) "pair" else "impair"
    println("$n est $parite")
    for (i in 1..3) println("i = " + i)
    for (i in 10 downTo 0 step 5) println(i)
}`,x:`<code>if</code> est une <b>expression</b> : on peut stocker son résultat dans une variable. <code>1..3</code> inclut 3 (<code>1 until 3</code> l'exclut), <code>downTo</code> compte à rebours et <code>step</code> règle le pas. <code>"$n"</code> insère une variable dans un texte.`},
{l:1,t:'kt',n:'Arguments nommés et par défaut',d:`Des fonctions plus lisibles.`,c:`fun accueil(nom: String, politesse: String = "Bonjour", fort: Boolean = false): String {
    val t = politesse + " " + nom
    return if (fort) t.uppercase() else t
}

fun main() {
    println(accueil("Lea"))
    println(accueil("Tom", fort = true))
}`,x:`Un paramètre avec valeur par défaut devient facultatif. On peut nommer un argument à l'appel (<code>fort = true</code>) pour sauter les autres et rendre l'appel lisible. Les types sont écrits après le nom (<code>nom: String</code>).`},
{l:1,t:'kt',n:'Héritage avec open',d:`Les classes sont finales par défaut.`,c:`open class Animal(val nom: String) {
    open fun cri() = "..."
}
class Chien(nom: String) : Animal(nom) {
    override fun cri() = "Wouf"
}

fun main() {
    val a: Animal = Chien("Rex")
    println(a.nom + " : " + a.cri())
}`,x:`Pour hériter d'une classe ou redéfinir une méthode, il faut la marquer <code>open</code> ; la classe fille utilise <code>override</code>. <code>val nom</code> dans le constructeur crée directement une propriété. Même typée <code>Animal</code>, la variable appelle le <code>cri()</code> du <code>Chien</code> (polymorphisme).`},
{l:2,t:'kt',n:'sealed class et when',d:`Un ensemble fermé de cas, vérifié par le compilateur.`,c:`sealed class Forme {
    data class Cercle(val r: Double) : Forme()
    data class Rect(val l: Double, val h: Double) : Forme()
}

fun aire(f: Forme): Double = when (f) {
    is Forme.Cercle -> Math.PI * f.r * f.r
    is Forme.Rect -> f.l * f.h
}

fun main() {
    println(aire(Forme.Rect(3.0, 4.0)))
}`,x:`Une <code>sealed class</code> liste tous ses sous-types au même endroit, donc le <code>when</code> est <b>exhaustif</b> : pas de <code>else</code> nécessaire, et si tu ajoutes un cas, le compilateur signale les <code>when</code> à compléter. Dans chaque branche, <code>f</code> est automatiquement vu comme <code>Cercle</code> ou <code>Rect</code> (smart cast).`},
{l:0,t:'jsx',n:'Démarrage React',d:`Le minimum pour afficher un composant.`,c:`function App() {
  return <h1>Bonjour React !</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`,x:`TalcoProg charge React 18 et Babel automatiquement dans l'aperçu et ajoute <code>&lt;div id="root"&gt;</code> s'il manque. Un <b>composant</b> est une fonction à nom majuscule qui renvoie du JSX. <code>createRoot(...).render(...)</code> branche l'application sur <code>#root</code>.`},
{l:0,t:'jsx',n:'Composant avec props',d:`Passer des données à un composant.`,c:`function Carte({ titre, couleur = '#ec4899', children }) {
  return (
    <div style={{ borderLeft: '6px solid ' + couleur, padding: 12, margin: 8, background: '#fff2', borderRadius: 8 }}>
      <h3>{titre}</h3>
      {children}
    </div>
  );
}
// Utilisation : <Carte titre="Salut">Contenu</Carte>`,x:`Les <b>props</b> sont les paramètres du composant (lecture seule). <code>children</code> contient ce qui est écrit entre les balises. <code>style</code> prend un <b>objet</b> : les doubles accolades sont l'accolade JSX puis l'accolade de l'objet. Les propriétés CSS s'écrivent en camelCase (<code>borderLeft</code>).`},
{l:0,t:'jsx',n:'État avec useState',d:`Un compteur qui se met à jour.`,c:`function Compteur() {
  const [n, setN] = React.useState(0);
  return (
    <div>
      <button onClick={() => setN(n - 1)}>-</button>
      <b> {n} </b>
      <button onClick={() => setN(n + 1)}>+</button>
    </div>
  );
}
// Ajoute <Compteur /> dans ton composant App`,x:`<code>useState(0)</code> renvoie la valeur actuelle et une fonction pour la changer. Appeler <code>setN</code> demande à React de <b>redessiner</b> le composant avec la nouvelle valeur. Ne modifie jamais <code>n</code> directement. Si le nouvel état dépend de l'ancien, écris <code>setN(x => x + 1)</code>.`},
{l:1,t:'jsx',n:'Liste avec map et key',d:`Afficher un tableau d'éléments.`,c:`function Liste() {
  const fruits = ['Pomme', 'Poire', 'Kiwi'];
  return (
    <ul>
      {fruits.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
  );
}`,x:`<code>map</code> transforme chaque élément du tableau en élément JSX. La <code>key</code> permet à React d'identifier chaque ligne lors des mises à jour : utilise un identifiant stable (<code>id</code>) plutôt que l'index quand la liste peut être réordonnée ou filtrée.`},
{l:1,t:'jsx',n:'Formulaire contrôlé',d:`Un champ lié à l'état.`,c:`function Formulaire() {
  const [nom, setNom] = React.useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); alert('Salut ' + nom); }}>
      <input value={nom} onChange={e => setNom(e.target.value)} placeholder="Prénom" />
      <button>Envoyer</button>
      <p>Tu écris : {nom}</p>
    </form>
  );
}`,x:`Dans un champ <b>contrôlé</b>, la valeur affichée vient de l'état (<code>value={nom}</code>) et chaque frappe la met à jour (<code>onChange</code>). <code>e.preventDefault()</code> empêche le navigateur de recharger la page à l'envoi du formulaire.`},
{l:1,t:'jsx',n:'Rendu conditionnel',d:`Afficher selon l'état.`,c:`function Connexion() {
  const [ok, setOk] = React.useState(false);
  return (
    <div>
      {ok ? <p>Bienvenue !</p> : <p>Connecte-toi</p>}
      {ok && <small>Session ouverte</small>}
      <button onClick={() => setOk(!ok)}>{ok ? 'Déconnexion' : 'Connexion'}</button>
    </div>
  );
}`,x:`Le ternaire <code>a ? b : c</code> choisit entre deux affichages ; <code>a && b</code> affiche <code>b</code> seulement si <code>a</code> est vrai. Attention : <code>0 && ...</code> affiche un <code>0</code> à l'écran, utilise <code>n > 0 && ...</code>.`},
{l:1,t:'jsx',n:'useEffect : horloge',d:`Réagir au cycle de vie du composant.`,c:`function Horloge() {
  const [h, setH] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setH(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return <h2>{h.toLocaleTimeString()}</h2>;
}`,x:`<code>useEffect</code> s'exécute <b>après</b> l'affichage. Le tableau <code>[]</code> signifie « une seule fois, au démarrage » ; <code>[x]</code> signifierait « à chaque changement de x ». La fonction renvoyée est le <b>nettoyage</b> : elle s'exécute quand le composant disparaît (ici, arrêt du minuteur).`},
{l:2,t:'jsx',n:'useReducer : liste de tâches',d:`Centraliser la logique d'état.`,c:`function reducer(etat, action) {
  switch (action.type) {
    case 'ajouter': return [...etat, { id: Date.now(), texte: action.texte }];
    case 'supprimer': return etat.filter(t => t.id !== action.id);
    default: return etat;
  }
}
function Taches() {
  const [taches, dispatch] = React.useReducer(reducer, []);
  const [txt, setTxt] = React.useState('');
  return (
    <div>
      <input value={txt} onChange={e => setTxt(e.target.value)} />
      <button onClick={() => { dispatch({ type: 'ajouter', texte: txt }); setTxt(''); }}>Ajouter</button>
      <ul>{taches.map(t => <li key={t.id} onClick={() => dispatch({ type: 'supprimer', id: t.id })}>{t.texte}</li>)}</ul>
    </div>
  );
}`,x:`Le <b>reducer</b> est une fonction pure : (ancien état, action) → nouvel état. <code>dispatch</code> envoie une action décrite par un objet. Toute la logique de modification est au même endroit. On ne modifie jamais l'ancien état : on renvoie une copie (<code>[...etat, x]</code>, <code>filter</code>). Clique une tâche pour la supprimer.`},
{l:2,t:'jsx',n:'useRef : accéder au DOM',d:`Garder une référence qui ne redessine pas.`,c:`function ChampFocus() {
  const ref = React.useRef(null);
  return (
    <div>
      <input ref={ref} placeholder="Clique le bouton" />
      <button onClick={() => ref.current.focus()}>Focus</button>
    </div>
  );
}`,x:`<code>useRef</code> renvoie un objet dont la propriété <code>.current</code> persiste entre les affichages. Attaché à un élément avec <code>ref={...}</code>, il donne accès au vrai élément du DOM (focus, mesure, lecture vidéo). Modifier <code>.current</code> ne déclenche pas de nouvel affichage : pratique aussi pour garder un identifiant de minuteur.`},
{l:2,t:'jsx',n:'Hook personnalisé',d:`Réutiliser une logique entre composants.`,c:`function useLargeur() {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const f = () => setW(window.innerWidth);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  return w;
}
// Utilisation : const w = useLargeur();`,x:`Un hook personnalisé est une fonction dont le nom commence par <code>use</code> et qui appelle d'autres hooks : elle emballe une logique réutilisable (ici, suivre la largeur de la fenêtre). Règle d'or : appeler les hooks toujours au premier niveau du composant, jamais dans un <code>if</code> ou une boucle.`},
{l:2,t:'jsx',n:'Context : partager une valeur',d:`Éviter de passer des props à chaque niveau.`,c:`const Theme = React.createContext('sombre');
function Bouton() {
  const theme = React.useContext(Theme);
  const sombre = theme === 'sombre';
  return <button style={{ background: sombre ? '#222' : '#eee', color: sombre ? '#fff' : '#000' }}>Thème : {theme}</button>;
}
function Appli() {
  return (
    <Theme.Provider value="clair">
      <Bouton />
    </Theme.Provider>
  );
}`,x:`<code>createContext</code> crée un « canal ». Le <code>Provider</code> fournit une valeur à tous les composants qu'il contient, et <code>useContext</code> la lit n'importe où dessous, sans la passer par les props. Sans Provider, on obtient la valeur par défaut (<code>'sombre'</code>). Ici <code>Bouton</code> affiche donc « clair ».`},
{l:1,t:'html',n:'Page React complète',d:`React directement dans un fichier HTML.`,c:`<div id="root"></div>
<script crossorigin src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.development.js"></script>
<script crossorigin src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.4/babel.min.js"></script>
<script type="text/babel">
  function App() {
    const [n, setN] = React.useState(0);
    return <button onClick={() => setN(n + 1)}>Clics : {n}</button>;
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>`,x:`Trois scripts chargent React, ReactDOM et Babel depuis un CDN. <code>type="text/babel"</code> demande à Babel de traduire le JSX dans le navigateur. Pratique pour apprendre et tester ; pour un vrai site, on compile avant (Vite, par exemple) car Babel dans le navigateur est lent. Il faut internet pour charger les scripts.`},
{l:0,t:'html',n:'Accordéon details / summary',d:`Contenu repliable sans JavaScript.`,c:`<details>
  <summary>Cliquer pour ouvrir</summary>
  <p>Contenu caché, affiché au clic.</p>
</details>`,x:`<code>&lt;details&gt;</code> gère seul l'ouverture et la fermeture ; <code>&lt;summary&gt;</code> est la ligne cliquable. Ajoute l'attribut <code>open</code> pour qu'il soit ouvert au départ. Accessible au clavier par défaut.`},
{l:0,t:'css',n:'Reset moderne',d:`Une base saine pour tous les projets.`,c:`*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; line-height: 1.5; }
img { max-width: 100%; display: block; }`,x:`<code>border-box</code> inclut marges intérieures et bordures dans la largeur déclarée : un bloc de <code>width:300px</code> mesure vraiment 300 px. <code>max-width:100%</code> empêche les images de déborder de l'écran.`},
{l:1,t:'css',n:'Pseudo-classes et pseudo-éléments',d:`Cibler un état ou une partie d'élément.`,c:`li:nth-child(odd) { background: #8b5cf622; }
a[target=_blank]::after { content: ' ↗'; }
button:not(:disabled):hover { filter: brightness(1.15); }
input:focus-visible { outline: 2px solid #ec4899; }`,x:`Une <b>pseudo-classe</b> (un seul <code>:</code>) cible un état : <code>:hover</code>, <code>:focus-visible</code>, <code>:nth-child(odd)</code>, <code>:not(...)</code>. Un <b>pseudo-élément</b> (<code>::</code>) crée ou cible une partie : <code>::before</code> et <code>::after</code> ajoutent du contenu décoratif via <code>content</code>.`},
{l:2,t:'css',n:'clamp, min et unités fluides',d:`Des tailles qui s'adaptent sans media query.`,c:`h1 { font-size: clamp(1.6rem, 5vw, 3rem); }
.conteneur {
  width: min(92%, 900px);
  margin-inline: auto;
  padding-block: 2rem;
}`,x:`<code>clamp(min, idéal, max)</code> garde la valeur entre deux bornes : le titre grandit avec la largeur de l'écran (<code>5vw</code>) mais jamais sous 1.6rem ni au-dessus de 3rem. <code>min(92%, 900px)</code> prend la plus petite des deux. <code>margin-inline</code> et <code>padding-block</code> sont les versions « logiques » gauche-droite et haut-bas.`}
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
{l:2,n:'Organiser un projet',b:'<p>Sépare HTML, CSS et JS dans des fichiers (comme dans TalcoProg). À l\'export .html, tout est fusionné en un seul fichier facile à héberger.</p><ul><li>Un fichier CSS/JS non relié dans le HTML est quand même ajouté à l\'aperçu.</li><li>Les scripts d\'un dossier partagent la même page : une fonction définie dans un fichier est utilisable dans l\'autre.</li><li>Exporte régulièrement en .json pour avoir une sauvegarde.</li></ul>'},
{l:0,n:'Python, C++ et Kotlin dans TalcoProg',b:'<ul><li>Crée un fichier <code>.py</code>, <code>.cpp</code> ou <code>.kt</code> (« + ») ou insère un bloc depuis l\'onglet Blocs.</li><li>Bouton <b>Exécuter</b> (ou Ctrl+Entrée) : la sortie s\'affiche dans le panneau résultat.</li><li><b>Python</b> tourne directement dans ton navigateur (Pyodide, téléchargé la première fois). Les entrées <code>input()</code> sont demandées avant le lancement, séparées par « ; ».</li><li><b>C++</b> et <b>Kotlin</b> sont compilés sur des services en ligne (Wandbox et Kotlin Playground) : internet est nécessaire et ton code leur est envoyé.</li><li>Un programme = un fichier. Pas de lecture de fichiers ni de clavier en direct ; Kotlin ne gère pas les entrées.</li></ul>'},
{l:1,n:'Python : les bases qui servent partout',b:'<p>L\'indentation (4 espaces) remplace les accolades. Types courants : <code>int</code>, <code>str</code>, <code>list</code>, <code>dict</code>.</p><ul><li><code>for x in liste:</code> pour parcourir</li><li><code>def f(a):</code> pour une fonction</li><li><code>f"{a}"</code> pour insérer une variable dans un texte</li><li><code>import math</code>, <code>random</code>, <code>statistics</code> : les modules fournis marchent.</li></ul>'},
{l:2,n:'Typage et mémoire : C++ face à Kotlin',b:'<p><b>C++</b> : typage statique, tu gères la durée de vie des objets. Préfère <code>vector</code>, <code>string</code>, <code>unique_ptr</code> aux tableaux bruts et à <code>new/delete</code> ; passe les gros objets par référence <code>const T&amp;</code>.</p><p><b>Kotlin</b> : mémoire gérée par la JVM, et le compilateur t\'oblige à traiter <code>null</code> (<code>String?</code>, <code>?.</code>, <code>?:</code>). <code>val</code> par défaut, <code>var</code> seulement si nécessaire.</p>'},
{l:0,n:`React dans TalcoProg : comment ça marche`,b:`<ul><li>Crée un projet avec « + Nouveau dossier » (réponds OK à la question React) ou ajoute un fichier <code>App.jsx</code> : React 18 et Babel sont chargés tout seuls, et <code>&lt;div id="root"&gt;</code> est ajouté s'il manque.</li><li>Tu peux aussi écrire React directement dans un fichier HTML (bloc « Page React complète »).</li><li>Les fichiers d'un dossier partagent le même espace : un composant défini dans un fichier est utilisable dans l'autre. Pas de <code>import</code>/<code>export</code>.</li><li><code>const { useState } = React;</code> ne doit apparaître qu'une fois : les blocs utilisent <code>React.useState</code> pour éviter les doublons.</li><li>Babel traduit le JSX dans ton navigateur : idéal pour apprendre, plus lent qu'un vrai projet. Internet est nécessaire pour charger React.</li><li>Une erreur s'affiche dans une bannière rouge en bas de l'aperçu.</li></ul>`},
{l:0,n:`JSX : du HTML dans JavaScript`,b:`<p>JSX ressemble à du HTML mais c'est du JavaScript. Les différences à retenir :</p><table><tr><th>HTML</th><th>JSX</th></tr><tr><td>class</td><td>className</td></tr><tr><td>for</td><td>htmlFor</td></tr><tr><td>onclick="f()"</td><td>onClick={f}</td></tr><tr><td>style="color:red"</td><td>style={{color:'red'}}</td></tr><tr><td>&lt;br&gt;, &lt;img&gt;</td><td>&lt;br /&gt;, &lt;img /&gt; (toujours fermées)</td></tr></table><ul><li>Une seule racine par composant : entoure avec <code>&lt;div&gt;</code> ou <code>&lt;&gt;...&lt;/&gt;</code>.</li><li><code>{...}</code> insère n'importe quelle expression JavaScript.</li><li>Les composants commencent par une majuscule (<code>&lt;Carte /&gt;</code>), les balises HTML par une minuscule.</li></ul>`},
{l:1,n:`useState et useEffect expliqués`,b:`<p><b>useState</b> : mémoire du composant. Quand l'état change, React rappelle la fonction du composant et affiche le nouveau résultat.</p><p><b>useEffect</b> : code à lancer <i>après</i> l'affichage (minuteur, requête, écouteur).</p><table><tr><th>Dépendances</th><th>Quand l'effet s'exécute</th></tr><tr><td>[]</td><td>une seule fois, au début</td></tr><tr><td>[a, b]</td><td>au début, puis quand a ou b change</td></tr><tr><td>(rien)</td><td>après chaque affichage</td></tr></table><p>La fonction renvoyée par l'effet est le nettoyage : elle s'exécute avant le prochain effet ou à la disparition du composant.</p>`},
{l:1,n:`Composants, props et état : le schéma mental`,b:`<ul><li><b>Interface = fonction de l'état</b> : tu décris ce qu'on voit pour un état donné ; React met l'écran à jour.</li><li>Les <b>props</b> descendent du parent vers l'enfant (lecture seule).</li><li>Les <b>événements</b> remontent : l'enfant appelle une fonction reçue en prop.</li><li>Si deux composants ont besoin de la même donnée, remonte l'état dans leur parent commun (« lifting state up »).</li><li>Ne modifie jamais l'état directement : crée une copie (<code>[...liste, x]</code>, <code>{...obj, a:1}</code>).</li></ul>`},
{l:0,n:`Mêmes idées, 4 langages`,b:`<table><tr><th></th><th>JavaScript</th><th>Python</th><th>C++</th><th>Kotlin</th></tr><tr><td>Variable</td><td>let x = 1</td><td>x = 1</td><td>int x = 1;</td><td>var x = 1</td></tr><tr><td>Constante</td><td>const</td><td>(convention MAJUSCULES)</td><td>const</td><td>val</td></tr><tr><td>Condition</td><td>if (a) {}</td><td>if a:</td><td>if (a) {}</td><td>if (a) {}</td></tr><tr><td>Boucle</td><td>for (let i=0;i&lt;3;i++)</td><td>for i in range(3):</td><td>for (int i=0;i&lt;3;i++)</td><td>for (i in 0 until 3)</td></tr><tr><td>Fonction</td><td>function f(a){}</td><td>def f(a):</td><td>int f(int a){}</td><td>fun f(a: Int)</td></tr><tr><td>Affichage</td><td>console.log</td><td>print</td><td>cout &lt;&lt;</td><td>println</td></tr><tr><td>Commentaire</td><td>// ...</td><td># ...</td><td>// ...</td><td>// ...</td></tr></table><p>Apprendre un langage aide pour les autres : la logique (variables, conditions, boucles, fonctions) est la même, seule la syntaxe change.</p>`},
{l:0,n:`Types de données et opérateurs`,b:`<table><tr><th></th><th>JavaScript</th><th>Python</th><th>C++</th><th>Kotlin</th></tr><tr><td>Texte</td><td>string</td><td>str</td><td>std::string</td><td>String</td></tr><tr><td>Entier</td><td>number</td><td>int</td><td>int, long</td><td>Int, Long</td></tr><tr><td>Décimal</td><td>number</td><td>float</td><td>double</td><td>Double</td></tr><tr><td>Booléen</td><td>true / false</td><td>True / False</td><td>true / false</td><td>true / false</td></tr><tr><td>Liste</td><td>Array</td><td>list</td><td>vector</td><td>List</td></tr><tr><td>Égalité</td><td>===</td><td>==</td><td>==</td><td>== (valeur)</td></tr><tr><td>Et / ou</td><td>&amp;&amp; ||</td><td>and or</td><td>&amp;&amp; ||</td><td>&amp;&amp; ||</td></tr></table><ul><li><b>Typage dynamique</b> (JS, Python) : le type est celui de la valeur. <b>Typage statique</b> (C++, Kotlin) : le type est vérifié avant l'exécution.</li><li>Division entière : <code>7/2</code> donne 3 en C++ et Kotlin avec des entiers, 3.5 en JS et Python.</li></ul>`},
{l:1,n:`Lire une erreur et déboguer`,b:`<ol><li><b>Lis le message en entier</b> : il donne souvent le type d'erreur et la ligne.</li><li>Commence par la <b>première</b> erreur : les suivantes en découlent souvent (très vrai en C++).</li><li>Isole : mets en commentaire une partie du code pour trouver où ça casse.</li><li>Affiche les valeurs. Dans l'aperçu web, <code>console.log</code> est invisible : utilise <code>document.body.append(valeur)</code> ou la bannière rouge des erreurs. En Python, C++ et Kotlin, <code>print</code>, <code>cout</code> et <code>println</code> s'affichent dans la console.</li><li>Erreurs classiques : parenthèse ou accolade oubliée, faute de frappe dans un nom, mauvaise indentation en Python, point-virgule oublié en C++, <code>undefined</code> parce qu'un élément n'existe pas encore (script placé avant le HTML).</li></ol>`},
{l:2,n:`Complexité et structures de données`,b:`<p>La notation O décrit comment le temps grandit avec le nombre n d'éléments.</p><table><tr><th>Complexité</th><th>Exemple</th></tr><tr><td>O(1)</td><td>lire <code>tableau[i]</code>, <code>Map.get</code></td></tr><tr><td>O(log n)</td><td>recherche dichotomique</td></tr><tr><td>O(n)</td><td>parcourir une liste, <code>find</code></td></tr><tr><td>O(n log n)</td><td>tri efficace (<code>sort</code>)</td></tr><tr><td>O(n²)</td><td>deux boucles imbriquées</td></tr></table><ul><li>Besoin de tester « est-ce présent ? » souvent : utilise un <code>Set</code>/<code>set</code>, pas une liste.</li><li>Besoin d'associer clé et valeur : <code>Map</code>/<code>dict</code>/<code>map</code>.</li><li>Mesure avant d'optimiser : la clarté passe d'abord.</li></ul>`},
{l:0,n:`Sauvegarder et tout réinitialiser`,b:`<ul><li>Tes dossiers sont gardés dans <b>ce navigateur et cet appareil</b> : un autre appareil ou un autre navigateur ne les voit pas, et vider les données du site les efface.</li><li>Pour sauvegarder ou transférer : Exporter → « Tous les dossiers en .json », puis Importer sur l'autre appareil.</li><li>Le bouton <b>Tout réinitialiser</b> (onglet Fichiers) supprime tous les dossiers et recrée le projet de départ, après un message de confirmation. C'est définitif : exporte avant si tu veux garder quelque chose.</li></ul>`}
];
