const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// router.all('*', (req, res, next)=> {
//   //secure admin session
//   if(!req.session.admin) {
    
//     res.redirect('login');

//     return;
//   };
//   next();
// });

/* GET admin page. */
router.get('/', (req, res)=> {

  res.render('admin', { title: 'Admin panel' });
});

module.exports = router;
