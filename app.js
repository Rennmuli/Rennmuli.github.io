'use strict'

/**gibt dem Knopf "Dark"/"light" seine Funktion
*wurde nur zu übungszweck erschaffen
*/

const switcher=document.querySelector('.btn');
switcher.addEventListener('click',function() {
    document.body.classList.toggle('dark-theme')

    var className=document.body.className;
    if(className=="light-theme") {
        this.textContent="Dark";
    }
    else {
        this.textContent="Light";
    }
    console.log('current class name: ' + className);
});

/** dieser Teil deklariert die einzelnen Lochindizes und Pars
 * diese sind extra als Variablen und nicht in Textform eingebaut, um später damit rechnen zu können
 * sie werden beim start des Programms ausgegeben (siehe HTML code) und bei einem Pagereload
 * momentan sind diese Werte hardcoded (also im Code fix eingegeben und nicht vom Pageuser eingetragen)
 */

function startrechnen() {
    
    var holeindex = new Array(19);

    holeindex[1] = 18
document.getElementById("hi1").innerHTML = holeindex[1]
    holeindex[2] = 8
document.getElementById("hi2").innerHTML = holeindex[2]
    holeindex[3] = 4
document.getElementById("hi3").innerHTML = holeindex[3]
    holeindex[4] = 2
document.getElementById("hi4").innerHTML = holeindex[4]
    holeindex[5] = 16
document.getElementById("hi5").innerHTML = holeindex[5]
    holeindex[6] = 14
document.getElementById("hi6").innerHTML = holeindex[6]
    holeindex[7] = 10
document.getElementById("hi7").innerHTML = holeindex[7]
    holeindex[8] = 6
document.getElementById("hi8").innerHTML = holeindex[8]
    holeindex[9] = 12
document.getElementById("hi9").innerHTML = holeindex[9]
    holeindex[10] = 7
document.getElementById("hi10").innerHTML = holeindex[10]
    holeindex[11] = 5
document.getElementById("hi11").innerHTML = holeindex[11]
    holeindex[12] = 17
document.getElementById("hi12").innerHTML = holeindex[12]
    holeindex[13] = 1
document.getElementById("hi13").innerHTML = holeindex[13]
    holeindex[14] = 11
document.getElementById("hi14").innerHTML = holeindex[14]
    holeindex[15] = 15
document.getElementById("hi15").innerHTML = holeindex[15]
    holeindex[16] = 9
document.getElementById("hi16").innerHTML = holeindex[16]
    holeindex[17] = 13
document.getElementById("hi17").innerHTML = holeindex[17]
    holeindex[18] = 3
document.getElementById("hi18").innerHTML = holeindex[18]

    var par = new Array(19);
   
    par[1] = 5
document.getElementById("par1out").innerHTML = par[1]
    par[2] = 4
document.getElementById("par2out").innerHTML = par[2]
    par[3] = 4
document.getElementById("par3out").innerHTML = par[3]
    par[4] = 4
document.getElementById("par4out").innerHTML = par[4]
    par[5] = 4
document.getElementById("par5out").innerHTML = par[5]
    par[6] = 3
document.getElementById("par6out").innerHTML = par[6]
    par[7] = 4
document.getElementById("par7out").innerHTML = par[7]
    par[8] = 5
document.getElementById("par8out").innerHTML = par[8]
    par[9] = 3
document.getElementById("par9out").innerHTML = par[9]
    par[10] = 4
document.getElementById("par10out").innerHTML = par[10]
    par[11] = 3
document.getElementById("par11out").innerHTML = par[11]
    par[12] = 4
document.getElementById("par12out").innerHTML = par[12]
    par[13] = 5
document.getElementById("par13out").innerHTML = par[13]
    par[14] = 4
document.getElementById("par14out").innerHTML = par[14]
    par[15] = 3
document.getElementById("par15out").innerHTML = par[15]
    par[16] = 4
document.getElementById("par16out").innerHTML = par[16]
    par[17] = 5
document.getElementById("par17out").innerHTML = par[17]
    par[18] = 4
document.getElementById("par18out").innerHTML = par[18];


}

