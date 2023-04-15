const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const stat = document.getElementById('status')

let crashes = 0 


document.addEventListener('keydown', function (event){
    jump();
});

function jump(){
    if (dino.classList !='jump'){
        dino.classList.add('jump')
    }
    setTimeout (function(){
        dino.classList.remove('jump');
    }, 600)
}

let crash = false

let isAlive = setInterval(function(){
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    
    

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140 && !crash){ 
        crash = true
        crashes++
        stat.innerHTML = crashes 
        // добавляем паузу в 1 секунду, чтобы счетчик не увеличивался слишком быстро
        setTimeout(function() {
          crash = false
        }, 2000)
      }
 }, 10)