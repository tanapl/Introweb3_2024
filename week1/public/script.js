document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:4000/multiplication-table')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('timesTable');
            data.table.forEach((row, i) => {
                const rowDiv = document.createElement('div');
                row.forEach((cell, j) => {
                    const cellDiv = document.createElement('div');
                    cellDiv.classList.add('cell');
                    cellDiv.textContent = (i+1) * (j+1);
                    rowDiv.appendChild(cellDiv);
                });
                container.appendChild(rowDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
