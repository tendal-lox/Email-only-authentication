const router = require('express').Router()
const {recordFunction, verification} = require('../service/routeFunction')

router.post('/register', async (req, res) => {
    const email = req.body.email
    await recordFunction(res, email)
    res.send('Check your Email')
})

router.get('/verify', async (req, res) => {
    const recivedToken = req.query.token
    verification(res, recivedToken)
})

module.exports = router