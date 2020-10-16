const express = require('express');
const router = express.Router();

/* GET admin page. */
router.get('/', (req, res, next)=> {
  res.render('admin', { title: 'Admin panel' });
});

module.exports = router;
