const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const stat = document.getElementById('status');
const life = document.getElementById('life');
const message = document.getElementById('message');
const distancePoint = document.getElementById('distance');
const cruiser = document.getElementById('cruiser');
const rocket = document.getElementById('rocket');



let crashes = 0;
let lives = 5;
let daysClean = 0;

document.addEventListener('keydown', function (event) {
  jump();
});

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 600);

  if (daysClean == 1) {
    rocket.style.left = '30%'
    rocket.style.animation = 'rocket 5000ms linear';
  }
}

let crash = false;
let start = false;

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );
  life.innerHTML = lives;

  //   счетчик пройденного пути
  if (cactusLeft < 50 && cactusLeft > 0 && !start) {
    start = true;
    daysClean++;
    distancePoint.innerHTML = daysClean;
    // добавляем паузу в 1 секунду, чтобы счетчик не увеличивался слишком быстро
    setTimeout(function () {
      start = false;
    }, 2000);
  }

  if (cactusLeft < 100 && cactusLeft > 50 && dinoTop >= 125 && !crash) {
    crash = true;
    crashes++;
    stat.innerHTML = crashes;
    lives--;
    daysClean--;

    if (crashes == 4) {
      crashes = -1;
    }

    // обнуляем пройденное растояние если жизни на нуле
    if (lives == 0) {
      lives = 5;
      daysClean = -1;
    }

    // добавляем паузу в 1 секунду, чтобы счетчик не увеличивался слишком быстро
    setTimeout(function () {
      crash = false;
    }, 2000);
  }
}, 10);

let rocketStrike = setInterval(function () {

  let cruiserRight = parseInt(window.getComputedStyle(cruiser).getPropertyValue('right'));
  let cruiserLeft = parseInt(window.getComputedStyle(cruiser).getPropertyValue('left'));

console.log(`Корабль правое позиционирование: ${cruiserRight}`)
console.log(`Корабль левое позиционирование: ${cruiserLeft}`)

let rocketLeft = parseInt(window.getComputedStyle(rocket).getPropertyValue('left'));
let rocketRight = parseInt(window.getComputedStyle(rocket).getPropertyValue('right'));

console.log(`Рокета правое позиционирование: ${rocketRight}`)
console.log(`Рокета левое позиционирование: ${rocketLeft}`)

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

 
  if (rocketLeft < 50 && rocketLeft > 0 && !start) {
    
    
  }

  // (cactusLeft < 100 && cactusLeft > 50 && dinoTop >= 125 && !crash)

}, 5500);
