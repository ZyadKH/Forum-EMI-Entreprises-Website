const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: "node36-eu.n0c.com", // Update the server hostname
    port: 465, // Update to the outgoing SMTP port you want to use (465 or 587)
    secure: true, // Set to true because you're using port 465 (secure connection)
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS // Use environment variable for password
    }
});

// Route to handle form submission
app.post('/send', (req, res) => {
    console.log(req)
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'contact@forumemientreprises.com',
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