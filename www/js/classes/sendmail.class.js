module.exports = function (req, res) {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports 
            auth: {
                user: account.user, // generated ethereal user 
                pass: account.pass // generated ethereal password 
            }
        });
        console.log('transporter',transporter);
        // setup email data with unicode symbols 
        let mailOptions = {
            from: '"Dajmans webbshop 👻"', // sender address 
            to: req.body.to, // list of receivers 
            subject: req.body.subject, // Subject line 
            text: '', // plain text body 
            html: '<h1>Du har beställt följande</h1>' // html body 
        };
  
        // send mail with defined transport object 
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account 
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com> 
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou... 
        });
    });
  }