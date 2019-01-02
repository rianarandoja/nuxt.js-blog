const express = require('express')

const router = express.Router()

router.get('/data', (req, res) => {
  console.log('GET /data')
  res.json({ message: 'Success' })
})

router.post('/track-data', (req, res) => {
  console.log(`POST /track-data ${req.body.data}`)
  res.status(200).json({ message: `Success: ${req.body.data}` })
})

module.exports = router
