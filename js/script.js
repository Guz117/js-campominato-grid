const rowEasy = 10;
const colEasy = 10;

const rowNormal = 8;
const colNormal = 8;

const rowCrazy = 7;
const colCrazy = 7;

const container = document.querySelector('.container')

// for (let i = 1; i < 101; i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     square.style.width = `calc(100% / ${colEasy})`;
//     square.style.height = `calc(100% / ${rowEasy})`;
//     square.append(i);
//     container.append(square);
// }

// for (let i = 1; i < 65; i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     square.style.width = `calc(100% / ${colNormal})`;
//     square.style.height = `calc(100% / ${rowNormal})`;
//     square.append(i);
//     container.append(square);
// }


for (let i = 1; i < 50; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${colCrazy})`;
    square.style.height = `calc(100% / ${rowCrazy})`;
    square.append(i);
    container.append(square);
}



