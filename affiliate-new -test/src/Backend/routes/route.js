const express = require('express')
const router = express.Router()
const { RegisterUser } = require('../controller/registerController')

//================Registration API==============================
router.post('/register', RegisterUser)


router.all("/*", (req, res) => { res.status(400).send({ status: false, message: "Endpoint is not correct plese provide a proper end-point" }) })

module.exports = router