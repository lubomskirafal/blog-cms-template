const express = require('express');
const router = express.Router();
const Article = require('../models/article');

const getTimeStamp = ()=> {
  const date = new Date();

  const year = date.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const i = date.getMonth()
  const month = months[i];
  const day = date.getDate();

  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const clock = `${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`

  const timeStamp = `${day} ${month} ${year} ${clock}`;

  return timeStamp;
};
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

  // const article = new Article({
  //   title: 'Pierwszy wpis na blogu',
  //   content: 'To jest pierwszy wpis. to jest zawartośc wpisu',
  //   date: getTimeStamp()
  // });
  
  // article.save(err => console.log(err));
  
  
  res.render('admin/index', { title: 'Admin panel' });
});

router.get('/articles/add', (req, res) =>{
  res.render('admin/articleForm', {title: "Create article"});
});

module.exports = router;