/*totales par berechnen mit inputs test*/

function totalpar() {

    var par = new Array(18);
   
    par[1] = parseInt(document.getElementById("par1").value)

    par[2] = parseInt(document.getElementById("par2").value)

    par[3] = parseInt(document.getElementById("par3").value)

    par[4] = parseInt(document.getElementById("par4").value)

    par[5] = parseInt(document.getElementById("par5").value)

    par[6] = parseInt(document.getElementById("par6").value)

    par[7] = parseInt(document.getElementById("par7").value)

    par[8] = parseInt(document.getElementById("par8").value)

    par[9] = parseInt(document.getElementById("par9").value)

    par[10] = parseInt(document.getElementById("par10").value)

    par[11] = parseInt(document.getElementById("par11").value)

    par[12] = parseInt(document.getElementById("par12").value)

    par[13] = parseInt(document.getElementById("par13").value)

    par[14] = parseInt(document.getElementById("par14").value)

    par[15] = parseInt(document.getElementById("par15").value)

    par[16] = parseInt(document.getElementById("par16").value)

    par[17] = parseInt(document.getElementById("par17").value)

    par[18] = parseInt(document.getElementById("par18").value);

    
/**folgendes addiert alle einzelnen Pars zum totalen Par und speichert es auf die Id "partotout" */

var partot = (previousValue, currentValue) => previousValue + currentValue;

document.getElementById("partotout").innerHTML = par.reduce(partot); 

}


9


/**diese Funktion wird mit dem Knopf "Adjusted Gross Score berechnen" ausgeführt
 * sie liest als erstes die Werte um das Coursehandicap zu berechnen ein und tut dies sogleich
 * danach werden für das soeben berechnete Coursehandicap die für das Adjusted Gross Score maximale Anzahl Schläge pro Loch berechnet und ausgegeben
 * 
 */




