const hexColors  = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];


const btn = document.getElementById("btn");


const colorName = document.querySelector(".color");



btn.addEventListener("click", function(){

    var Hex = "#";

    for(let i=0;i<6;i++){

        Hex += hexColors[getRandomNumber()];

    }

    document.body.style.backgroundColor = Hex;
    colorName.textContent = Hex;

});


function getRandomNumber(){
    return Math.floor(Math.random()*hexColors.length)
}