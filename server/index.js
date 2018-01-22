const express = require('express');

const db = require('./db');
const Workers = require('./models/workers')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/all', async (req, res) => {
    try {
        res.send(await Workers.findAll({}));
    } catch (error) {
        res.send('לא מצליח להתחבר סורי');
    }
});





app.post('/add', async (req, res) => {
    if (!req.body.name || !req.body.phone) {
        return res.send('no name or phone');
    }

    try {
        res.send(await Workers.create(req.body));
    } catch (error) {
        res.send(500);
    }
});






app.get('/all_with_promies', (req, res) => {
    Workers.findAll({}).then(results => {
        res.send(results);
    }
    ).catch(error => {
        res.send(500);
    });
});





app.listen(3001);











// app.get('/', (req, res) => {
//     db.query('SELECT * FROM workers WHERE id=2',
//     { type: db.QueryTypes.SELECT })
//     .then(function(workers) {
//       res.json(workers);
//     })
//   });
