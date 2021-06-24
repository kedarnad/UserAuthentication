const express = require('express')
const router = express.Router();

//LOGIN page
router.get('/', (req, res)=> res.send('Welcome')); // router with a get request:

module.exports =router;
