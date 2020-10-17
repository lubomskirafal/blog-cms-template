const express = require('express');
const router = express.Router();
const email = 'luomskirafal@gmail.com';
const password = '1234';

const isValid = {
    email: false,
    password: false
};

router.get('/', (req, res)=> {
    res.render('login', { title: 'Admin login' });
});

router.post('/', (req, res)=> {
    const body = req.body;

    console.log(body)


    res.redirect('/login');
});

module.exports = router;
  
// router.post('/', (req, res)=> {
    
  
//     res.redirect('/admin');
// });