function ags(hcpindex, sloperating, courserating, partot, sd) {
  
    const holeindex = [parseInt(document.getElementById("hi1").value), parseInt(document.getElementById("hi2").value), parseInt(document.getElementById("hi3").value), parseInt(document.getElementById("hi4").value), parseInt(document.getElementById("hi5").value), parseInt(document.getElementById("hi6").value), parseInt(document.getElementById("hi7").value), parseInt(document.getElementById("hi8").value), parseInt(document.getElementById("hi9").value), parseInt(document.getElementById("hi10").value), parseInt(document.getElementById("hi11").value), parseInt(document.getElementById("hi12").value), parseInt(document.getElementById("hi13").value), parseInt(document.getElementById("hi14").value), parseInt(document.getElementById("hi15").value), parseInt(document.getElementById("hi16").value), parseInt(document.getElementById("hi17").value), parseInt(document.getElementById("hi18").value)];
    const par =[5,4,4,4,4,3,4,5,3,4,3,4,5,4,3,4,5,4];

   
    //hier wird das Coursehandicap separat berechnet, da es in dieser Funktion (Rechnung) benötigt wird
    var hcpindex = parseFloat(document.getElementById(hcpindex).value)
    var sloperating = parseFloat(document.getElementById(sloperating).value)
    var courserating = parseFloat(document.getElementById(courserating).value)
    var partot = parseFloat(document.getElementById(partot).value)

    let coursehcp1 = Math.round(hcpindex * sloperating / 113 + (courserating - partot))

    ///document.getElementById("test").innerHTML = coursehcp1;
    let agsscore_strd = [parseInt(document.getElementById("par1").value) + 2, parseInt(document.getElementById("par2").value) + 2, parseInt(document.getElementById("par3").value) + 2, parseInt(document.getElementById("par4").value) + 2, parseInt(document.getElementById("par5").value) + 2, parseInt(document.getElementById("par6").value) + 2, parseInt(document.getElementById("par7").value) + 2, parseInt(document.getElementById("par8").value) + 2, parseInt(document.getElementById("par9").value) + 2, parseInt(document.getElementById("par10").value) + 2, parseInt(document.getElementById("par11").value) + 2, parseInt(document.getElementById("par12").value) + 2, parseInt(document.getElementById("par13").value) + 2, parseInt(document.getElementById("par14").value) + 2, parseInt(document.getElementById("par15").value) + 2, parseInt(document.getElementById("par16").value) + 2, parseInt(document.getElementById("par17").value) + 2, parseInt(document.getElementById("par18").value) + 2];
    let agsscore_high1 = [parseInt(document.getElementById("par1").value) + 3, parseInt(document.getElementById("par2").value) + 3, parseInt(document.getElementById("par3").value) + 3, parseInt(document.getElementById("par4").value) + 3, parseInt(document.getElementById("par5").value) + 3, parseInt(document.getElementById("par6").value) + 3, parseInt(document.getElementById("par7").value) + 3, parseInt(document.getElementById("par8").value) + 3, parseInt(document.getElementById("par9").value) + 3, parseInt(document.getElementById("par10").value) + 3, parseInt(document.getElementById("par11").value) + 3, parseInt(document.getElementById("par12").value) + 3, parseInt(document.getElementById("par13").value) + 3, parseInt(document.getElementById("par14").value) + 3, parseInt(document.getElementById("par15").value) + 3, parseInt(document.getElementById("par16").value) + 3, parseInt(document.getElementById("par17").value) + 3, parseInt(document.getElementById("par18").value) + 3];
    let agsscore_high2 = [parseInt(document.getElementById("par1").value) + 4, parseInt(document.getElementById("par2").value) + 4, parseInt(document.getElementById("par3").value) + 4, parseInt(document.getElementById("par4").value) + 4, parseInt(document.getElementById("par5").value) + 4, parseInt(document.getElementById("par6").value) + 4, parseInt(document.getElementById("par7").value) + 4, parseInt(document.getElementById("par8").value) + 4, parseInt(document.getElementById("par9").value) + 4, parseInt(document.getElementById("par10").value) + 4, parseInt(document.getElementById("par11").value) + 4, parseInt(document.getElementById("par12").value) + 4, parseInt(document.getElementById("par13").value) + 4, parseInt(document.getElementById("par14").value) + 4, parseInt(document.getElementById("par15").value) + 4, parseInt(document.getElementById("par16").value) + 4, parseInt(document.getElementById("par17").value) + 4, parseInt(document.getElementById("par18").value) + 4];
    let agsscore_neg = [parseInt(document.getElementById("par1").value) + 1, parseInt(document.getElementById("par2").value) + 1, parseInt(document.getElementById("par3").value) + 1, parseInt(document.getElementById("par4").value) + 1, parseInt(document.getElementById("par5").value) + 1, parseInt(document.getElementById("par6").value) + 1, parseInt(document.getElementById("par7").value) + 1, parseInt(document.getElementById("par8").value) + 1, parseInt(document.getElementById("par9").value) + 1, parseInt(document.getElementById("par10").value) + 1, parseInt(document.getElementById("par11").value) + 1, parseInt(document.getElementById("par12").value) + 1, parseInt(document.getElementById("par13").value) + 1, parseInt(document.getElementById("par14").value) + 1, parseInt(document.getElementById("par15").value) + 1, parseInt(document.getElementById("par16").value) + 1, parseInt(document.getElementById("par17").value) + 1, parseInt(document.getElementById("par18").value) + 1];

    let z = 0;  //z wird für eine willkürliche Zahl definiert und in den einzelnen for Schlaufen überschrieben

/**der nun folgende Codeabschnitt prüft in welchem Bereich das Coursehandicap ist, sucht dann die Löcher,
 *  wessen Lochindex von Eins bis zum Courserating gehen (unter 0 wird beim einfachsten Loch (Lochindex 18) begonnen und eine Vorgabe abgezogen,
 * zwischen 0 und 18 wird beim schwersten Loch (Lochindex 1) begonnen und eine Vorgabe hinzugefügt, zwischen 18 und 36 wird ebenfalls beim schwersten begonnen
 * und eine oder zwei Vorgaben den jeweiligen Löchern hinzugefügt, zwischen 36 und 54 wird ebenfalls beim schwersten Loch begonnen und eine oder zwei Vorgaben
 *  den jeweiligen Löchern hinzugefügt) und gibt anschliessend die jeweiligen Netto Doppelbogeys an (das Netto Doppelbogey wir berechnet aus dem jeweiligen Par, plus 2 plus die jeweiligen Vorgaben)*/


    //for Schlaufe für ein Coursehandicap unter Null
    if (coursehcp1 < 0 ){
        coursehcp1 = coursehcp1 + 18; 
        for( let i = 0; i <coursehcp1+1; ++i ){

            z = holeindex.indexOf(i);
            agsscore_neg[z] = agsscore_neg[z] + 1;
        }
        document.getElementById("test").innerHTML = agsscore_neg;
        var ags_vector = agsscore_neg;
    }
    //for Schlaufe für ein Coursehandicap zwischen Null und Achtzehn
    else if(0 <= coursehcp1 && coursehcp1 < 18 ){
        for( let i = 0; i <coursehcp1 + 1; ++i ){

            z = holeindex.indexOf(i);
            agsscore_strd[z] = agsscore_strd[z] + 1;
        }
        document.getElementById("test").innerHTML = agsscore_strd;
        var ags_vector = agsscore_strd;
    }
    //for Schlaufe für ein Coursehandicap zwischen Achtzehn und Sechsunddreissig
    else if(18 <= coursehcp1 &&  coursehcp1 < 36 ){
        coursehcp1 = coursehcp1 % 18;
        
        for( let i = 0; i <=coursehcp1; ++i ){

            z = holeindex.indexOf(i);
            agsscore_high1[z] = agsscore_high1[z] + 1;
        }
        document.getElementById("test").innerHTML = agsscore_high1;
        var ags_vector = agsscore_high1;
    }
    //for Schlaufe für ein Coursehandicap zwischen Sechsunddreissig und Vierundfünfzig
    else if(36 <= coursehcp1 && coursehcp1 < 54 ){
        coursehcp1 = coursehcp1 % 18;
        for( let i = 0; i <= coursehcp1; ++i ){

            z = holeindex.indexOf(i);
            agsscore_high2[z] = agsscore_high2[z] + 1;
        }
        document.getElementById("test").innerHTML = agsscore_high2;
        var ags_vector = agsscore_high2;

    }
    //hier wird der Text "Failed Input" ausgegeben, falls das berechnete Coursehandicap nicht verwendet werden kann
    else{
        document.getElementById("test").innerHTML = "Failed Input"; 
        }

    const score = [parseInt(document.getElementById("shots1").value), parseInt(document.getElementById("shots2").value),
        parseInt(document.getElementById("shots3").value), parseInt(document.getElementById("shots4").value),
        parseInt(document.getElementById("shots5").value), parseInt(document.getElementById("shots6").value),
        parseInt(document.getElementById("shots7").value), parseInt(document.getElementById("shots8").value),
        parseInt(document.getElementById("shots9").value), parseInt(document.getElementById("shots10").value),
        parseInt(document.getElementById("shots11").value), parseInt(document.getElementById("shots12").value),
        parseInt(document.getElementById("shots13").value), parseInt(document.getElementById("shots14").value),
        parseInt(document.getElementById("shots15").value), parseInt(document.getElementById("shots16").value),
        parseInt(document.getElementById("shots17").value), parseInt(document.getElementById("shots18").value)];



    var ags_real = [];
    for (var i=1; i <= 18;i++){
        ags_real.push(0);
    }
    
    for(i = 0; i < 18; ++i){
        ags_real[i]= Math.min(score[i],ags_vector[i]);
    } 
    
    document.getElementById("scoreout").innerHTML = ags_real;


    var agstot = (previousValue, currentValue) => previousValue + currentValue;

    document.getElementById("adjustedgrossscore").innerHTML = ags_real.reduce(agstot);
     


    sd = Math.round(((113 / sloperating) * (ags_real.reduce(agstot) - courserating)) * 10) / 10;

    document.getElementById("sdout").innerHTML = sd;


}


