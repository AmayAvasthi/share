const express = require('express');
const path = require('path');
const app = express();
const Product = require('./models/product');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json()); // add this line to use express.json() middleware

app.use(express.json()); // add this line to use express.json() middleware

app.get('/',(req, res)=>{res.sendFile(path.join(__dirname,'views/index.html'))});
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/need', function(req, res) {
    res.sendFile(__dirname + '/views/need.html');
});

app.get('/share', function(req, res){
    res.sendFile(__dirname + '/views/share.html');
});

app.post('/add_product', function(req, res){
    console.log("Product addeddgdgd");
    // console.log(req.body);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone_number = req.body.phone_number;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const description = req.body.description;
    const upload = req.body.upload;
    
    const prod = new Product(first_name, last_name, phone_number, address, city, state, zip, description, upload);
    prod.save();
    
    console.log(Product.findAll());
    res.send("Product saved");
});

app.listen(port,()=>console.log("Listening at port "+port));
