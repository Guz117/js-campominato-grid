const rowEasy = 10;
const colEasy = 10;

const rowNormal = 8;
const colNormal = 8;

const rowCrazy = 7;
const colCrazy = 7;

const container = document.querySelector('.container')


const easySelection = document.getElementById('select').value = 'easy';
const normalSelection = document.getElementById('select').value = 'normal';
const crazySelection = document.getElementById('select').value = 'crazy';
const button = document.getElementById('play');

button.addEventListener('click',
  function () {
    if (easySelection) {
        for (let i = 1; i < 101; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${colEasy})`;
            square.style.height = `calc(100% / ${rowEasy})`;
            square.append(i);
            container.append(square);
        }
    } else if (normalSelection){
        for (let i = 1; i < 65; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${colNormal})`;
            square.style.height = `calc(100% / ${rowNormal})`;
            square.append(i);
            container.append(square);
        }
    } else if (crazySelection) {
        for (let i = 1; i < 50; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${colCrazy})`;
            square.style.height = `calc(100% / ${rowCrazy})`;
            square.append(i);
            container.append(square);
        }
    }
  });