//


function neueshcp() {
    
    var take = parseFloat(document.getElementById("sdout").innerHTML);
    

    let altesd = [parseFloat(document.getElementById("sd1").value), parseFloat(document.getElementById("sd2").value), parseFloat(document.getElementById("sd3").value), 
        parseFloat(document.getElementById("sd4").value), parseFloat(document.getElementById("sd5").value), parseFloat(document.getElementById("sd6").value), 
        parseFloat(document.getElementById("sd7").value), parseFloat(document.getElementById("sd8").value), parseFloat(document.getElementById("sd9").value), 
        parseFloat(document.getElementById("sd10").value), parseFloat(document.getElementById("sd11").value), parseFloat(document.getElementById("sd12").value), 
        parseFloat(document.getElementById("sd13").value), parseFloat(document.getElementById("sd14").value), parseFloat(document.getElementById("sd15").value), 
        parseFloat(document.getElementById("sd16").value), parseFloat(document.getElementById("sd17").value), parseFloat(document.getElementById("sd18").value), 
        parseFloat(document.getElementById("sd19").value), take];


        

    for(var z = 0; z < 12; ++z) {
            
        var max = 0;
        for(var i= 0; i < 20; ++i){
            if(max < altesd[i]){
                max= altesd[i];
            }
        }

        const index = altesd.indexOf(max);
        if (index > -1) {
            altesd.splice(index, 1);
        }
    }
           //var index = altesd.indexOf(max);
            //altesd.splice(index, 1);
        
    



    //z = holeindex.indexOf(i);
    //agsscore_neg[z] = agsscore_neg[z]

    var neusdtot = (previousValue, currentValue) => previousValue + currentValue;

    var neusd = (altesd.reduce(neusdtot)) / 8;
    var neusdrounded = Math.round((neusd) * 10) / 10;

    document.getElementById("hcpneuout").innerHTML = neusdrounded; 

    

}


