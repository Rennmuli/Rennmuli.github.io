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


