// ==UserScript==
// @name         How to be Zemmour ENT
// @description  Vous avez toujours rêvé de devenir Zemmour ? connectez vous à votre ENT du Collège François Villon et allez voir votre fiche élève, bravo ! Vous êtes Zemmour ! Nous sommes tous Zemmour !
// @version      1.0
// @author       Kayro64
// @match        *://*francois-villon-yzeure.ent.auvergnerhonealpes.fr/*
// @icon         https://media.discordapp.net/attachments/679371067046756373/1043474594977288264/image.png
// @grant        none
// @copyright
// @license
// @downloadURL
// @updateURL
// ==/UserScript==

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

var ld = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--l");
ld.remove();
