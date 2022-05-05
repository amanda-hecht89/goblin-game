// import functions and grab DOM elements
import { renderElf } from './utils';

const defeatedNumEl = document.querySelector('#defeated-number');
const playerHpEl = document.querySelector('#player-hp');
const playerImgEl = document.querySelector('#player-img');
const form = document.querySelector('form');
const elfListEl = document.querySelector('.elves');
// let state
let defeatedElfCount = 0;
let playerHp = 2;
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
    //elf add event listener

    }

}