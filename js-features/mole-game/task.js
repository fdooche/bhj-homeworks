let winCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');
const holes = [];

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for(let i = 1; i < 10; i++) {
    holes.push(getHole(i));
}

holes.forEach(function(hole) {
    hole.onclick = function() {
        if (this.className.includes( 'hole_has-mole' )) {
            winCounter.textContent++;
            if (winCounter.textContent > 9)  {
                alert('Победа!');
                winCounter.textContent = 0;
                lostCounter.textContent = 0;
            }
        } else {
            lostCounter.textContent++;
            if (lostCounter.textContent > 4) {
                alert('Вы проиграли');
                winCounter.textContent = 0;
                lostCounter.textContent = 0;
            }
        }
    }
})