import nodemailer from "nodemailer";
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

// let testAccount = await nodemailer.createTestAccount();

// let options = {
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
// };

let options = {
    host: "mail.gandi.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "contact@foxvolant.com", 
      pass: `${process.env.GATSBY_SMTP_PASS}`, 
    },
  }

// let transporter = nodemailer.createTransport(options);

// async..await is not allowed in global scope, must use a wrapper
async function main(body) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(options);
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Fox Volant" <${body.email}>`, // sender address
      to: "contact@foxvolant.com", // list of receivers
      subject: `Contact Us page message from ${body.name}`, // Subject line
      text: `${JSON.stringify(body.message)}`, // plain text body
      html: `<b>Name: </b>${body.name}<br/>
      <b>Email: </b>${body.email}<br/>
      <b>Message: </b><p>${JSON.stringify(body.message)}</p>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  export default main;
