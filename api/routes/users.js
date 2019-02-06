const express = require('express')

const router = express.Router()

const users = [{ name: 'One' }, { name: 'Two' }]

router.get('/users', function(req, res) {
  console.log('GET /users')
  res.json(users)
})

module.exports = router
