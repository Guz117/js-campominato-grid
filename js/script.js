const row = 10;
const col = 10;
const container = document.querySelector('.container')

for (let i = 1; i < 101; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${col})`;
    square.style.height = `calc(100% / ${row})`;
    square.append(i);
    container.append(square);
}


