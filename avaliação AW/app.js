const express = require('express')
const app = express()

app.get('/', function(req,res){
res.sendFile(__dirname + '/html/index.html')
})

app.get('/page/:nome/:idade/:email', function(req,res){
    res.send('<h1>' + req.params.nome + '</h1><br>' +  '<h1>' + req.params.idade + '</h1><br>' + '<h1>' + req.params.email + '</h1><br>' + 
    '<p>Esse é um teste de paragrafo</p> <br> <input placeholder="esse é um teste de input"></input> <br> <button>Botão</button><br>' + 
    '<ol>Lista <li>Item um</li> <li>Item dois</li> <li>Item três</li></ol>')

})

app.listen(8081, function(){
    console.log('Server tá bala no 8081')
})
