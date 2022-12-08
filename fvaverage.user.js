// ==UserScript==
// @name         François Villon Average
// @description  Plus besoin de calculer votre moyenne, tout ce fait en direct. Si l'ENT de le fait pas, on le fait.
// @version      1.0
// @author       Kayro64
// @match        *://*francois-villon-yzeure.ent.auvergnerhonealpes.fr/*
// @icon         https://media.discordapp.net/attachments/534841376609665054/1050522022641410108/stonks-meme.png
// @grant        none
// @copyright
// @license
// @downloadURL
// @updateURL
// ==/UserScript==

if (location.search.includes("?PROC=CONSULTER_RELEVE&ACTION=AFFICHER_RELEVE_NOTES_ELEVE")) {

var tellgeneralaverage = document.querySelector("#releve-eleve")

var testavec11 = document.querySelector("#yui-rec10 > td.yui-dt0-col-matiere.yui-dt-col-matiere.yui-dt-sortable.yui-dt-first > div > div > div.bulletin-matiere-libelle.ellipse.fw-700").innerText
if (testavec11.includes("TECHNOLOGIE")) {

    var Baverage0 = document.querySelector("#yui-rec0 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage1 = document.querySelector("#yui-rec1 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage2 = document.querySelector("#yui-rec2 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage3 = document.querySelector("#yui-rec3 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage4 = document.querySelector("#yui-rec4 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage5 = document.querySelector("#yui-rec5 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage6 = document.querySelector("#yui-rec6 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage7 = document.querySelector("#yui-rec7 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage8 = document.querySelector("#yui-rec8 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage9 = document.querySelector("#yui-rec9 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Baverage10 = document.querySelector("#yui-rec10 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText

    var BNEWaverage0 = Baverage0.replace(',', '.')
    var BNEWaverage1 = Baverage1.replace(',', '.')
    var BNEWaverage2 = Baverage2.replace(',', '.')
    var BNEWaverage3 = Baverage3.replace(',', '.')
    var BNEWaverage4 = Baverage4.replace(',', '.')
    var BNEWaverage5 = Baverage5.replace(',', '.')
    var BNEWaverage6 = Baverage6.replace(',', '.')
    var BNEWaverage7 = Baverage7.replace(',', '.')
    var BNEWaverage8 = Baverage8.replace(',', '.')
    var BNEWaverage9 = Baverage9.replace(',', '.')
    var BNEWaverage10 = Baverage10.replace(',', '.')

    console.log((Number(BNEWaverage0) + Number(BNEWaverage1) + Number(BNEWaverage2) + Number(BNEWaverage3) + Number(BNEWaverage4) + Number(BNEWaverage5) + Number(BNEWaverage6) + Number(BNEWaverage7) + Number(BNEWaverage8) + Number(BNEWaverage9) + Number(BNEWaverage10)) / 11)
    var Bgeneralaverage = (Number(BNEWaverage0) + Number(BNEWaverage1) + Number(BNEWaverage2) + Number(BNEWaverage3) + Number(BNEWaverage4) + Number(BNEWaverage5) + Number(BNEWaverage6) + Number(BNEWaverage7) + Number(BNEWaverage8) + Number(BNEWaverage9) + Number(BNEWaverage10)) / 11
    var BRoundBgeneralaverage = Math.round(Bgeneralaverage * 10) / 10
    tellgeneralaverage.innerHTML += "<h2 class=h5-like> Ma moyenne générale : " + BRoundBgeneralaverage + "/20 </h2>"
}

var testavec12 = document.querySelector("#yui-rec11 > td.yui-dt0-col-matiere.yui-dt-col-matiere.yui-dt-sortable.yui-dt-first > div > div > div.bulletin-matiere-libelle.ellipse.fw-700").innerText
if (testavec12.includes("TECHNOLOGIE")) {

    var average0 = document.querySelector("#yui-rec0 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average1 = document.querySelector("#yui-rec1 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average2 = document.querySelector("#yui-rec2 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average3 = document.querySelector("#yui-rec3 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average4 = document.querySelector("#yui-rec4 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average5 = document.querySelector("#yui-rec5 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average6 = document.querySelector("#yui-rec6 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average7 = document.querySelector("#yui-rec7 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average8 = document.querySelector("#yui-rec8 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average9 = document.querySelector("#yui-rec9 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average10 = document.querySelector("#yui-rec10 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var average11 = document.querySelector("#yui-rec11 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText

    var NEWaverage0 = average0.replace(',', '.')
    var NEWaverage1 = average1.replace(',', '.')
    var NEWaverage2 = average2.replace(',', '.')
    var NEWaverage3 = average3.replace(',', '.')
    var NEWaverage4 = average4.replace(',', '.')
    var NEWaverage5 = average5.replace(',', '.')
    var NEWaverage6 = average6.replace(',', '.')
    var NEWaverage7 = average7.replace(',', '.')
    var NEWaverage8 = average8.replace(',', '.')
    var NEWaverage9 = average9.replace(',', '.')
    var NEWaverage10 = average10.replace(',', '.')
    var NEWaverage11 = average11.replace(',', '.')

    console.log((Number(NEWaverage0) + Number(NEWaverage1) + Number(NEWaverage2) + Number(NEWaverage3) + Number(NEWaverage4) + Number(NEWaverage5) + Number(NEWaverage6) + Number(NEWaverage7) + Number(NEWaverage8) + Number(NEWaverage9) + Number(NEWaverage10) + Number(NEWaverage11)) / 12)
    var generalaverage = (Number(NEWaverage0) + Number(NEWaverage1) + Number(NEWaverage2) + Number(NEWaverage3) + Number(NEWaverage4) + Number(NEWaverage5) + Number(NEWaverage6) + Number(NEWaverage7) + Number(NEWaverage8) + Number(NEWaverage9) + Number(NEWaverage10) + Number(NEWaverage11)) / 12
    var Roundgeneralaverage = Math.round(generalaverage * 10) / 10
    tellgeneralaverage.innerHTML += "<h2 class=h5-like> Ma moyenne générale : " + Roundgeneralaverage + "/20 </h2>"
}

var testavec13 = document.querySelector("#yui-rec12 > td.yui-dt0-col-matiere.yui-dt-col-matiere.yui-dt-sortable.yui-dt-first > div > div > div.bulletin-matiere-libelle.ellipse.fw-700").innerText
if (testavec13.includes("TECHNOLOGIE")) {

    var Aaverage0 = document.querySelector("#yui-rec0 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage1 = document.querySelector("#yui-rec1 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage2 = document.querySelector("#yui-rec2 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage3 = document.querySelector("#yui-rec3 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage4 = document.querySelector("#yui-rec4 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage5 = document.querySelector("#yui-rec5 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage6 = document.querySelector("#yui-rec6 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage7 = document.querySelector("#yui-rec7 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage8 = document.querySelector("#yui-rec8 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage9 = document.querySelector("#yui-rec9 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage10 = document.querySelector("#yui-rec10 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage11 = document.querySelector("#yui-rec11 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText
    var Aaverage12 = document.querySelector("#yui-rec12 > td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").innerText

    var ANEWaverage0 = Aaverage0.replace(',', '.')
    var ANEWaverage1 = Aaverage1.replace(',', '.')
    var ANEWaverage2 = Aaverage2.replace(',', '.')
    var ANEWaverage3 = Aaverage3.replace(',', '.')
    var ANEWaverage4 = Aaverage4.replace(',', '.')
    var ANEWaverage5 = Aaverage5.replace(',', '.')
    var ANEWaverage6 = Aaverage6.replace(',', '.')
    var ANEWaverage7 = Aaverage7.replace(',', '.')
    var ANEWaverage8 = Aaverage8.replace(',', '.')
    var ANEWaverage9 = Aaverage9.replace(',', '.')
    var ANEWaverage10 = Aaverage10.replace(',', '.')
    var ANEWaverage11 = Aaverage11.replace(',', '.')
    var ANEWaverage12 = Aaverage12.replace(',', '.')

    console.log((Number(ANEWaverage0) + Number(ANEWaverage1) + Number(ANEWaverage2) + Number(ANEWaverage3) + Number(ANEWaverage4) + Number(ANEWaverage5) + Number(ANEWaverage6) + Number(ANEWaverage7) + Number(ANEWaverage8) + Number(ANEWaverage9) + Number(ANEWaverage10) + Number(ANEWaverage11) + Number(ANEWaverage12)) / 13)
    var Ageneralaverage = (Number(ANEWaverage0) + Number(ANEWaverage1) + Number(ANEWaverage2) + Number(ANEWaverage3) + Number(ANEWaverage4) + Number(ANEWaverage5) + Number(ANEWaverage6) + Number(ANEWaverage7) + Number(ANEWaverage8) + Number(ANEWaverage9) + Number(ANEWaverage10) + Number(ANEWaverage11) + Number(ANEWaverage12)) / 13
    var ARoundAgeneralaverage = Math.round(Ageneralaverage * 10) / 10
    tellgeneralaverage.innerHTML += "<h2 class=h5-like> Ma moyenne générale : " + ARoundAgeneralaverage + "/20 </h2>"
}

}