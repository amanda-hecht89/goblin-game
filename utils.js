export function renderElf(elfData) {
    const elvesEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    elvesEl.classList.add('elf');

    nameEl.textContent = elfData.name;
    hpEl.textContent = elfData.hp < 0 ? 0 : elfData.hp;
    faceEl.textContent = elfData.hp > 0 ? '' : '';

    if (elfData.hp < 0) {
        elvesEl.classList.add('dead');
    }
    elvesEl.append(nameEl, faceEl, hpEl);

    return elvesEl;
}
