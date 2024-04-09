const express = require('express');
const app = express();
const port = 4000;

// Existing route to handle '/multiplication-table' path
app.get('/multiplication-table', (req, res) => {
    const size = 12;
    const table = [];

    for (let i = 1; i <= size; i++) {
        const row = [];
        for (let j = 1; j <= size; j++) {
            row.push(i * j);
        }
        table.push(row);
    }

    res.json({ table: table });
});

app.use(express.static('public'));

// Server start and listen on port 4000
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
