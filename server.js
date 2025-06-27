const express = require('express');
const app = express();
const PORT = 3500;
const jsonData = require('./users_example.json');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ title: 'Hola mundo' });
});

app.get('/all', (req, res) => {
    res.json(jsonData);
});

app.post('/validacion', (req, res) => {
    console.log("req => ", req.body);
    res.json({response: req.body});
})


app.listen(PORT, console.log("Express listening PORT: " + PORT));
