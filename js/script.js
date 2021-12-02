const rowEasy = 10;
const colEasy = 10;

const rowNormal = 9;
const colNormal = 9;

const rowCrazy = 7;
const colCrazy = 7;

const container = document.querySelector('.container');
const button = document.getElementById('play');

button.addEventListener('click',
  function () {
    container.innerHTML = '';
    let selection = document.getElementById('select').value;
    console.log(selection)
    if (selection == 'Easy') {
        for (let i = 1; i <= 100; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', function () {
                this.style.background = 'blue';
            } );
            square.style.width = `calc(100% / ${colEasy})`;
            square.style.height = `calc(100% / ${rowEasy})`;
            square.append(i);
            container.append(square);
        }
    } else if (selection == 'Normal'){
        for (let i = 1; i <= 81; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', function () {
                this.style.background = 'blue';
            } );
            square.style.width = `calc(100% / ${colNormal})`;
            square.style.height = `calc(100% / ${rowNormal})`;
            square.append(i);
            container.append(square);
        }
    } else if (selection == 'Crazy') {
        for (let i = 1; i <= 49; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', function () {
                this.style.background = 'blue';
            } );
            square.style.width = `calc(100% / ${colCrazy})`;
            square.style.height = `calc(100% / ${rowCrazy})`;
            square.append(i);
            container.append(square);
        }
    }
  });

