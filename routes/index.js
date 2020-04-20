import axios from 'axios';
import {Router} from 'express';
import sendGrid from 'sendgrid';

router.post("api/email", (req, res)=> {

    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'sgrantkyle@gmail.com',
        from: req.body.email,
        subject: 'Portfolio Contact!',
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

            })

        });
});

// export default 