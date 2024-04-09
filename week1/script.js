document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('timesTable');
    for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 12; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = `${i} x ${j} = ${i * j}`;
            container.appendChild(cell);
        }
    }
});
