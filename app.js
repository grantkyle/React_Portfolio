const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());
app.use(express.static("client/build"))

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.post('/api/email', (req, res, next) => {
    sendGrid.setApiKey('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');
    const msg = {
        to: 'sgrantkyle@gmail.com',
        from: req.body.email,
        subject: 'Website Contact Email',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });
        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.PORT || 3030, '0.0.0.0');