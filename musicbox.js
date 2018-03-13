//sounds

var boom = document.getElementById('boom');
var clap = document.getElementById('clap');
var hihat = document.getElementById('hihat');
var kick = document.getElementById('kick');
var openhat = document.getElementById('openhat');
var ride = document.getElementById('ride');
var snare = document.getElementById('snare');
var tink = document.getElementById('tink');
var tom = document.getElementById('tom');

// divs

var m0 = document.getElementById('m0');
var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');
var m5 = document.getElementById('m5');
var m6 = document.getElementById('m6');
var m7 = document.getElementById('m7');
var m8 = document.getElementById('m8');

//action

m0.onclick = function(){
  boom.play();
}
m1.onclick = function(){
  clap.play();
}
m2.onclick = function(){
  hihat.play();
}
m3.onclick = function(){
  kick.play();
}
m4.onclick = function(){
  openhat.play();
}
m5.onclick = function(){
  ride.play();
}
m6.onclick = function(){
  snare.play();
}
m7.onclick = function(){
  tink.play();
}
m8.onclick = function(){
  tom.play();
}
