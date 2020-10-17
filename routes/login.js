const express = require('express');
const router = express.Router();
const email = 'lubomski.rafal@gmail.com';
const password = '1234';

const isValid = {
    email: false,
    password: false
};

router.get('/', (req, res)=> {
    res.render('login', { title: 'Admin login' });
});

router.post('/', (req, res)=> {
    const {loginEmail, loginPsw} = req.body;

    loginEmail===email?isValid.email=true:isValid.email=false;
    loginPsw===password?isValid.password=true:isValid.password=false;

    if(isValid.email && isValid.password) res.redirect('./admin');
    res.redirect('/login');
});

module.exports = router;
  