var router = require('express').Router()

const tracker = require('./routes/tracker')

router.use(tracker)

module.exports = router