/*function real_ags(){
   
    const ags_vector = parseInt(document.getElementById(test).value);

    const score = [parseInt(document.getElementById("shots1").value), parseInt(document.getElementById("shots2").value),
        parseInt(document.getElementById("shots3").value), parseInt(document.getElementById("shots4").value),
        parseInt(document.getElementById("shots5").value), parseInt(document.getElementById("shots6").value),
        parseInt(document.getElementById("shots7").value), parseInt(document.getElementById("shots8").value),
        parseInt(document.getElementById("shots9").value), parseInt(document.getElementById("shots10").value),
        parseInt(document.getElementById("shots11").value), parseInt(document.getElementById("shots12").value),
        parseInt(document.getElementById("shots13").value), parseInt(document.getElementById("shots14").value),
        parseInt(document.getElementById("shots15").value), parseInt(document.getElementById("shots16").value),
        parseInt(document.getElementById("shots17").value), parseInt(document.getElementById("shots18").value)];

        
    //const ags_vector = parseInt(document.getElementById(test).value);

    var ags_real = [];
    for (var i=1; i <= 18;i++){
        ags_real.push(0);
    }

    for(i = 0; i < 18; ++i){
        ags_real[i]= Math.min(score[i],ags_vector[i]);
    } 

    document.getElementById("scoreout").innerHTML = ags_real;
    
}*/

/**diese Funktion liest die vom Pageuser eingetragenen Werte für @sloperating @courserating @hcpindex (aktueller HCP-Index) und @partot (Par wert des Golfplatzes) ein
 * die Funktion wird mit dem Knopf "eingaben anzeigen" ausgeführt (wird auch mit dem Knopf "chcp&out" ausgeführt, siehe HTML Code)
 * diese eingelesenen Werte werden dann unterhalb des Knopfes "eingaben anzeigen" neben den entsprechenden Namen ausgegeben
 * 
 */



function out(hcpindex, sloperating, courserating, partot) {
    var hcpindex = parseFloat(document.getElementById(hcpindex).value)
    document.getElementById("hcpindexout").innerHTML = hcpindex

    var sloperating = parseFloat(document.getElementById(sloperating).value)
    document.getElementById("sloperatingout").innerHTML = sloperating

    var courserating = parseFloat(document.getElementById(courserating).value)
    document.getElementById("courseratingout").innerHTML = courserating

    var partot = parseFloat(document.getElementById(partot).value)
    document.getElementById("partotout").innerHTML = partot;
}


