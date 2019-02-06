var router = require('express').Router()

const tracker = require('./routes/tracker')
const users = require('./routes/users')

router.use(tracker)
router.use(users)

module.exports = router
