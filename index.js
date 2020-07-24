const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserController = require('./api/user/UserController.js');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use('/api/users', UserController);



mongoose.connect('mongodb+srv://user:1234@cluster0.fcvqd.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(() => {console.log("몽고디비 연결 성공")})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('서버 기동 :' + port);
});
