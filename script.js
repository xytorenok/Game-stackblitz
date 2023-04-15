const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const stat = document.getElementById('status');
const life = document.getElementById('life');
const message = document.getElementById('message');
const distancePoint = document.getElementById('distance');

let crashes = 0;
let lives = 5;
let metres = 0;

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
    start = true
    metres ++;
    distancePoint.innerHTML = metres;
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
    metres--;  

    if (crashes == 4) {
      crashes = -1;
    }

    // обнуляем пройденное растояние если жизни на нуле 
    if (lives == 0) {
      lives = 5;
      metres = -1;
    }

    // добавляем паузу в 1 секунду, чтобы счетчик не увеличивался слишком быстро
    setTimeout(function () {
      crash = false;
    }, 2000);
  }
}, 10);

//  message.hidden = false
