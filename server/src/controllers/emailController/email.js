const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sebateam26@gmail.com',
        pass: 'eojoxffppjzhtwkw',
    },
});
module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'sebateam26@gmail.com',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};