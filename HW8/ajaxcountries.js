/*
@file - ajaxcountries.js
@author - Carter Luka

    Uses ajax and json to obtain data from a countries database, and the modifies the html page based on that data
*/

/*
Changes the default behavior of the links passed in as arguments

@param buttonList - An array containing all of the links to be modified
*/
function setLinkBehavior(buttonList) {
    for (i = 0; i < buttonList.length; i++) {
        buttonList[i].onclick = function() {
            
            let ourRequest = new XMLHttpRequest();
            ourRequest.open('GET', '')
            
            
            console.log("bruh");
            window.event.preventDefault();
        };
    }
}

window.onload = function() {


    let europeButton = window.document.getElementById("Europe");
    let africaButton = window.document.getElementById("Africa");
    let asiaButton = window.document.getElementById("Asia");
    let northAmericaButton = window.document.getElementById("North America");
    let southAmericaButton = window.document.getElementById("South America");
    let antarcticaButton = window.document.getElementById("Antarctica");
    let australiaButton = window.document.getElementById("Australia");

    let buttonList = [
        europeButton, africaButton, asiaButton, northAmericaButton, southAmericaButton, antarcticaButton, australiaButton
    ]

    setLinkBehavior(buttonList);

}