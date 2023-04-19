"use strict";
const nodemailer = require("nodemailer")

module.exports.mailsender = async (email, token) => {
    const testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
        }
    })

    const info = await transporter.sendMail({
        from: "fathi4763@gmail.com",
        to: email,
        subject: "login",
        html: `<a herf="http://localhost:3000/verify?token=${token}">http://localhost:3000/verify?token=${token}</a>`
    })

    console.log("Message sent: %s", info.messageId)

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}