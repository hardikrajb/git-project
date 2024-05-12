const {connectdb} = require('./connect');
const {Dgh} = require('./schema');
const dgh_controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/cutomer',cust_controller.insertcust);
app.get('/api/customer',cust_controller.getallcust);
app.get('/api/customer/:Name', cust_controller.getcust);
app.put('/api/customer/:Name', cust_controller.updatecust);
app.delete('/api/customer/:Name',cust_controller.deletecust);
    
const port = 9000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
