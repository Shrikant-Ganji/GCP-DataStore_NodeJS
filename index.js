var express = require('express');
var app = express();
var config = require('./config');
const {Datastore} = require('@google-cloud/datastore');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const datastore = new Datastore({
    projectId:config.projectId,
    keyFile:config.keyFile
});

//Welcome Page
app.get('/', (req, res, next)=>{
    res.sendFile("Welcome to GCP PoC");
});

//Get Customers Details
app.get('/getCustomers',(req,res)=>{
    var query=datastore.createQuery('customer');
   
    datastore.runQuery(query,(err,data)=>{
        if(err)
        console.log(err);
        else
        var customerId = data.map((customer) => ({ _id: customer[datastore.KEY].id, ...customer }));
        res.send(customerId);
    });
});

// Get Customer Details by using ID
app.get('/getCustomerById',(req,res)=>{
    console.log(req.query);
    const id=   datastore.key(['customer',parseInt (req.query.id)]);
    const query = datastore.createQuery('customer').filter('__key__', '=',id);
    datastore.runQuery(query,(err,data)=>{
    if(err)
    console.log(err);
    else
    res.send(data);
    });
});

// Adding the New Customer
app.post('/addNewCustomer', (req,res)=> {
    var key=datastore.key(['customer']);
    var entity={
    key:key,
    data:req.body
    };
    datastore.save(entity,(err,data)=>{
    if(err)
    res.status(404).send(err);
    else
        res 
        .status(200)
        .send(data)
        .end();
    });  
});

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, (req, res) => {
     console.log(`Server Listening at Port ${PORT}`);
 });