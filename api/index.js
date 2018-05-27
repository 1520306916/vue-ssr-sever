const router = require("express").Router()
const user = require('./interface')


router.use(user)

module.exports = router