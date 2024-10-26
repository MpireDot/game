// Generate random dice numbers from 1 to 6
var firstRandomNum = Math.random() * 6;
firstRandomNum = Math.floor(firstRandomNum) +1;


// image/dice1.png upto image/dice6.png
var firstDiceImage = 'images/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

// Generate random dice numbers from 1 to 6
var secondRandomNum = Math.random() * 6;
secondRandomNum = Math.floor(secondRandomNum) +1;


// image/dice1.png upto image/dice6.png
var secondDiceImage = 'images/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = "Player One Wins!";
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector('h1').innerHTML = "Player Two Wins!";
} else {
    document.querySelector('h1').innerHTML = "It's A Draw!";
}
