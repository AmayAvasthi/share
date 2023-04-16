const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
app.get('/',(req, res)=>{res.sendFile(path.join(__dirname,'views/index.html'))});
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.listen(port,()=>console.log("Listening at port "+port));