/**diese Funktion berechnet das Coursehandicap
 * sie wird mit dem Knopf "chcp berechnen" ausgeführt (und mit dem Knopf "chcp&out", siehe HTML Code) und gibt das Resultat neben "Coursehcp" aus
 * die Werte welche für die Berechnung benötigt sind, werden alle vom Pageuser eingetragen und vom Programm eingelesen
 */



function chcp(hcpindex, sloperating, courserating, partot) {
    var hcpindex = parseFloat(document.getElementById(hcpindex).value)
    var sloperating = parseFloat(document.getElementById(sloperating).value)
    var courserating = parseFloat(document.getElementById(courserating).value)
    var partot = parseFloat(document.getElementById(partot).value)

    var coursehcp = Math.round(hcpindex * sloperating / 113 + (courserating - partot))

    

    document.getElementById("coursehcpout").innerHTML = coursehcp;
}

/**dieser Funktion rechnet die gesamte Anzahl der Schläge auf einer Runde (18Loch) aus
 * die einzelnen Schläge der jeweiligen Löcher werden vom Pageuser eingetragen
 * beim drücken des Knopfes "Rechnen", werden diese Werte vom Programm eingelesen, gerechnet und neben "Schläge für 18 Loch" ausgegeben
 * diese Funktion wurde erstellt um das rechnen mit vom Pageuser eigegebenen Werten zu üben
 */


/* function calc(shots1, shots2, shots3, shots4, shots5, shots6, shots7, shots8, shots9, shots10, shots11, shots12, shots13, shots14, shots15, shots16, shots17, shots18) {
    var shots1 = parseInt(document.getElementById(shots1).value)
    var shots2 = parseInt(document.getElementById(shots2).value)
    var shots3 = parseInt(document.getElementById(shots3).value)
    var shots4 = parseInt(document.getElementById(shots4).value)
    var shots5 = parseInt(document.getElementById(shots5).value)
    var shots6 = parseInt(document.getElementById(shots6).value)
    var shots7 = parseInt(document.getElementById(shots7).value)
    var shots8 = parseInt(document.getElementById(shots8).value)
    var shots9 = parseInt(document.getElementById(shots9).value)
    var shots10 = parseInt(document.getElementById(shots10).value)
    var shots11 = parseInt(document.getElementById(shots11).value)
    var shots12 = parseInt(document.getElementById(shots12).value)
    var shots13 = parseInt(document.getElementById(shots13).value)
    var shots14 = parseInt(document.getElementById(shots14).value)
    var shots15 = parseInt(document.getElementById(shots15).value)
    var shots16 = parseInt(document.getElementById(shots16).value)
    var shots17 = parseInt(document.getElementById(shots17).value)
    var shots18 = parseInt(document.getElementById(shots18).value)

    var shotstotal = shots1 + shots2 + shots3 + shots4 + shots5 + shots6 + shots7 + shots8 + shots9 + shots10 + shots11 + shots12 + shots13 + shots14 + shots15 + shots16 + shots17 + shots18
   
    document.getElementById("shotstotalout").innerHTML = shotstotal;

}*/
    
    //var coursehcp = 2 * 145 / 113 + (74.2 - 72)

    //hcpindex * sloperating / 113 + (courserating - par)

    //document.getElementById("shotstotal").innerHTML = calculations;

    //document.getElementById("coursehcp").innerHTML = coursehcp;

    //var sloperating = parseInt(document.getElementById(sloperating).value)

    //var courserating = parseInt(document.getElementById(courserating).value)

    //var hcpindex = parseInt(document.getElementById(hcpindex).value)

    //var coursehcp = hcpindex + hcpindex

    //document.getElementById("coursehcp").innerHTML = coursehcp

    //document.write(calculations)
    
    //innerHTML(shots1 + shots2 + shots3 + shots4 + shots5 + shots6 + shots7 + shots8 + shots9 + shots10 + shots11 + shots12 + shots13 + shots14 + shots15 + shots16 + shots17 + shots18)

    //alert(calculations);




