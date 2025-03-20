require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

http.createServer(app).listen(process.env.PORT, () => {
  console.log('Listening...')
})