const router = require('express').Router();
const nodemailer = require('nodemailer');


router.post('/send', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'u4mn5zu5ovjygbcc@ethereal.email',
          pass: 'cvVp61SucU63cpp8bW'
      }
  });
    
    // let transporter = nodemailer.createTransport({      
    //     host: "Gmail",
    //     auth: {
    //       type: "OAuth2",
    //       user: "nasehi.arezo@gmail.com",
    //       clientId: "224847136780-3er5t2rodkmo1ck0vq4vkk6b158rrdon.apps.googleusercontent.com",
    //       clientSecret: "OQ9Exf2BtwGNXoHkW4V3vbKp",
    //       refreshToken: "1/hYxAUz483JM1MtpJkDByzWK1bAueqpGwOoPMJ1xBaw"                              
    //     },
    

    //   tls:{
    //     rejectUnauthorized:false
    //   }
    // });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <nasehi.amir@gmail.com>', // sender address
        to: 'nasehi.amir@gmail.com', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world? ', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    transporter.sendMail(mailOptions, (error, info) => {
        
        if (error) {
            return console.log(error);
            return console.log("failed");
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
   
        res.render('/contact', {msg:'Email has been sent'});
    });
    });
  
// finish -> export
module.exports = router;
