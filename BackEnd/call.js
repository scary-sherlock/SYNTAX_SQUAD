// server.js
const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 3000;

// Twilio credentials
const accountSid = 'AC0d5aba96ed0951f9eba8f11530592fcd';
const authToken = '07d1d826eb5d1fee251d1bdb011f119f';
const client = new twilio(accountSid, authToken);

app.get('/call', (req, res) => {
    const to = req.query.to; // Phone number to call

    client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml', // URL for Twilio to fetch instructions
        to: to,
        from: '+12348134658'
    })
    .then(call => res.send(`Call initiated with SID: ${call.sid}`))
    .catch(error => res.status(500).send(error));

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
