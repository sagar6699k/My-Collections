const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'chiefspammer@yourgreatdomain.com',
//     pass: 'SuperSecretPassword' // naturally, replace both with your real credentials or an application-specific password
//   }
// });

// const transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "1a2b3c4d5d6e7f", // replace with your Mailtrap credentials
//       pass: "your_password"
//     },
//     debug: true, // show debug output
//     logger: true // log information in console
//   });

// const mailOptions = {
//   from: 'vindication@enron.com',
//   to: 'friendsofenron@gmail.com, enemiesofenron@gmail.com',
//   subject: 'Invoices due',
//   text: 'Dudes, we really need your money.'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
// 	console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });




const sendEmail = async (email, subject) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "e1f43b8f86e92f", // replace with your Mailtrap credentials
                pass: "e63130f3707547"
            },
            debug: true, // show debug output
            logger: true // log information in console
        });

        const mailOptions = {
            from: 'simbathelionking@gmail.com',
            to: email,
            subject: subject,
            text: 'Your Account created successfully'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        console.log("email sent sucessfully");
    } catch (error) {
        const typedError = error
        console.log(typedError.message, "email not sent");
    }
};


module.exports = sendEmail;
