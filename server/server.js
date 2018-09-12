require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    const app = express()

app.use(bodyParser.json())
 
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}))

massive(process.env.CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log('DATABASE CONNECTED!')
})

const PORT = 4007
app.listen(PORT, () => {
  console.log("COME ON AND SLAM *_*", PORT)
})