const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:rootADMIN00@cluster0.iv68w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express()

app.get('/products', function(req, res){
  res.json({'success':true})
})

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
  console.log('I am running')
})



