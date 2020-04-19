const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3002;
const app = express();

const bodyParser = require ('body-parser');
const cors = require ('cors');

const sendGrid = require ('@sendGrid/mail');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.post('/api/email', (req, res, next) => {

    sendGrid.setApiKey('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');
    const msg = {
        to: 'sgrantkyle@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status (200).json({
                success: true

            });
        })

        .catch (err => {

            console.log('error: ',err);
            res.status(401).json ({
                success: false

            })

        });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// const express = require ('express');
// const bodyParser = require ('body-parser');
// const cors = require ('cors');

// const sendGrid = require ('@sendGrid/mail');

// const app = express();

// app.use(bodyParser.json());

// app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// app.get('/api', (req, res, next) => {
//     res.send('API Status: Running')
// });

// app.post('/api/email', (req, res, next) => {

//     sendGrid.setApiKey('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');
//     const msg = {
//         to: 'sgrantkyle@gmail.com',
//         from: req.body.email,
//         subject: 'Website Contact',
//         text: req.body.message
//     }

//     sendGrid.send(msg)
//         .then(result => {

//             res.status (200).json({
//                 success: true

//             });
//         })

//         .catch (err => {

//             console.log('error: ',err);
//             res.status(401).json ({
//                 success: false

//             })

//         });
// });


// app.listen(3030, '0.0.0.0');