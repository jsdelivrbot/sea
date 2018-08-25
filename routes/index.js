var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send-mail', function(req, res, next) {
let nombre =req.body.user.nombre ; 
let apellido = req.body.user.apellido ; 
let mail =  req.body.user.mail ; 
let mensaj = req.body.user.mensaj ; 
let  fullname = toString(nombre)+" "+toString(apellido) + ", "+toString(mail);



var nodemailer = require('nodemailer');
  
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'seagledesing@gmail.com',
        pass: 'masciotra26'
  }
});
  
  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: fullname , // sender address
      to: 'lucas_masciotra@hotmail.com', // list of receivers
      subject: 'Consulta Seagle', // Subject line
      text: mensaj, // plaintext body
      
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
  




  var filePath = "./public/gracias.html"
  var resolvedPath = path.resolve(filePath);
  //console.log(resolvedPath);
  res.sendFile(resolvedPath)



});



module.exports = router;
