const {insertRecord} = require('./dataBase')
const jwt = require('jsonwebtoken')
const {mailsender} = require('./sendMail')

module.exports.recordFunction = async (res, email) => {
    const listData = await insertRecord(email)
    if (!listData) {
        res.sendStatus(400).send('Check your email')
    }
    const token = jwt.sign({id: listData.id}, process.env.SECRET_KEY, {
        expiresIn: '600s'
    })
    mailsender(email, token)
}

module.exports.verification = async (res, recivedToken) => {
    const decodedToken = jwt.verify(recivedToken, process.env.SECRET_KEY)
    if (decodedToken) {
        res.send(decodedToken.id)
    }
}