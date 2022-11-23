// ==UserScript==
// @name         How to be Zemmour ENT
// @description  Vous avez toujours rêvé de devenir Zemmour ? connectez vous à votre ENT du Collège François Villon et allez voir votre fiche élève, bravo ! Vous êtes Zemmour ! Nous sommes tous Zemmour !
// @version      1.1
// @author       Kayro64
// @match        *://*francois-villon-yzeure.ent.auvergnerhonealpes.fr/*
// @icon         https://media.discordapp.net/attachments/679371067046756373/1043474594977288264/image.png
// @grant        none
// @copyright
// @license
// @downloadURL
// @updateURL
// ==/UserScript==

//set it to "true" if you want zemmour to HUMM every time you load a page of the ENT, if you don't, set it to "false"
var humm = "true"

var college = document.querySelector(".h5-like.bar__sitename")
var photozemmour = "https://media.discordapp.net/attachments/534841376609665054/1043855045864738846/Eric-Zemmour-le-10-avril-2022-a-Paris-1390315-removebg-preview.png"
college.innerHTML = "Collège <strong class=nomcollege>Éric Zemmour</strong><img src=" + photozemmour + " width = 50>";
var collegea = document.querySelector(".nomcollege")
collegea.style.color = "#F8251E";

var nomeleve = document.querySelector("body > div.header > nav.menu.js-menu > ul.user > li:nth-child(1)")
nomeleve.innerHTML = "Éric Zemmour"

//Vite mon prénom

var a_VMP = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li:nth-child(9) > a")
a_VMP.setAttribute('href', 'https://www.vitemonprenom.com/')

var uselessVMP1 = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li:nth-child(9) > a > span.icon.icon--moodle-menu.services-shortcut__icon.services-shortcut__icon--default")
uselessVMP1.remove()

var uselessVMP2 = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li:nth-child(9) > a > span.icon.icon--moodle-menu-hover.services-shortcut__icon.services-shortcut__icon--hover")
uselessVMP2.remove()

var VMP = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li:nth-child(9) > a > span")
VMP.innerHTML = "<img class=vmpimg src=https://media.discordapp.net/attachments/534841376609665054/1044666139155890186/vmp.ba5e55f6-removebg-preview.png width=30> <span class=vmptxt>Vite Mon Prénom</span>"

//les blagues à Zemmour

var uselessBZ1 = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li:nth-child(5) > a > span.icon.icon--abs-menu-hover.services-shortcut__icon.services-shortcut__icon--hover")
uselessBZ1.remove()

var uselessBZ2 = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li:nth-child(5) > a > span.icon.icon--abs-menu.services-shortcut__icon.services-shortcut__icon--default")
uselessBZ2.remove()

var BZ = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li:nth-child(5) > a > span.services-shortcut__label")
BZ.innerHTML = "<img class=bzimg src=https://media.discordapp.net/attachments/534841376609665054/1044737904578154546/unknown.png width=30> <span class=bztxt>Les Blagues à Zemmour</span>"

if (location.search.includes("?PROC=GESTION_ABSENCES_TUTEUR_ELEVE")) {
var blancblague = document.querySelector("body > div.content.content--has-bar.js-content.menu-is-opened")
blancblague.innerHTML = "<div><h2 class=h5-like id=ouia></h2></div> <div><h2 class=h5-like id=ouit></h2></div> <img src=https://media.discordapp.net/attachments/534841376609665054/1044737904578154546/unknown.png>"
var franky = document.querySelector("#franky")
franky.remove()

var blague = document.getElementById('ouia')
var reponse = document.getElementById('ouit')
var BZimg = document.querySelector("body > div.content.content--has-bar.js-content.menu-is-opened > img")

blague.style.padding = "50px";
reponse.style.padding = "50px";
BZimg.style.paddingLeft = "50px";

fetch('https://www.blagues-api.fr/api/type/dark/random', {
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTMwMDEyNTYwMzYwMjEwNDMyIiwibGltaXQiOjEwMCwia2V5IjoiN0xwWnFrRFdhNU5TZVN5SDNzb1d1Nk9Db3JPY1ZQYWVuY2dEdWtYTkw2MmowNGtxaW4iLCJjcmVhdGVkX2F0IjoiMjAyMi0xMS0yMlQyMToxMjo1NiswMDowMCIsImlhdCI6MTY2OTE1MTU3Nn0.M__03CI897Gu-s54LJb_F5TfDv97ESjXDu3ORnJjb0M`
  }
})
.then(response => response.json())
.then(data => {
    blague.textContent = data.joke
    reponse.textContent = data.answer
})

}

if (location.search.includes("?PROC=FICHE_ELEVE&ACTION=CONSULTER_FICHE_ELEVE&UID_ELEVE")) {
    var specialletruc = "non";}

if (specialletruc != "non") {
var travailafaire = document.querySelector("body > div.header > nav.menu.js-menu > ul.services-shortcut > li.services-shortcut__item.services-shortcut__item--current")
var photozemmour2 = "https://media.discordapp.net/attachments/679371067046756373/1043965459264979105/full_2.png"
travailafaire.innerHTML += "<img src=" + photozemmour2 + " width = 50>";
}

if (location.search.includes("?PROC=PAGE_ACCUEIL")) {
var video = document.querySelector("#screenreader-contenu > div > div.row > div.col--xs-12.col--lg-0.col--xs-12.col--md-5 > div:nth-child(1)")
video.innerHTML = "<h2 class=h5-like>Mes vidéos</h2><br><iframe width=560 height=315 src=https://www.youtube.com/embed/uuMlaWAJEog title=YouTubevideoplayer frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>"
}

if (humm == "true") {
var edthum = document.querySelector("body > div.header > button")
edthum.innerHTML += "<audio src=https://cdn.discordapp.com/attachments/679371067046756373/1043598993323720714/zemmour-tousse.mp3 autoplay></audio>"
}

//faire les autres fenetres la

if (location.search.includes("?PROC=FICHE_ELEVE&ACTION=CONSULTER_FICHE_ELEVE&UID_ELEVE")) {
var photo = document.querySelector(".avatar__image");
photo.setAttribute('src', 'https://media.discordapp.net/attachments/679371067046756373/1043474594977288264/image.png');

var nom = document.querySelector(".h5-like.h5-like--lead-xs.b-like");
nom.innerHTML = "Éric Zemmour";

var infos = document.querySelector(".h6-like.h6-like--lead-xs");
infos.innerHTML= "<strong> 64 ans </strong> - 31 août 1958, <strong> Candidat aux élections présidentielles </strong>";

var lepen = "J.-M. Le Pen";
var lepenURL = "https://fr.wikipedia.org/wiki/Jean-Marie_Le_Pen";

var pp = document.querySelector("#sele--ficheeleve_resume > p:nth-child(3)");
pp.innerHTML = "<strong>Professeur principal </strong>" + lepen.link(lepenURL);

var reconquete = "Reconquête!";
var reconqueteURL = "https://www.parti-reconquete.fr/";

var jsp = document.querySelector("#sele--ficheeleve_resume > p:nth-child(4)");
jsp.innerHTML = "<strong>Parti politique </strong>" + reconquete.link(reconqueteURL);

var regime = document.querySelector("#sele--ficheeleve_resume > p:nth-child(5)");
regime.innerHTML = "";

var ld = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) :nth-child(2)");
ld.remove();

var truc = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.tabs > ul")
truc.innerHTML += "<li class=tabs__item> <a href=https://github.com/Kayro64 title class=tabs__link > <span class>Kayro64</span> </a> </li>";
}
