const express = require('express')

const app = express()

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = app