const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e22ac274dd5c80",
      pass: "e6baf79ad3a033"
    }
});

// Route to handle form submission
app.post('/send', (req, res) => {
    console.log(req)
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'emientreprises@gmail.com',
        subject: 'Contact Par SiteWeb',
        text: `De la part de: ${name}, \nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});