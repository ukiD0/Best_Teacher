var i = 0;
var txt = 'Evgeniiiiii best teacher'; /* The text */
var speed = 95; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}