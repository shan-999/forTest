const express = require('express')
const router = express.Router()
const controller = require('../controller/samp')


router.get('/',controller.sampfuntion)


module.exports = router