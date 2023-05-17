'use strict';
//selekts element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector("#score--0");
const score0E2 = document.querySelector("#score--1");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const rolebtn = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

score0El.textContent = 0
score0E2.textContent = 0
let curentscore = 0
let activePlayer = 0
let score = [0, 0]
let playing = true



const switchPlayer = function () {



    document.getElementById(`current--${activePlayer}`).textContent = 0
    curentscore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

rolebtn.addEventListener('click', function () {

    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = (`dice-${dice}.png`)

        if (dice !== 1) {
            curentscore += dice
            document.getElementById(`current--${activePlayer}`).textContent = curentscore

        } else {

            switchPlayer()
        }
    }
})


btnHold.addEventListener('click', function () {
    if (playing) {


        //zadrzava skor
        score[activePlayer] += curentscore
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]

        //2add trenutni skor na total
        if (score[activePlayer] >= 10) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')


        } else {
            switchPlayer()
        }
        //3 if skor>=100 cutent win, ako ne swic plejer
    }
})