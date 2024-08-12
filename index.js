const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Exercise 3: Phone number validation
app.post('/validatePhoneNumber', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneRegex.test(phoneNumber)) {
        res.send('The phone number is correct.');
    } else {
        res.send('The phone number is incorrect.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
