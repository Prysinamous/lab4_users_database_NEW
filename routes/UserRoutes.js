const express = require('express');
const app = express();
const userModel = require('../models/Users');
const sample = require('../sample');

//http://localhost:8081/employee
app.post('/', async (req, res) => {
  
    const user = new userModel(req.body);  
    try 
    {
        res.status(200).send(users)
    } 
    catch(err) 
    {
        console.log("An Error has occured: " + err)
        res.status(500).send(err)
    }
  });


// POST a User / Create New Records
app.post('/sample', async (req, res) => {
    User.insertMany(sample)
})

module.exports = app
