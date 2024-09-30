const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('respondiendo en express v2')
})

router.get('/servicios', (req, res) => {
    res.send('estas en página servicios')
})

module.exports = router; 