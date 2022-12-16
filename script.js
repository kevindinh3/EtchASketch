let columns = 16;
let rows = 16;


for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    for (let x = 0; x < rows; x++) {
        const row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    const container = document.querySelector('.container');
    container.appendChild(column);
}

const col = document.querySelector('.column');
col.addEventListener('mouseover', () => {
    col.style.backgroundColor = 'blue';
});
col.addEventListener('mouseout', () => {
    col.style.backgroundColor = 'lightblue';
});

const r = document.querySelector('.row');
r.addEventListener('mouseover', () => {
    r.style.backgroundColor = 'blue';
});
r.addEventListener('mouseout', () => {
    r.style.backgroundColor = 'lightblue';
});