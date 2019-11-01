const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/public/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/public/contact_us',function(req,res){
  res.sendFile(path.join(__dirname+'/contact_us.html'));
});


//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');