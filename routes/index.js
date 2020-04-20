const router = require("express").Router()
const sendGrid = require('@sendGrid/mail');

router.post("/api/email", (req, res) => {

    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'sgrantkyle@gmail.com',
        from: req.body.email,
        subject: 'Portfolio Contact!',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(res => {

            res.status(200).json({
                success: true

            });
        })

        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false

            })

        });
});

module.exports = router;

