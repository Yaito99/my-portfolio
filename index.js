var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')));


//Static file declarationapp.use(express.static(path.join(__dirname, 'react/build')));
//production modeif(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'react/build')));  //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
//build modeapp.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/react/public/index.html'));})

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is ready to take messages ${port}`);
  }
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'yahya.nageh99@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Mail from portfolio',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
      console.log(err)
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(port)