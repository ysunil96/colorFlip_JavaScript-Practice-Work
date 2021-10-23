
const colors = ["green","red","blue","purple","pink","rgba(234,123,234)"];

const btn = document.getElementById("btn");

const colorName = document.querySelector(".color");


btn.addEventListener("click", function(){

    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    colorName.textContent = colors[randomNumber]

    document.body.style.backgroundColor = colors[randomNumber];

});

function getRandomNumber(){

    return Math.floor(Math.random()* colors.length)
    

};



