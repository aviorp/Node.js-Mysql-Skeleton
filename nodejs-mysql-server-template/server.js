const path = require('path');
const express = require('express');
const app = express();
const db = require('./db/db')
const cors = require('cors');
const routes = require('./routes/routes')
const port = 33440;
global.Application = app;

app.use(cors());

app.use(express.static(path.join(__dirname , "client")));

app.use(express.json());

app.use(routes)

db.Open(app)

app.listen(port, ()=>{console.log(`Server Running On Port : ${port} `)})
