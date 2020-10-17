const express = require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    res.render('login', { title: 'Admin login' });
});

module.exports = router;
  
// router.post('/', (req, res)=> {
    
  
//     res.redirect('/admin');
// });