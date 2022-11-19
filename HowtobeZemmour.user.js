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

var lda = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--a");
lda.remove();
var ldb = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--b");
ldb.remove();
var ldc = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--c");
ldc.remove();
var ldd = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--d");
ldd.remove();
var lde = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--e");
lde.remove();
var ldf = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--f");
ldf.remove();
var ldg = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--g");
ldg.remove();
var ldh = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--h");
ldh.remove();
var ldi = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--i");
ldi.remove();
var ldj = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--j");
ldj.remove();
var ldk = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--k");
ldk.remove();
var ldl = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--l");
ldl.remove();
var ldm = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--m");
ldm.remove();
var ldn = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--n");
ldn.remove();
var ldo = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--o");
ldo.remove();
var ldp = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--p");
ldp.remove();
var ldq = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--q");
ldq.remove();
var ldr = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--r");
ldr.remove();
var lds = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--s");
lds.remove();
var ldt = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--t");
ldt.remove();
var ldu = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--u");
ldu.remove();
var ldv = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--v");
ldv.remove();
var ldw = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--w");
ldw.remove();
var ldx = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--x");
ldx.remove();
var ldy = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--y");
ldy.remove();
var ldz = document.querySelector("#screenreader-contenu > div > div > div.panel.panel--outlined.panel--rounded-md > div.row.row--flex-auto > div.col.col--flex-locked > div:nth-child(1) > span.avatar.avatar--md.slug.slug--negative-xl.avatar--z");
ldz.remove();
