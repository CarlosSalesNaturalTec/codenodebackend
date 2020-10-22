const express = require('express')
const app = express()

app.get('/', function(req,res) {
    res.send('Vc está andando');
})

app.listen(3000)