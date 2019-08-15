const express = require('express');
const Router = express.Router();
const handlers = require('../handlers/handlers')

Router.get('/' , (req ,res)=>{
    console.log(`the client asked for:  ${req.url}`)
    handlers.getAll(req, res);
})
Router.get('/:id' , (req ,res)=>{
    console.log(`the client asked for:  ${req.url}`)
    handlers.getSpecific(req, res);
})

Router.post('/post' , (req ,res)=>{
    console.log(`the client asked for:  ${req.url}`)
    handlers.post(req, res);
})

Router.put('/:id' , (req ,res)=>{
    console.log(`the client asked for:  ${req.url}`)
    handlers.put(req, res);
})

Router.delete('/:id' , (req ,res)=>{
    console.log(`the client asked for:  ${req.url}`)
    handlers.deleteById(req, res);
})


module.exports=Router;