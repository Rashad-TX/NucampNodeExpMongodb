const express = require('express');
const res = require('express/lib/response');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.all((req,res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res)=>{
    res.end('Will send back a promotion to you')
})
.post((req,res)=>{
res.status =403;
res.end('POST operation not supported on /promotions/:promotionId')
})
.put((req,res)=>{
res.end('Will update promotions')
})
.delete((req,res)=>{
res.end('Will delete promotion')
})
module.exports = promotionRouter;
