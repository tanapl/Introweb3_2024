document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:4000/multiplication-table')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('timesTable');
            data.table.forEach((row, rowIndex) => {
                const rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
                // Add 'header-row' class to the first row
                if (rowIndex === 0) rowDiv.classList.add('header-row');
                
                row.forEach((cell, cellIndex) => {
                    const cellDiv = document.createElement('div');
                    cellDiv.classList.add('cell');
                    cellDiv.textContent = cell;
                    // Add 'header-cell' class to the first cell of each row
                    if (cellIndex === 0) cellDiv.classList.add('header-cell');
                    rowDiv.appendChild(cellDiv);
                });
                container.appendChild(rowDiv);
            });
            //const cells = document.querySelectorAll('.cell'); // Get all cell elements
            //cells.forEach(cell => {
            //    cell.addEventListener('click', function() {
                    // Remove the 'highlight' class from all cells
            //        cells.forEach(c => c.classList.remove('highlight'));
                    // Add the 'highlight' class to the clicked cell
            //        cell.classList.add('highlight');
            //    });
            //});
            function removeHighlights(cells) {
                cells.forEach(cell => cell.classList.remove('highlight'));
            }
        
            function addHighlights(cells, number) {
                cells.forEach(cell => {
                    if(cell.textContent === number.toString()) {
                        cell.classList.add('highlight');
                    }
                });
            }
        
            // Fetch the data and populate the grid, then:
            const cells = document.querySelectorAll('.cell'); // Get all cell elements
            cells.forEach(cell => {
                cell.addEventListener('click', function() {
                    const numberToHighlight = cell.textContent; // Number that was clicked
                    removeHighlights(cells); // First remove any existing highlights
                    addHighlights(cells, numberToHighlight); // Then add highlights where needed
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
