const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const jsonData = require('./users_example.json');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ title: 'Hola mundo' });
});

app.get('/all', (req, res) => {
    res.json(jsonData);
});

app.post('/go-v3-dev/digital/webhooks/kyc', (req, res) => {
    console.log("req prueba => ", req.body);
    res.json({response: req.body});
})


app.listen(PORT, console.log("Express listening PORT: " + PORT));
