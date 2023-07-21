// first image


var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var imageSourceImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , imageSourceImage);


// second img

var randomImage2 = Math.floor (Math.random() * 6) + 1 ;

var randomDiceImage2 = "images/dice" + randomImage2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

// winner

if ( randomNumber1 > randomImage2 ) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins";
}else if (randomImage2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆 Player 2 wins";
}else {
    document.querySelector("h1").innerHTML = "🎌Draw!";
}
 


