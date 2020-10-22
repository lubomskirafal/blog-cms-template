const express = require('express');
const router = express.Router();
const Article = require('../models/article');

/* GET home page. */
router.get('/', (req, res)=> {
  
  Article.find({}, (err, articles) => {
    
    res.render('articles', { title: 'All articles', articles });
  });
});

module.exports = router;
