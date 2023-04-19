const express = require('express')
const app = express()
const router = require('./controller/route')
require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const {DBconnection} = require('./service/dataBase')
DBconnection()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.urlencoded({extended: false}))
app.use(router)

async function start () {
    try {
        app.listen(process.env.PORT || 4000)
        console.log('server connected')
    } catch (err) {
        console.error(err)
    }
}
start()