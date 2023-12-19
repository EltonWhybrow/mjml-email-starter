const nodemailer = require('nodemailer');
var htmlToText = require('nodemailer-html-to-text').htmlToText
require('dotenv').config();

const partnerName = process.argv[2];
const templateName = process.argv[3];
// let env = process.argv[3];

// console.log('The template is: ', templateName + '.html');
// console.log('The parnter is: ', partnerName);
const emailToTest = templateName + '.html';
// console.log('emailToTest: ', emailToTest);
// console.log('The environment is: ', env);

// Reusable transporter for nodemailer
const transporter = nodemailer.createTransport({
    host: "mail.supremecluster.com",
    port: 465, // 587
    // secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    debug: true, // show debug output
    logger: true // log information in console
});

const message = {
    from: 'whybrow.elton@gmail.com',
    to: 'info@widesign.co.uk', // Can be comma sep. list NOTE info@widesign.co.uk is wonky
    //  whybrow.elton@gmail.com,
    subject: 'Test out emails for"' + partnerName + '" email template is: "' + emailToTest + '"',
    // text: 'Elton here! - Testing out "' + partnerName + '" email template is: "' + emailToTest + '"', // Plain text body
    html: {
        path: partnerName + '/dist/' + emailToTest
    }
};
transporter.use('compile', htmlToText());
transporter.sendMail(message, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log('The info:', info);
    }
});