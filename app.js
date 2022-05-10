// import functions and grab DOM elements
import { renderElf } from './utils.js';

const defeatedNumEl = document.querySelector('#defeated-number');
const playerHpEl = document.querySelector('#player-hp');
const playerImgEl = document.querySelector('#player-img');
const form = document.querySelector('form');
const elfListEl = document.querySelector('.elves');
// let state
let defeatedElfCount = 0;
let playerHp = 10;
let elves = [
    { name: 'Jingles', hp: 1 },
    { name: 'Captain HappyDance', hp: 5 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user input
    const data = new FormData(form);
    const elfName = data.get('elf-name');
    // use user input to update state 
    const newElf = {
        name: elfName,
        hp: Math.ceil(Math.random() * 5)
    };
    elves.push(newElf);
    displayElf();
});
  // update DOM to reflect the new state
function displayElf() {
    elfListEl.textContent = '';
    for (let elf of elves) {
        const elfEl = renderElf(elf);
        //add eventlistener here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        elfEl.addEventListener('click', () => {
            elfClickHandler(elf);
        });
        //clickhandler HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        elfListEl.append(elfEl);
    }
}

displayElf();
//function clickhandler!!!!!!!!!!
function elfClickHandler(elf) {
    if (elf.hp === 0) return;
    if (playerHp === 0) return;

    const playerHit = Math.random();
    if (playerHit < 1) {
        elf.hp--;
        displayElf();
        alert(`You Hit ${elf.name}!!`);
        if (elf.hp === 0) {
            defeatedElfCount++;
            defeatedNumEl.textContent = defeatedElfCount;
        }
    } else {
        alert(`you Missed ${elf.name}!!`);
    }
    const elfHit = Math.random();
    if (elfHit < 1) {
        playerHp--;
        playerHpEl.textContent = playerHp;
        alert(`${elf.name} hit you!`);
        if (playerHp === 0) {
            alert('Game Over');
            playerImgEl.classList.add('game-over');
        }
    } else {
        alert(`${elf.name} tried to hit you and missed!!!`);
    }
} 