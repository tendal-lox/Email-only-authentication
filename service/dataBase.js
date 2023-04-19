const mongoose = require("mongoose")
const emailModel = require('../mogoonseModel/index')

module.exports.DBconnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('dataBase connected')
    } catch (err) {
        console.error(err)
    }
}

module.exports.insertRecord = async (email) => {
    return new emailModel({email: email}).save()
}