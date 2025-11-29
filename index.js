const Joi = require('joi');
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

function validateCourse(genre){
   const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    
    return schema.validate(genre);
}

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port} `));