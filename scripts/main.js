var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bax.jpg') {
      myImage.setAttribute ('src','images/408.jpg');
    } else {
      myImage.setAttribute ('src','images/bax.jpg');
    }
}
/*
Всё, что находится тут - комментарий.
*/
// Это комментарий
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
/*
эквивалентно
var myHTML = document.querySelector('html');
myHTML.onclick = function() {};
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}





