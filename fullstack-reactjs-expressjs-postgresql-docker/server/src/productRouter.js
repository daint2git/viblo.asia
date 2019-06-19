const express = require('express')
const router = express.Router()

const { findAll } = require('./productController')

router.get('/', findAll)

module.exports = router
