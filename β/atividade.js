const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log('Server ta on no 8081')
})

app.get('/atividade', function(req,res){
    res.send('<h1>Olá</h1>' +
    '<p>Esse código serve para enviar tags HTML utilizando node</p>' + 
    '<ol><li>ansuz</li><li>peorth</li><li>Haglaz</li></ol>')
})