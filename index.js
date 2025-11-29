const express = require('express');
const app = express();

const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Horror'},
    {id: 3, name: 'Romance'},
]

app.get('/api/genres', (req, res) => {
    res.send(genres);
});