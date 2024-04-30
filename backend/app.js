const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const cookie = require('cookie-parser')
app.use(cookie())
app.use(
  cors({
    origin: process.env.FRONT_END,
    credentials: true,
  })
);


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",   process.env.FRONT_END);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended  : true}))
const Post = require('./routes/post');
const User = require('./routes/user');
const Message = require('./routes/message');
const Chat  = require('./routes/chat')
const Notifications  = require('./routes/notifications')
app.use('/api/v1',Post);
app.use('/api/v1', User);
app.use('/api/v1',Chat)
app.use('/api/v1',Message)
app.use('/api/v1',Notifications)




module.exports = app
